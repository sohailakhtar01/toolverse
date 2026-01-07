import { Shield, Clock, Mail, Phone, ChevronRight } from 'lucide-react';

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
  const lastUpdated = "January 6, 2026";
  const effectiveDate = "January 1, 2024";

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Hero */}
      <div className="bg-gradient-to-b from-slate-50 to-white border-b border-gray-200 pt-24 pb-12 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Terms of Service</h1>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            Last updated: {lastUpdated} · Effective: {effectiveDate}
          </p>
          <p className="text-gray-700 leading-relaxed max-w-2xl">
            These terms govern your use of TheToolsVerse. By accessing our platform, you agree to these terms.
          </p>
        </div>
      </div>

      {/* Main Content - Clean Typography */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Important Notice */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12">
          <p className="text-gray-900 leading-relaxed">
            <strong>Legal Agreement:</strong> By accessing TheToolsVerse, you agree to be bound by these terms.
            If you do not agree, please discontinue use of our services.
          </p>
        </div>

        {/* Content Sections - Minimal Design */}
        <div className="prose prose-lg prose-gray max-w-none">

          {/* Section 1 */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to TheToolsVerse, operated by TheToolsVerse Inc. These Terms of Service govern your access to and use of our website and services.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              By using our platform, you confirm that you are at least 18 years old and have the legal capacity to enter into this agreement.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mt-6">
              <p className="text-sm text-gray-700">
                <strong>Effective Date:</strong> These terms became effective on {effectiveDate} and were last updated on {lastUpdated}.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Description of Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              TheToolsVerse is a directory platform for artificial intelligence tools and software. We provide curated information, reviews, and comparisons.
            </p>
            <div className="space-y-3 my-6">
              <div className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">AI tools directory with 1,000+ listings</span>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Expert reviews and user ratings</span>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Comparison tools and guides</span>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Educational resources and tutorials</span>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. User Conduct</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to use our services responsibly and in accordance with applicable laws.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Permitted Use</h3>
            <p className="text-gray-700 leading-relaxed">
              You may browse our directory, read reviews, and access educational content for personal or commercial research purposes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Prohibited Activities</h3>
            <ul className="space-y-2 text-gray-700 my-4">
              <li>• Scraping or automated data extraction</li>
              <li>• Posting spam or malicious content</li>
              <li>• Attempting to breach security measures</li>
              <li>• Impersonating others or creating fake accounts</li>
              <li>• Commercial use without permission</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content on TheToolsVerse, including design, text, graphics, and code, is protected by copyright and trademark laws.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tool logos and trademarks remain the property of their respective owners. Product descriptions are used under fair use for educational purposes.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your privacy is important to us. We collect usage data, device information, and cookies to improve our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We implement industry-standard security measures and never sell personal information. For details, see our Privacy Policy.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Disclaimers</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6">
              <p className="text-gray-900 font-medium mb-2">Important Notice</p>
              <p className="text-gray-700">
                Our services are provided "as is" without warranties. We are not responsible for third-party tools, their performance, or transactions between users and tool providers.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We do not guarantee uninterrupted service or the accuracy of all information. Use of third-party tools is at your own risk.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the maximum extent permitted by law, TheToolsVerse shall not be liable for indirect, incidental, or consequential damages including loss of profits, data, or business interruption.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5 mt-6">
              <p className="text-sm text-gray-900">
                <strong>Maximum Liability:</strong> Our total liability shall not exceed $100 USD or the amount you paid us in the preceding 12 months.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Either party may terminate this agreement at any time. We may suspend access for violations of these terms or for legal requirements.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Upon termination, your right to use our services ceases immediately. Provisions regarding intellectual property and liability survive termination.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These terms are governed by the laws of the United States and the State of Delaware, without regard to conflict of law principles.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Any disputes shall be resolved in the federal or state courts located in Delaware.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update these terms from time to time. Material changes will be posted on our website with an updated "Last Modified" date.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Continued use after updates constitutes acceptance of new terms. If you disagree, discontinue using our services.
            </p>
          </section>
        </div>

        {/* Contact Section - Minimal */}
        <div className="border-t border-gray-200 pt-12 mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions?</h2>
          <p className="text-gray-700 mb-6">
            If you have questions about these terms, please contact us:
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <a href="mailto:sohail@thetoolsverse.com" className="text-blue-600 hover:text-blue-700">
                sohail@thetoolsverse.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <a href="tel:+917320046645" className="text-blue-600 hover:text-blue-700">
                +91 7320046645
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700">Response within 24-48 hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
