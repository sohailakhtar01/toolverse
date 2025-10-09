// components/ContactForm.jsx
"use client";

import { useState } from 'react';
import { Send, CheckCircle2, XCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Create FormData object for Web3Forms
    const formDataToSend = new FormData();
    
    // Add Web3Forms access key
    formDataToSend.append("access_key", "bda71378-34ab-45ca-84da-31ae5ca278ea");
    
    // Add custom subject line for contact messages
    formDataToSend.append("subject", "📧 New Contact Message - Toolsverse");
    
    // Add form fields
    formDataToSend.append("name", `${formData.firstName} ${formData.lastName}`);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    
    // Optional: Add these for better email organization
    formDataToSend.append("from_name", `${formData.firstName} ${formData.lastName}`);
    formDataToSend.append("replyto", formData.email);

    console.log("=== SUBMITTING CONTACT FORM ===");
    for (let [key, value] of formDataToSend.entries()) {
      console.log(key + ': ' + value);
    }

    try {
      // Submit to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();
      console.log("Web3Forms Response:", data);

      if (data.success) {
        // Success!
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
        
        // Auto-hide success message after 8 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 8000);
      } else {
        // Web3Forms returned an error
        console.error("Web3Forms error:", data.message);
        setSubmitStatus('error');
        
        // Auto-hide error message after 8 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 8000);
      }
      
    } catch (error) {
      // Network or other error
      console.error("Submission error:", error);
      setSubmitStatus('error');
      
      // Auto-hide error message after 8 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-amber-50/50 to-orange-50/50 rounded-2xl p-8 border border-amber-200/50 shadow-lg">
      
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
          <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-green-900 mb-1">Message Sent Successfully! 🎉</h3>
            <p className="text-sm text-green-700">
              Thank you for reaching out! We&apos;ve received your message and will get back to you within 24-48 hours at <strong>{formData.email || 'your email'}</strong>.
            </p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border-2 border-red-500 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
          <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-red-900 mb-1">Oops! Something Went Wrong</h3>
            <p className="text-sm text-red-700">
              We couldn&apos;t send your message. Please try again or email us directly at{' '}
              <a href="mailto:sohail@thetoolsverse.com" className="underline font-semibold hover:text-red-800">
                sohail@thetoolsverse.com
              </a>
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Name Fields */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="john@example.com"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Tell us how we can help you..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full cursor-pointer sm:w-auto px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send
              <Send className="w-5 h-5" />
            </>
          )}
        </button>

      </form>
    </div>
  );
}
