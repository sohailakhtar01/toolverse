"use client"; // This is necessary for Next.js to treat this file as a client component
import { useState } from "react";
import Link from "next/link";
import { Wrench, Facebook, Twitter, Linkedin, Instagram, ChevronUp } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // For now, just log. Later integrate with EmailJS or backend
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-purple-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo + Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ToolVault
              </span>
            </div>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Discover the best digital tools and software to boost your productivity and grow your business.
            </p>
            <div className="flex space-x-3">
              {/* Social Icons */}
              <Link href="https://www.facebook.com/kabil.sunny" target="_blank" aria-label="Facebook">
                <div className="w-9 h-9 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors">
                  <Facebook className="w-5 h-5 text-purple-600" />
                </div>
              </Link>
              <Link href="https://x.com/1Akthar12?t=GdHKsmfS6yrUbGhkzrg8lQ&s=09" target="_blank" aria-label="Twitter">
                <div className="w-9 h-9 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors">
                  <Twitter className="w-5 h-5 text-purple-600" />
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/sohail-akhtar-197982343" target="_blank" aria-label="LinkedIn">
                <div className="w-9 h-9 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors">
                  <Linkedin className="w-5 h-5 text-purple-600" />
                </div>
              </Link>
              <Link href="https://www.instagram.com" target="_blank" aria-label="Instagram">
                <div className="w-9 h-9 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors">
                  <Instagram className="w-5 h-5 text-purple-600" />
                </div>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/browse-tools" className="text-gray-600 hover:text-purple-600">Browse Tools</Link></li>
              <li><Link href="/categories" className="text-gray-600 hover:text-purple-600">Categories</Link></li>
              <li><Link href="/featured" className="text-gray-600 hover:text-purple-600">Featured</Link></li>              <li><Link href="#" className="text-gray-600 hover:text-purple-600">Submit Tool</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-600 hover:text-purple-600">Help Center</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-purple-600">About Us</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-purple-600">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-purple-600">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-purple-600">API Docs</Link></li>
            </ul>
          </div>

          {/* Email Subscription */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Stay Updated</h4>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Get the latest tools and updates delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm border border-purple-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="px-4 cursor-pointer py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-r-lg hover:from-purple-600 hover:to-pink-600 transition-all text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-purple-100 mt-10 pt-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <span>📧 hello@toolvault.com</span>
              <span>📞 +91 7320046645</span>
              <span>📍 Bangalore,India</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>© {new Date().getFullYear()} ToolVault. All rights reserved.</span>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-purple-600 hover:text-purple-700 flex items-center"
              >
                <ChevronUp className="w-4 h-4 mr-1" /> Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
