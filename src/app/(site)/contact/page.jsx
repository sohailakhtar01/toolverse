// app/contact/page.jsx
import React from "react";
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock, MessageCircle, Headphones } from 'lucide-react';
import Script from 'next/script';

// 🔥 ADVANCED SEO METADATA FOR CONTACT PAGE
export const metadata = {
  title: "Contact Us - Get in Touch with Toolsverse | AI Tools Directory Support",
  description: "Have questions about Toolsverse? Contact our team for support, tool submissions, partnerships, or any inquiries. We're here to help you discover the best AI tools.",

  keywords: [
    "contact toolsverse",
    "toolsverse support",
    "ai tools directory contact",
    "submit ai tool help",
    "toolsverse customer service",
    "partnership inquiry",
    "get in touch toolsverse"
  ],

  openGraph: {
    title: "Contact Toolsverse - We'd Love to Hear From You",
    description: "Get in touch with the Toolsverse team. Whether you have questions, feedback, or partnership opportunities, we're here to help.",
    url: "https://thetoolsverse.com/contact",
    siteName: "Toolsverse - AI Tools Directory",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Toolsverse",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Toolsverse - AI Tools Directory Support",
    description: "Have questions or need assistance? Reach out to our team today.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://thetoolsverse.com/contact",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ContactPage() {

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "sohail@thetoolsverse.com",
      description: "Send us an email anytime",
      link: "mailto:sohail@thetoolsverse.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 7320046645",
      description: "Mon-Fri from 9am to 6pm IST",
      link: "tel:+917320046645"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Bangalore, India",
      description: "Come say hello at our office",
      link: null
    },
  ];

  const quickHelp = [
    {
      icon: MessageCircle,
      title: "General Inquiries",
      description: "Questions about our directory or services"
    },
    {
      icon: Headphones,
      title: "Support",
      description: "Need help with your tool listing"
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "We respond within 24-48 hours"
    },
  ];

  return (
    <>
      {/* 🔥 STRUCTURED DATA FOR SEO */}
      <Script
        id="contact-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Toolsverse",
            "description": "Contact page for Toolsverse AI Tools Directory",
            "url": "https://thetoolsverse.com/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "Toolsverse",
              "url": "https://thetoolsverse.com",
              "logo": "https://thetoolsverse.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7320046645",
                "contactType": "Customer Service",
                "email": "sohail@thetoolsverse.com",
                "areaServed": "Worldwide",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangalore",
                "addressCountry": "IN"
              }
            }
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white">

        {/* Hero Section */}
        <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">

            {/* Badge */}
            <div className="mb-6 inline-block">
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                📧 We&apos;re Here to Help
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-spaceGrotesk mb-6">
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-4 font-spaceGrotesk">
              I&apos;d like to hear from you!
            </p>
            <p className="text-base text-gray-500 max-w-2xl mx-auto">
              If you have any inquiries or just want to say hi, please use the contact form below
            </p>

          </div>
        </section>

        {/* Main Contact Section - FORM FIRST */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">

              {/* Left Side - Contact Form (NOW FIRST IN VIEW) */}
              <div className="order-1">
                <ContactForm />
              </div>

              {/* Right Side - Additional Info */}
              <div className="order-2 space-y-8">

                {/* Quick Help Section */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    How Can We Help?
                  </h2>
                  <div className="space-y-6">
                    {quickHelp.map((help, index) => {
                      const Icon = help.icon;
                      return (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Icon className="w-6 h-6 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 mb-1">
                              {help.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {help.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-3">
                    Follow Us on Social Media
                  </h3>
                  <p className="text-purple-100 mb-6 text-sm">
                    Stay updated with the latest AI tools and industry news
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.facebook.com/kabil.sunny"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="https://x.com/1Akthar12?t=GdHKsmfS6yrUbGhkzrg8lQ&s=09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
                      aria-label="Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sohail-akhtar-197982343"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                      </svg>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Contact Info Cards - MOVED BELOW FORM */}
        <section className="pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Other Ways to Reach Us
              </h2>
              <p className="text-gray-600">
                Choose your preferred method of communication
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm border border-purple-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-purple-600 font-semibold hover:text-purple-700 mb-1"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-purple-600 font-semibold mb-1">
                          {info.content}
                        </p>
                      )}
                      <p className="text-sm text-gray-500">
                        {info.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Map or Additional CTA Section (Optional) */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Looking for Something Else?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Explore our directory or submit your AI tool today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/browse-tools"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Browse AI Tools
              </a>
              <a
                href="/submit-tool"
                className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all"
              >
                Submit Your Tool
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
