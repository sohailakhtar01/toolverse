// components/ToolSubmissionForm.jsx
'use client';
import { useState } from 'react';
import {
  Rocket,
  Globe,
  Upload,
  Edit3,
  PlusCircle,
  Mail,
  Loader2,
  CheckCircle,
  DollarSign,
  Folder,
  Info,
  X
} from 'lucide-react';

export default function ToolSubmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [categories, setCategories] = useState([
    "3D Generation",
    "AI & Machine Learning", 
    "AI Character",
    "AI Crypto",
    "AI Detection & Anti-Detection",
    "AI Girlfriend",
    "AI Healthcare",
    "AI Image Generation",
    "AI Investing",
    "AI OCR",
    "AI Recruiting",
    "AI Travel",
    "Affiliate Marketing Network",
    "Art & Creative Design",
    "B2B Marketing",
    "Business & Productivity",
    "Business Management",
    "Business Research",
    "Chatbots & Virtual Companions",
    "Cloud Storage",
    "Coding & Development",
    "Collaboration",
    "Contact Creation",
    "Content Creation",
    "CRM & Automation",
    "Customer Service",
    "Daily Life",
    "Design & Graphics",
    "Design & Media",
    "Education & Learning",
    "Education & Translation",
    "Email & SMS Campaigns",
    "Email Automation",
    "Featured",
    "Health & Wellness",
    "Image Analysis",
    "Image Generation & Editing",
    "Interior & Architectural Design",
    "Lead Generation",
    "Legal & Finance",
    "Marketing & Advertising",
    "Music & Audio",
    "Office & Productivity",
    "Productivity",
    "Productivity & Tools",
    "Professional Networking",
    "Project Management",
    "Research & Analysis",
    "Research & Data Analysis",
    "SEO & SEM",
    "Sales & Lead Generation",
    "Sales & Productivity",
    "Sales Intelligence",
    "Scheduling & Automation",
    "Social Media",
    "Storytelling & Entertainment",
    "Team Collaboration",
    "Video & Animation",
    "Video Conferencing",
    "Voice Generation & Conversion",
    "Web3",
    "Writing & Content",
    "Writing & Content Creation",
    "Writing & Editing"
  ]);

  const [newCategory, setNewCategory] = useState('');
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      const updatedCategories = [...categories, newCategory.trim()];
      setCategories(updatedCategories);
      setSelectedCategory(newCategory.trim().toLowerCase().replace(/\s+/g, '-'));
      setNewCategory('');
      setShowNewCategoryInput(false);
    }
  };

  // 🔥 COMPLETELY FIXED SUBMISSION HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get form data
    const formData = new FormData(e.target);
    
    // 🎯 CRITICAL: Add access key first
    formData.append("access_key", "bda71378-34ab-45ca-84da-31ae5ca278ea");
    
    // 🎯 Prevent Web3Forms redirect
    formData.append("redirect", "false");
    
    // 🎯 Custom subject line
    formData.append("subject", "🚀 New Tool Submission - TheToolsVerse");
    
    // 🎯 Debug: Log what we're sending
    console.log("=== FORM SUBMISSION DEBUG ===");
    for (let [key, value] of formData.entries()) {
      console.log(key + ': ' + value);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      // 🎯 Get the actual response
      const data = await response.json();
      console.log("API Response:", data);

      if (data.success) {
        console.log("✅ SUCCESS: Form submitted successfully!");
        setIsSubmitted(true);
        e.target.reset();
        setSelectedCategory('');
      } else {
        console.error("❌ SUBMISSION FAILED:", data);
        alert(`Submission failed: ${data.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error("❌ NETWORK ERROR:", error);
      alert(`Network error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full mx-auto p-6 sm:p-8 bg-white shadow-2xl rounded-2xl border border-purple-100">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Tool Submitted Successfully! 🎉
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Thank you for contributing to TheToolsVerse! We'll review your tool and get back to you within 48 hours.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-6 px-6 py-2 cursor-pointer hover:scale-105 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 text-sm sm:text-base"
            >
              Submit Another Tool
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-6 sm:py-12 px-4">
      <div className="max-w-3xl mt-6 sm:mt-10 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Submit Your SaaS
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Join thousands of amazing tools on TheToolsVerse. Help the community discover your innovative solution!
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-500 px-4">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Free Submission
            </span>
            <span className="flex items-center gap-1">
              <Loader2 className="w-4 h-4 text-blue-500" />
              48hr Review
            </span>
            <span className="flex items-center gap-1">
              <Info className="w-4 h-4 text-purple-500" />
              Quality Focused
            </span>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white shadow-2xl rounded-3xl p-6 sm:p-8 border border-purple-100">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            
            {/* Tool Name */}
            <div className="group">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-purple-600 transition-colors">
                <span className="flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Tool Name *
                </span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="e.g., ChatGPT, Canva, Notion"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-400 transition-all duration-200 text-base sm:text-lg placeholder-gray-400"
              />
            </div>

            {/* Website URL */}
            <div className="group">
              <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-purple-600 transition-colors">
                <span className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Website URL *
                </span>
              </label>
              <input
                type="url"
                id="website"
                name="website"
                required
                placeholder="https://example.com"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-400 transition-all duration-200 text-base sm:text-lg placeholder-gray-400"
              />
            </div>

            {/* Logo Upload */}
            {/* Replace file upload with URL input */}
<div className="group">
  <label htmlFor="logoUrl" className="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-purple-600 transition-colors">
    <span className="flex items-center gap-2">
      <Globe className="w-5 h-5" />
      Logo URL (Optional)
    </span>
  </label>
  <input
    type="url"
    id="logoUrl"
    name="logoUrl"
    placeholder="https://example.com/logo.png"
    className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-400 transition-all duration-200 text-base sm:text-lg placeholder-gray-400"
  />
  <p className="text-xs sm:text-sm text-gray-500 mt-2 flex items-center gap-1">
    <Info className="w-3 h-3 sm:w-4 sm:h-4" />
    Direct link to your tool's logo image
  </p>
</div>


            {/* Description */}
            <div className="group">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-purple-600 transition-colors">
                <span className="flex items-center gap-2">
                  <Edit3 className="w-5 h-5" />
                  Tool Description *
                </span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Describe what this tool does, its main features, and what makes it unique..."
                className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-400 transition-all duration-200 text-base sm:text-lg placeholder-gray-400 resize-none"
              />
            </div>

            {/* Category */}
            <div className="group">
              <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-purple-600 transition-colors">
                <span className="flex items-center gap-2">
                  <Folder className="w-5 h-5" />
                  Category *
                </span>
              </label>
              <div className="flex gap-2 items-start">
                <select
                  id="category"
                  name="category"
                  required
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="flex-grow cursor-pointer px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-400 transition-all duration-200 text-base sm:text-lg bg-white"
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat.toLowerCase().replace(/\s+/g, '-')}>
                      {cat}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => setShowNewCategoryInput(!showNewCategoryInput)}
                  className="flex-shrink-0 p-3 sm:p-4 text-purple-600 hover:text-purple-800 hover:bg-purple-50 rounded-xl transition-all duration-200"
                  title="Add New Category"
                >
                  <PlusCircle className="w-6 h-6 cursor-pointer" />
                </button>
              </div>

              {/* Add New Category Input */}
              {showNewCategoryInput && (
                <div className="mt-3 flex gap-2 sm:gap-3 items-center">
                  <input
                    type="text"
                    placeholder="Enter new category"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddCategory()}
                    className="flex-grow px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-400 transition-all duration-200 text-base sm:text-lg placeholder-gray-400"
                  />
                  <button
                    type="button"
                    onClick={handleAddCategory}
                    className="px-4 cursor-pointer sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowNewCategoryInput(false);
                      setNewCategory('');
                    }}
                    className="p-3 sm:p-4 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-5 h-5 cursor-pointer" />
                  </button>
                </div>
              )}
            </div>

            {/* Pricing Model */}
            <div className="group">
              <label htmlFor="pricing" className="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-purple-600 transition-colors">
                <span className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Pricing Model *
                </span>
              </label>
              <select
                id="pricing"
                name="pricing"
                required
                className="w-full cursor-pointer px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-400 transition-all duration-200 text-base sm:text-lg bg-white"
              >
                <option value="">Select Pricing Model</option>
                <option value="free">🆓 Free</option>
                <option value="freemium">🎯 Freemium (Free + Paid Plans)</option>
                <option value="paid">💎 Paid Only</option>
                <option value="subscription">🔄 Subscription Based</option>
                <option value="one-time">💳 One-time Purchase</option>
              </select>
            </div>

            {/* Contact Email */}
            <div className="group">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-purple-600 transition-colors">
                <span className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Your Email *
                </span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-400 transition-all duration-200 text-base sm:text-lg placeholder-gray-400"
              />
              <p className="text-xs sm:text-sm text-gray-500 mt-2">We'll use this to contact you about your submission status</p>
            </div>

            {/* Submit Button */}
            <div className="pt-4 sm:pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 sm:py-5 px-6 sm:px-8 rounded-2xl font-bold text-lg sm:text-xl text-white transition-all duration-300 transform hover:scale-105 cursor-pointer hover:shadow-2xl ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <Loader2 className="animate-spin w-5 h-5 sm:w-6 sm:h-6" />
                    Submitting Your Tool...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
                    Submit Tool for Review
                  </span>
                )}
              </button>
            </div>

            {/* Footer Note */}
            <div className="text-center pt-4 border-t border-gray-100">
              <p className="text-xs sm:text-sm text-gray-500">
                By submitting, you agree that your tool meets our quality standards and you have permission to list it.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
