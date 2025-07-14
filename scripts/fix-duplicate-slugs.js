const fs = require('fs');
const path = require('path');

// 1. Load the tools file
const toolsFile = path.join(__dirname, '../src/data/tools.js');
let content = fs.readFileSync(toolsFile, 'utf8');

// 2. Extract the array of tools
const toolsArrayMatch = content.match(/const tools\s*=\s*(\[\s*[\s\S]*?\]);/);

if (!toolsArrayMatch) {
  console.error('❌ Failed to find the tools array in tools.js');
  process.exit(1);
}

let toolsCode = toolsArrayMatch[1];

// 3. Parse the array using `eval` (safe since it's a local file)
let tools;
try {
  tools = eval(toolsCode);
} catch (err) {
  console.error('❌ Error parsing tools array:', err.message);
  process.exit(1);
}

// 4. Fix duplicate slugs by appending a counter
const seen = {};
for (let i = 0; i < tools.length; i++) {
  const originalSlug = tools[i].slug;
  if (seen[originalSlug]) {
    const newSlug = `${originalSlug}-${seen[originalSlug]}`;
    console.log(`🔁 Duplicate slug found: "${originalSlug}" → "${newSlug}"`);
    tools[i].slug = newSlug;
    seen[originalSlug]++;
  } else {
    seen[originalSlug] = 1;
  }
}

// 5. Rebuild the JS file content
const newContent = `export const tools = ${JSON.stringify(tools, null, 2)};\n`;

fs.writeFileSync(toolsFile, newContent, 'utf8');
console.log('✅ Duplicate slugs fixed and tools.js updated!');
