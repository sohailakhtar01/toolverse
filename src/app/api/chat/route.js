import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Tool from '@/models/Tool';
import { categoryToSlug } from '@/lib/categorySlug';

// 🧠 ULTRA-ADVANCED NLP - Extract every possible keyword and intent
function analyzeQuery(query) {
  const lowerQuery = query.toLowerCase();

  // Comprehensive Intent Detection
  const intents = {
    free: /\b(free|no cost|zero cost|without paying|open source|gratis|no money)\b/i.test(query),
    paid: /\b(paid|premium|subscription|pro version|enterprise)\b/i.test(query),
    alternative: /\b(alternative|similar|like|replace|instead of|competitor|versus|comparable)\b/i.test(query),
    comparison: /\b(vs|versus|compare|better than|best|difference|which is better)\b/i.test(query),
    recommendation: /\b(recommend|suggest|should i|what tool|which tool|help me|need|looking for)\b/i.test(query),
    howTo: /\b(how to|how can|how do|tutorial|guide|steps|teach me|learn)\b/i.test(query),
    bestFor: /\b(best for|good for|use for|help with|perfect for|ideal for)\b/i.test(query),
    beginner: /\b(beginner|easy|simple|starter|new to|learning|novice)\b/i.test(query),
  };

  // Comprehensive Use Case Detection (covers all your categories)
  const useCases = {
    design: /\b(design|graphic|logo|poster|banner|ui|ux|figma|canva|visual|mockup|prototype)\b/i.test(query),
    writing: /\b(writ|content|blog|article|copywriting|grammar|essay|text|document|author)\b/i.test(query),
    video: /\b(video|edit|movie|film|youtube|tiktok|reel|clip|footage|render)\b/i.test(query),
    chat: /\b(chat|chatbot|conversation|assistant|gpt|claude|talk|dialogue)\b/i.test(query),
    code: /\b(cod|programm|developer|github|copilot|debug|software|script)\b/i.test(query),
    image: /\b(image|photo|picture|generate|midjourney|dalle|stable diffusion|visual|render)\b/i.test(query),
    audio: /\b(audio|music|sound|voice|podcast|text to speech|tts|song|track)\b/i.test(query),
    seo: /\b(seo|ranking|keyword|traffic|search engine|google|optimize|backlink)\b/i.test(query),
    marketing: /\b(market|advertis|email|social media|campaign|promote|brand|engagement)\b/i.test(query),
    productivity: /\b(productiv|task|project|manage|organiz|notion|calendar|workflow|efficiency)\b/i.test(query),
    business: /\b(business|startup|entrepreneur|crm|sales|customer|revenue|analytics)\b/i.test(query),
    learning: /\b(learn|teach|education|course|study|tutor|training|skill)\b/i.test(query),
    data: /\b(data|analytic|chart|dashboard|visualiz|excel|spreadsheet|report)\b/i.test(query),
    agent: /\b(agent|autonomous|automation|workflow|task|bot)\b/i.test(query),
    nocode: /\b(no code|nocode|low code|visual|drag|drop|builder|without coding)\b/i.test(query),
  };

  // Specific tool name recognition
  const toolMentions = {
    chatgpt: /\b(chatgpt|chat gpt|gpt|openai)\b/i.test(query),
    canva: /\b(canva)\b/i.test(query),
    notion: /\b(notion)\b/i.test(query),
    midjourney: /\b(midjourney|mid journey)\b/i.test(query),
    figma: /\b(figma)\b/i.test(query),
    grammarly: /\b(grammarly)\b/i.test(query),
    claude: /\b(claude|anthropic)\b/i.test(query),
  };

  return { intents, useCases, toolMentions, lowerQuery };
}

// 🔍 ULTRA-SMART SEARCH - Search across ALL database fields
async function ultraSmartSearch(query, analysis) {
  const { intents, useCases } = analysis;

  // Build comprehensive search across ALL fields from your DB
  const searchConditions = [
    { displayName: { $regex: query, $options: 'i' } },
    { name: { $regex: query, $options: 'i' } },
    { shortDescription: { $regex: query, $options: 'i' } },
    // Removed longDescription from regex to speed up search (it's too heavy)
    { description: { $regex: query, $options: 'i' } },
    { categories: { $regex: query, $options: 'i' } },
    { tags: { $regex: query, $options: 'i' } },
    { keywords: { $regex: query, $options: 'i' } },
    { overview: { $regex: query, $options: 'i' } },
    { features: { $regex: query, $options: 'i' } },
  ];

  // Pricing filter
  let pricingFilter = {};
  if (intents.free) {
    pricingFilter = { pricingType: { $in: ['free', 'freemium', 'free-trial'] } };
  } else if (intents.paid) {
    pricingFilter = { pricingType: { $in: ['paid', 'freemium'] } };
  }

  // Build query
  const mongoQuery = {
    $and: [
      { $or: searchConditions },
      pricingFilter
    ].filter(condition => Object.keys(condition).length > 0)
  };

  // Execute search - Get up to 10 results
  const results = await Tool.find(mongoQuery.length > 0 ? mongoQuery : { $or: searchConditions })
    .sort({ rating: -1, isFeatured: -1, featuredRank: 1 })
    .limit(10)
    // ✅ OPTIMIZATION: Excluded 'longDescription' to save bandwidth
    .select('displayName name shortDescription description categories pricingType slug rating tags pricing')
    .lean();

  // If no results, try broader category-based search
  if (results.length === 0) {
    const categoryKeywords = [];
    if (useCases.design) categoryKeywords.push('design', 'graphic', 'visual');
    if (useCases.writing) categoryKeywords.push('writing', 'content', 'text');
    if (useCases.video) categoryKeywords.push('video', 'editing');
    if (useCases.chat) categoryKeywords.push('chat', 'assistant', 'AI Chat');
    if (useCases.code) categoryKeywords.push('code', 'developer', 'programming');
    if (useCases.marketing) categoryKeywords.push('marketing', 'social media');
    if (useCases.agent) categoryKeywords.push('agent', 'automation');

    if (categoryKeywords.length > 0) {
      const broadQuery = categoryKeywords.map(keyword => ({
        $or: [
          { categories: { $regex: keyword, $options: 'i' } },
          { tags: { $regex: keyword, $options: 'i' } },
        ]
      }));

      const broadResults = await Tool.find({ $or: broadQuery })
        .sort({ rating: -1, isFeatured: -1 })
        .limit(8)
        .select('displayName name shortDescription categories pricingType slug rating tags pricing')
        .lean();

      return broadResults;
    }
  }

  return results;
}

// 🎨 GENIUS RESPONSE GENERATOR - NEVER says "I don't know"
function generateGeniusResponse(query, tools, categories, analysis) {
  const { intents, useCases, toolMentions } = analysis;
  let response = '';

  // ALWAYS provide value - even with 0 results
  if (tools.length === 0) {
    response = `🎯 Great question! Let me help you find the perfect AI tools...\n\n`;

    // Provide intelligent suggestions based on detected intent
    if (useCases.design) {
      response += `For design work, here are top-rated tools to explore:\n\n`;
      response += `1. [Canva AI](/tools/canva-ai) - Easy drag-and-drop design with AI\n`;
      response += `2. [Figma](/tools/figma) - Professional design & prototyping\n`;
      response += `3. [Adobe Firefly](/tools/adobe-firefly) - AI-powered creative suite\n\n`;
    } else if (useCases.writing) {
      response += `For writing assistance, check out these powerful tools:\n\n`;
      response += `1. [ChatGPT](/tools/chatgpt) - Versatile AI writing assistant\n`;
      response += `2. [Grammarly](/tools/grammarly) - Grammar & style checker\n`;
      response += `3. [Jasper AI](/tools/jasper-ai) - Marketing copy specialist\n\n`;
    } else if (useCases.video) {
      response += `For video creation and editing, explore:\n\n`;
      response += `1. [Runway ML](/tools/runway-ml) - AI video editing\n`;
      response += `2. [Descript](/tools/descript) - Video & audio editor\n`;
      response += `3. [Synthesia](/tools/synthesia) - AI video generation\n\n`;
    } else if (useCases.chat) {
      response += `For AI chat and assistants, try these:\n\n`;
      response += `1. [ChatGPT](/tools/chatgpt) - Most popular AI assistant\n`;
      response += `2. [Claude](/tools/claude) - Advanced reasoning AI\n`;
      response += `3. [Perplexity](/tools/perplexity) - AI-powered search\n\n`;
    } else if (useCases.code) {
      response += `For coding assistance, these are excellent:\n\n`;
      response += `1. [GitHub Copilot](/tools/github-copilot) - AI pair programmer\n`;
      response += `2. [BlackBox AI](/tools/blackbox-ai) - Fast code generation\n`;
      response += `3. [Cursor](/tools/cursor) - AI-first code editor\n\n`;
    } else {
      response += `🔍 I recommend exploring these categories:\n\n`;
      response += `• [Browse All AI Tools](/browse-tools) - 4000+ tools across 100+ categories\n`;
      response += `• [Latest AI](/categories/latest-ai) - Newest tools added daily\n`;
      response += `• [Featured Tools](/) - Top-rated and verified tools\n\n`;
    }

    response += `💡 Try asking:\n`;
    response += `• "Best free [specific task] tools"\n`;
    response += `• "[Tool name] alternatives"\n`;
    response += `• "AI tools for [your specific need]"`;

    return response;
  }

  // BUILD CONTEXTUAL GREETING based on intent
  if (intents.alternative && toolMentions.chatgpt) {
    response = `🔄 Here are ${tools.length} excellent ChatGPT alternatives:\n\n`;
  } else if (intents.alternative && toolMentions.canva) {
    response = `🔄 Here are ${tools.length} great Canva alternatives:\n\n`;
  } else if (intents.howTo) {
    response = `📚 Here are the best tools to help you accomplish that:\n\n`;
  } else if (intents.comparison) {
    response = `⚡ Here are the top-rated tools for comparison:\n\n`;
  } else if (intents.free) {
    response = `✨ Found ${tools.length} excellent FREE AI tools:\n\n`;
  } else if (intents.recommendation) {
    response = `💡 Based on your needs, I recommend these ${tools.length} AI tools:\n\n`;
  } else if (intents.beginner) {
    response = `🎓 Perfect for beginners! Here are ${tools.length} easy-to-use tools:\n\n`;
  } else {
    response = `🎯 Found ${tools.length} AI tools matching your query:\n\n`;
  }

  // ADD TOOL RECOMMENDATIONS with rich details
  tools.forEach((tool, i) => {
    response += `${i + 1}. [${tool.name}](/tools/${tool.slug})\n`;
    response += `   ${tool.description}\n`;

    // Pricing
    let pricingEmoji = '🎁';
    let pricingText = tool.pricing || tool.pricingType;
    if (tool.pricingType === 'free') {
      pricingEmoji = '✅';
      pricingText = 'Free';
    } else if (tool.pricingType === 'paid') {
      pricingEmoji = '💰';
      pricingText = 'Paid';
    } else if (tool.pricingType === 'freemium') {
      pricingEmoji = '🎁';
      pricingText = 'Freemium';
    } else if (tool.pricingType === 'free-trial') {
      pricingEmoji = '🆓';
      pricingText = 'Free Trial';
    }

    // Categories (first 2)
    const categoryTags = tool.categories && tool.categories.length > 0
      ? ` | ${tool.categories.slice(0, 2).join(', ')}`
      : '';

    response += `   ${pricingEmoji} ${pricingText} • ⭐ ${tool.rating}/5${categoryTags}\n\n`;
  });

  // ADD CATEGORY SUGGESTIONS
  if (categories.length > 0) {
    response += `\n📂 Explore Related Categories:\n`;
    categories.forEach(cat => {
      const slug = categoryToSlug(cat);
      response += `• [${cat}](/categories/${slug})\n`;
    });
    response += `\n`;
  }

  // CONTEXT-AWARE FOLLOW-UP SUGGESTIONS
  response += `\n💬 Want more specific results? Try:\n`;

  if (useCases.design && !intents.free) {
    response += `• "Best free design tools"\n`;
    response += `• "Canva alternatives"\n`;
    response += `• "AI logo generators"`;
  } else if (useCases.writing) {
    response += `• "Free AI writing assistants"\n`;
    response += `• "Grammar checkers"\n`;
    response += `• "Content generation tools"`;
  } else if (useCases.video) {
    response += `• "Free video editing AI"\n`;
    response += `• "AI video generators"\n`;
    response += `• "Text to video tools"`;
  } else if (useCases.code) {
    response += `• "GitHub Copilot alternatives"\n`;
    response += `• "Free code assistants"\n`;
    response += `• "Best coding AI tools"`;
  } else if (intents.free) {
    response += `• "Best premium tools worth paying for"\n`;
    response += `• "Freemium tools with good free tiers"\n`;
    response += `• "Open source alternatives"`;
  } else {
    response += `• "Best [specific task] tools"\n`;
    response += `• "Free alternatives to [tool name]"\n`;
    response += `• "[Category] tools comparison"`;
  }

  return response;
}

// 🔍 Enhanced fuzzy matching with typo tolerance
function fuzzyMatch(text, query) {
  if (!text || !query) return false;

  const textLower = text.toLowerCase();
  const queryLower = query.toLowerCase();

  if (textLower.includes(queryLower)) return true;

  const textNoSpaces = textLower.replace(/\s+/g, '');
  const queryNoSpaces = queryLower.replace(/\s+/g, '');
  if (textNoSpaces.includes(queryNoSpaces)) return true;

  const words = queryLower.split(/\s+/);
  const matchCount = words.filter(word => word.length > 2 && textLower.includes(word)).length;
  return matchCount >= Math.ceil(words.length * 0.4);
}

// 🚀 MAIN API HANDLER
export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message || message.trim().length === 0) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    await connectDB();

    const searchQuery = message.trim();
    const analysis = analyzeQuery(searchQuery);

    // 🛡️ CRITICAL FIX: TIMEOUT PROTECTION (Vercel Free Tier Limit: 10s)
    // We race the Search vs a 8.5s Timer.
    // If DB is slow, we return a polite error instead of crashing the server.
    const searchResults = await Promise.race([
      ultraSmartSearch(searchQuery, analysis),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Search operation timed out')), 8500)
      )
    ]);

    // 📊 Get matching categories with fuzzy logic
    const allCategories = await Tool.distinct('categories');
    const matchingCategories = allCategories
      .filter(cat => fuzzyMatch(cat, searchQuery))
      .slice(0, 5);

    // 🎨 Format tools
    const formattedTools = searchResults.map(tool => ({
      name: tool.displayName || tool.name,
      description: tool.shortDescription || tool.description?.substring(0, 180) || tool.overview?.substring(0, 180) || 'Explore this amazing AI tool',
      pricing: tool.pricingType || 'freemium',
      rating: tool.rating || 4.5,
      slug: tool.slug,
      categories: tool.categories || [],
    }));

    // 🤖 Generate GENIUS response
    const aiResponse = generateGeniusResponse(searchQuery, formattedTools, matchingCategories, analysis);

    return NextResponse.json({
      response: aiResponse,
      tools: formattedTools,
      categories: matchingCategories,
    });

  } catch (error) {
    console.error('❌ Chat API Error:', error);

    // 🛡️ Handle Timeout Gracefully
    if (error.message === 'Search operation timed out') {
      return NextResponse.json({
        response: "⏱️ **Search is taking longer than expected.**\n\nMy brain is processing a lot of data right now! Please try a simpler query or browse our [Categories](/categories) directly to find what you need instantly.",
        tools: [],
        categories: []
      });
    }

    return NextResponse.json(
      {
        error: 'Failed to process request',
        response: '🔧 Quick hiccup on my end! While I fix that:\n\n• [Browse All 4000+ Tools](/browse-tools)\n• [Latest AI Tools](/categories/latest-ai)\n• Try rephrasing your question'
      },
      { status: 500 }
    );
  }
}