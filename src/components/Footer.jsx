"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from 'lucide-react';
import { Facebook, Twitter, Linkedin, Instagram, ChevronUp } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-purple-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">

        {/* ✅ Updated Grid: Now 6 columns on large screens to fit everything in one row */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">

          {/* 1. Logo + Description */}
          <div className="col-span-1 md:col-span-3 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Toolsverse Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ToolsVerse
              </span>
            </div>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Discover the best digital tools and software to boost your productivity.
            </p>
            <div className="flex space-x-3">
              <Link href="https://www.facebook.com/kabil.sunny" target="_blank" aria-label="Facebook">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors">
                  <Facebook className="w-4 h-4 text-purple-600" />
                </div>
              </Link>
              <Link href="https://x.com/1Akthar12" target="_blank" aria-label="Twitter">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors">
                  <Twitter className="w-4 h-4 text-purple-600" />
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/sohail-akhtar-197982343" target="_blank" aria-label="LinkedIn">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors">
                  <Linkedin className="w-4 h-4 text-purple-600" />
                </div>
              </Link>
              <Link href="https://www.instagram.com" target="_blank" aria-label="Instagram">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors">
                  <Instagram className="w-4 h-4 text-purple-600" />
                </div>
              </Link>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4 whitespace-nowrap">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/browse-tools" className="text-gray-600 hover:text-purple-600">Browse Tools</Link></li>
              <li><Link href="/submit-tool" className="text-gray-600 hover:text-purple-600">Submit Tool</Link></li>
              <li><Link href="/pricing" className="text-gray-600 hover:text-purple-600">Pricing</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-purple-600">Contact</Link></li>
            </ul>
          </div>

          {/* 3. Compare AI Tools */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4 whitespace-nowrap">Compare AI</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/compare/chatgpt-vs-claude" className="text-gray-600 hover:text-purple-600">ChatGPT vs Claude</Link></li>
              <li><Link href="/compare/chatgpt-vs-bard" className="text-gray-600 hover:text-purple-600">ChatGPT vs Bard</Link></li>
              <li><Link href="/compare/midjourney-vs-dalle" className="text-gray-600 hover:text-purple-600">Midjourney vs DALL·E</Link></li>
              <li><Link href="/compare/midjourney-vs-stable-diffusion" className="text-gray-600 hover:text-purple-600">Midjourney vs SD</Link></li>
              <li><Link href="/compare/chatgpt-vs-copilot" className="text-gray-600 hover:text-purple-600">ChatGPT vs Copilot</Link></li>
            </ul>
          </div>

          {/* 5. Support (✅ Separated) */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4 whitespace-nowrap">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-600 hover:text-purple-600">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-purple-600">AI News</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-600 hover:text-purple-600">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-purple-600">Terms</Link></li>
            </ul>
          </div>

          {/* 6. Email Subscription */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 whitespace-nowrap">Stay Updated</h4>
            <p className="text-gray-600 mb-4 text-sm">
              Get the latest tools and updates delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-purple-100 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <span className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>sohail@thetoolsverse.com</span>
              </span>
              <span className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 7320046645</span>
              </span>
              <span className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Bangalore, India</span>
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <span>© {new Date().getFullYear()} Toolsverse. All rights reserved.</span>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-purple-600 hover:text-purple-700 flex items-center font-medium"
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