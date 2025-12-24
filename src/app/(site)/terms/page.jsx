import { Shield, CheckCircle, AlertTriangle, Clock, Mail, Phone, 
         Globe, Users, Lock, Eye, FileText, Scale, Gavel } from 'lucide-react';

export async function generateMetadata() {
  return {
    title: 'Terms of Service - TheToolsVerse | AI Tools Directory Legal Terms 2025',
    description: 'Read TheToolsVerse terms of service, privacy policy, user agreement and legal conditions for using our AI tools directory platform.',
    keywords: 'terms of service, user agreement, legal terms, privacy policy, TheToolsVerse legal, AI tools directory terms',
    robots: 'index, follow',
    alternates: {
      canonical: 'https://thetoolsverse.com/terms'
    },
    openGraph: {
      title: 'Terms of Service - TheToolsVerse',
      description: 'Professional terms of service for TheToolsVerse AI tools directory platform.',
      url: 'https://thetoolsverse.com/terms',
      siteName: 'TheToolsVerse'
    }
  };
}

export default function TermsOfServicePage() {
  const lastUpdated = "October 9, 2025";
  const effectiveDate = "January 1, 2024";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 mt-16 via-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-12 h-12" />
            <h1 className="text-4xl lg:text-5xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto leading-relaxed">
            Your rights, responsibilities, and our commitment to providing the best AI tools directory experience
          </p>
          <div className="flex items-center justify-center gap-6 text-blue-200">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5" />
              <span>Effective: {effectiveDate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="font-medium text-gray-700">Quick Navigation:</span>
            <a href="#acceptance" className="text-blue-600 hover:text-blue-800 cursor-pointer">Acceptance</a>
            <a href="#services" className="text-blue-600 hover:text-blue-800 cursor-pointer">Services</a>
            <a href="#user-conduct" className="text-blue-600 hover:text-blue-800 cursor-pointer">User Conduct</a>
            <a href="#intellectual-property" className="text-blue-600 hover:text-blue-800 cursor-pointer">IP Rights</a>
            <a href="#privacy" className="text-blue-600 hover:text-blue-800 cursor-pointer">Privacy</a>
            <a href="#liability" className="text-blue-600 hover:text-blue-800 cursor-pointer">Liability</a>
            <a href="#contact" className="text-blue-600 hover:text-blue-800 cursor-pointer">Contact</a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Important Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-amber-900 mb-2">Important Legal Notice</h3>
              <p className="text-amber-800 leading-relaxed">
                By accessing and using TheToolsVerse website and services, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services. These terms constitute a legally binding agreement.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Content */}
        <div className="prose prose-lg prose-blue max-w-none">
          
          {/* Section 1: Acceptance */}
          <section id="acceptance" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-0">1. Acceptance of Terms</h2>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Welcome to TheToolsVerse, the premier AI tools directory platform operated by TheToolsVerse Inc. ("we," "us," or "our"). 
                These Terms of Service ("Terms") govern your access to and use of our website, services, and platform.
              </p>
              
              <h4 className="text-xl font-bold text-gray-900 mb-4">By using TheToolsVerse, you agree to:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Accept and comply with these Terms of Service</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Be legally bound by all provisions contained herein</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Acknowledge that you have read and understood these terms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Confirm you are at least 18 years old or have parental consent</span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-800 font-medium">
                  <strong>Effective Date:</strong> These terms became effective on {effectiveDate} and were last updated on {lastUpdated}.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Services Description */}
          <section id="services" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-0">2. Description of Services</h2>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                TheToolsVerse is a comprehensive directory and review platform for artificial intelligence tools and software. 
                We provide users with curated information, reviews, comparisons, and resources related to AI tools.
              </p>
              
              <h4 className="text-xl font-bold text-gray-900 mb-4">Our Services Include:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">AI Tools Directory</h5>
                      <p className="text-gray-600 text-sm">Comprehensive listing of 1000+ AI tools with detailed information</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">Expert Reviews</h5>
                      <p className="text-gray-600 text-sm">Professional reviews and ratings by our expert team</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Scale className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">Comparison Tools</h5>
                      <p className="text-gray-600 text-sm">Side-by-side comparisons of features and pricing</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">Educational Resources</h5>
                      <p className="text-gray-600 text-sm">Guides, tutorials, and AI industry insights</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-green-800">
                  <strong>Service Availability:</strong> We strive to maintain 99.9% uptime but do not guarantee uninterrupted service. 
                  Scheduled maintenance will be communicated in advance when possible.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: User Conduct */}
          <section id="user-conduct" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-0">3. User Conduct & Acceptable Use</h2>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To maintain a safe and professional environment for all users, we require compliance with the following conduct guidelines:
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Permitted Activities
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Browse and search our AI tools directory</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Read reviews and educational content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Share our content with proper attribution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Submit legitimate tool suggestions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Contact us with questions or feedback</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Prohibited Activities
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Scraping or automated data extraction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Posting spam, malware, or malicious content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Attempting to hack or compromise security</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Creating fake accounts or impersonation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Commercial use without express permission</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-red-800 font-medium">
                  <strong>Violation Consequences:</strong> Users who violate these terms may face immediate suspension or permanent ban from our services. 
                  We reserve the right to pursue legal action for serious violations.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Intellectual Property */}
          <section id="intellectual-property" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Lock className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-0">4. Intellectual Property Rights</h2>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                TheToolsVerse respects intellectual property rights and expects users to do the same. 
                All content on our platform is protected by applicable copyright, trademark, and other intellectual property laws.
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Our Intellectual Property</h4>
                  <p className="text-gray-700 mb-4">
                    The following elements are owned by TheToolsVerse and protected by intellectual property laws:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Website design, layout, and user interface</li>
                    <li>• TheToolsVerse brand name, logo, and trademarks</li>
                    <li>• Original content, reviews, and editorial material</li>
                    <li>• Database structure and organization</li>
                    <li>• Proprietary algorithms and recommendation systems</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Third-Party Content</h4>
                  <p className="text-gray-700 mb-4">
                    We respect the intellectual property rights of AI tool developers and other third parties:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Tool logos and trademarks remain property of their respective owners</li>
                    <li>• Product descriptions are used under fair use for educational purposes</li>
                    <li>• Screenshots and images are used with permission or under fair use</li>
                    <li>• We respond promptly to valid DMCA takedown requests</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">User Submissions</h4>
                  <p className="text-gray-700 mb-4">
                    When you submit content to TheToolsVerse (reviews, comments, suggestions):
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• You retain ownership of your original content</li>
                    <li>• You grant us a license to use, display, and distribute your submissions</li>
                    <li>• You warrant that you have the right to submit such content</li>
                    <li>• You agree your submissions do not violate any third-party rights</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Privacy & Data Protection */}
          <section id="privacy" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <Eye className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-0">5. Privacy & Data Protection</h2>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your privacy is important to us. This section outlines how we collect, use, and protect your personal information 
                when you use TheToolsVerse services.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Information We Collect</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span><strong>Usage Data:</strong> Pages visited, time spent, user interactions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span><strong>Device Info:</strong> Browser type, IP address, operating system</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span><strong>Contact Data:</strong> Email address (if provided voluntarily)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span><strong>Cookies:</strong> Analytics and functional cookies</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">How We Use Data</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <span>Improve our services and user experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <span>Provide personalized tool recommendations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <span>Analyze usage patterns and trends</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <span>Respond to user inquiries and support requests</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-6 bg-indigo-50 rounded-lg border border-indigo-200">
                <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Data Protection Commitment
                </h4>
                <p className="text-indigo-800">
                  We implement industry-standard security measures to protect your data. We never sell personal information to third parties. 
                  For detailed privacy practices, please review our comprehensive Privacy Policy.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Disclaimers & Limitation of Liability */}
          <section id="liability" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <Gavel className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-0">6. Disclaimers & Limitation of Liability</h2>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-amber-900 mb-2">Important Legal Disclaimers</h4>
                    <p className="text-amber-800">
                      Please read this section carefully as it limits our liability and explains the basis on which our services are provided.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">"As Is" Service Provision</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    TheToolsVerse services are provided "as is" and "as available" without warranties of any kind, either express or implied, 
                    including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                  </p>
                  <ul className="space-y-2 text-gray-700 pl-4">
                    <li>• We do not warrant that our services will be uninterrupted or error-free</li>
                    <li>• We do not guarantee the accuracy or completeness of information provided</li>
                    <li>• We do not warrant that defects will be corrected or that the service is virus-free</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Third-Party Tools & Services</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    TheToolsVerse is a directory and review platform. We are not responsible for:
                  </p>
                  <ul className="space-y-2 text-gray-700 pl-4">
                    <li>• The performance, quality, or functionality of third-party AI tools</li>
                    <li>• Transactions between users and AI tool providers</li>
                    <li>• Pricing changes, service disruptions, or policy changes by tool providers</li>
                    <li>• Data security or privacy practices of external tools and services</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Limitation of Liability</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To the maximum extent permitted by applicable law, TheToolsVerse shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages, including but not limited to:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Loss of profits or revenue</li>
                      <li>• Loss of data or information</li>
                      <li>• Business interruption</li>
                      <li>• Loss of reputation</li>
                    </ul>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Cost of procurement of substitute services</li>
                      <li>• Unauthorized access to data</li>
                      <li>• Errors or omissions in content</li>
                      <li>• Service unavailability</li>
                    </ul>
                  </div>
                  
                  <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-red-800 font-medium">
                      <strong>Maximum Liability:</strong> Our total liability to you for any claims arising from these terms or your use of our services 
                      shall not exceed $100 USD or the amount you paid us in the 12 months preceding the claim, whichever is greater.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Termination */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-gray-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-0">7. Termination</h2>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Either party may terminate this agreement at any time. Here's what happens upon termination:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Termination by You</h4>
                  <p className="text-gray-700 mb-4">You may stop using our services at any time by:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Discontinuing access to our website</li>
                    <li>• Requesting account deletion (if applicable)</li>
                    <li>• Contacting us to express your intent to terminate</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Termination by Us</h4>
                  <p className="text-gray-700 mb-4">We may terminate or suspend access for:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Violation of these Terms of Service</li>
                    <li>• Harmful or illegal activities</li>
                    <li>• Extended periods of inactivity</li>
                    <li>• Legal or regulatory requirements</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Effect of Termination</h4>
                <p className="text-gray-700">
                  Upon termination, your right to use our services ceases immediately. Provisions regarding intellectual property, 
                  disclaimers, and limitation of liability shall survive termination.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Governing Law */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Scale className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-0">8. Governing Law & Dispute Resolution</h2>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Governing Law</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    These Terms of Service shall be governed by and construed in accordance with the laws of the United States 
                    and the State of Delaware, without regard to conflict of law principles.
                  </p>
                  <p className="text-gray-700">
                    Any legal action or proceeding arising under these terms shall be brought exclusively in the federal or state courts 
                    located in Delaware, and the parties hereby consent to such jurisdiction.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Dispute Resolution</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We encourage resolving disputes through good-faith negotiation. Before pursuing formal legal action:
                  </p>
                  <ol className="space-y-2 text-gray-700">
                    <li>1. Contact us directly to discuss the issue</li>
                    <li>2. Allow 30 days for resolution attempts</li>
                    <li>3. Consider mediation if direct negotiation fails</li>
                    <li>4. Pursue arbitration or court proceedings as last resort</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9: Changes to Terms */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-0">9. Changes to These Terms</h2>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We may update these Terms of Service from time to time to reflect changes in our services, legal requirements, 
                or business practices. Here's how we handle updates:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Notice of Changes</h4>
                    <p className="text-gray-700">
                      We will notify users of material changes by posting the updated terms on our website and updating the 
                      "Last Modified" date. For significant changes, we may provide additional notice via email or website banner.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Effective Date</h4>
                    <p className="text-gray-700">
                      Updated terms become effective 30 days after posting, unless otherwise specified. 
                      Continued use of our services after the effective date constitutes acceptance of the new terms.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Your Options</h4>
                    <p className="text-gray-700">
                      If you disagree with updated terms, you may discontinue using our services. 
                      We maintain archives of previous terms versions for transparency and reference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <section id="contact" className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Questions About These Terms?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              We're here to help clarify any questions you may have about our Terms of Service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Email Support</h3>
              <p className="text-blue-100 mb-3">Get detailed responses to your legal questions</p>
              <a href="mailto:sohail@thetoolsverse.com" className="text-white font-medium hover:text-blue-200 cursor-pointer">
                sohail@thetoolsverse.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Phone Support</h3>
              <p className="text-blue-100 mb-3">Speak directly with our legal team</p>
              <a href="tel:+1-555-TOOLS-99" className="text-white font-medium hover:text-blue-200 cursor-pointer">
                +91 7320046645
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Response Time</h3>
              <p className="text-blue-100 mb-3">We typically respond within</p>
              <span className="text-white font-medium">24-48 hours</span>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-blue-200">
              For urgent legal matters, please call our phone support line. 
              Business hours: Monday-Friday, 9 AM - 6 PM EST
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
