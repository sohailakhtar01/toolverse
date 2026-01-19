import Script from "next/script";

// SEO Metadata for Privacy Policy Page
export const metadata = {
  title: "Privacy Policy - Toolsverse | AI Tools Directory Data Protection",
  description: "Privacy policy for Toolsverse AI Tools Directory. Learn how we collect, use, and protect your personal information, cookies policy, and data protection practices in compliance with GDPR, CCPA, and Google AdSense requirements.",
  keywords: [
    "privacy policy",
    "data protection",
    "cookie policy",
    "Toolsverse privacy",
    "GDPR compliance",
    "CCPA compliance",
    "user data protection",
    "advertising cookies"
  ],
  openGraph: {
    title: "Privacy Policy - Toolsverse",
    description: "Privacy policy and data protection practices for Toolsverse AI Tools Directory.",
    url: "https://thetoolsverse.com/privacy-policy",
    siteName: "Toolsverse - AI Tools Directory",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - Toolsverse",
    description: "Privacy policy and data protection practices for Toolsverse AI Tools Directory.",
  },
  alternates: {
    canonical: "https://thetoolsverse.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function PrivacyPolicy() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "Privacy policy for Toolsverse AI Tools Directory covering data collection, usage, and protection practices.",
    "url": "https://thetoolsverse.com/privacy-policy",
    "mainEntity": {
      "@type": "Article",
      "headline": "Privacy Policy - Toolsverse",
      "datePublished": "2025-10-04",
      "dateModified": "2025-10-04",
      "author": {
        "@type": "Organization",
        "name": "Toolsverse Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Toolsverse",
        "logo": {
          "@type": "ImageObject",
          "url": "https://thetoolsverse.com/logo.png"
        }
      }
    }
  };

  return (
    <>
      <Script
        id="privacy-policy-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Header Section */}
          <header className="mb-12">
            <h1 className="text-4xl text-center mt-5 sm:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last Updated: January 6, 2026
            </p>
            <p className="text-base text-gray-700 mt-4">
              At Toolsverse, accessible from{" "}
              <a
                href="https://thetoolsverse.com"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                https://thetoolsverse.com
              </a>
              , we are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </header>

          {/* Main Content */}
          <article className="prose prose-lg max-w-none">
            {/* Section 1: Introduction */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Privacy Policy describes how Toolsverse ("we," "us," or "our") collects, uses, stores, and shares information when you use our website and services. By accessing or using Toolsverse, you agree to the terms outlined in this Privacy Policy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We respect your privacy rights and are committed to complying with applicable data protection laws, including the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other international privacy regulations.
              </p>
            </section>

            {/* Section 2: Information We Collect */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                2.1 Personal Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect the following types of personal information when you interact with our website:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Name and email address (when you contact us or subscribe to newsletters)</li>
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website addresses</li>
                <li>Pages visited and time spent on our website</li>
                <li>Search queries and interaction with AI tools listed on our directory</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                2.2 Automatically Collected Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit Toolsverse, we automatically collect certain information through cookies, web beacons, and similar tracking technologies, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Log data (IP address, browser type, pages viewed)</li>
                <li>Device identifiers and characteristics</li>
                <li>Location information (general geographic location based on IP address)</li>
                <li>Analytics data about how you use our website</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                2.3 Information from Third Parties
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We may receive information about you from third-party services, analytics providers, and advertising partners that help us understand user behavior and improve our services.
              </p>
            </section>

            {/* Section 3: How We Use Your Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>To provide, maintain, and improve our AI tools directory services</li>
                <li>To personalize your experience and deliver relevant content</li>
                <li>To analyze website traffic and user behavior through Google Analytics</li>
                <li>To display personalized advertisements through Google AdSense and other advertising partners</li>
                <li>To communicate with you about updates, new features, and promotional offers</li>
                <li>To detect, prevent, and address technical issues and security threats</li>
                <li>To comply with legal obligations and enforce our terms of service</li>
                <li>To improve our SEO and marketing strategies</li>
              </ul>
            </section>

            {/* Section 4: Cookies and Tracking Technologies */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Cookies and Tracking Technologies
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                4.1 What Are Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us recognize your browser, remember your preferences, and improve your user experience.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                4.2 Types of Cookies We Use
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website (Google Analytics)</li>
                <li><strong>Advertising Cookies:</strong> Used to display personalized ads based on your interests (Google AdSense)</li>
                <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                4.3 Managing Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies or delete cookies that have been set. However, disabling cookies may affect your ability to use certain features of our website.
              </p>
            </section>

            {/* Section 5: Third-Party Advertising (UPDATED FOR ADSENSE COMPLIANCE) */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Third-Party Advertising and Google AdSense
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                5.1 Google AdSense & Cookie Usage
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use Google AdSense to display advertisements on Toolsverse. Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website or other websites.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong>How Google uses your data:</strong> For more detailed information on how Google uses data when you use our partners' sites or apps, please visit:{" "}
                  <a
                    href="https://policies.google.com/technologies/partner-sites"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 underline font-medium"
                  >
                    How Google uses data when you use our partners' sites or apps
                  </a>.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                5.2 Opting Out of Personalized Advertising
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Users may opt out of personalized advertising by visiting the following links:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>
                  <a
                    href="https://www.google.com/settings/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Google Ads Settings
                  </a>
                </li>
                <li>
                  <a
                    href="https://optout.aboutads.info/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Digital Advertising Alliance Opt-Out
                  </a>
                </li>
              </ul>
            </section>

            {/* Section 6: Google Analytics */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Google Analytics
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use Google Analytics to analyze website traffic and user behavior. Google Analytics uses cookies to collect information such as how often users visit our site, what pages they visit, and what other sites they used prior to coming to our site.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The information collected by Google Analytics is used to improve our website and services. Google Analytics collects only the IP address assigned to you on the date you visit our site, rather than your name or other identifying information.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You can opt out of Google Analytics by installing the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </p>
            </section>

            {/* Section 7: Data Sharing */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. How We Share Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Service Providers:</strong> We share information with third-party service providers who help us operate our website, conduct business, or serve our users (e.g., hosting providers, analytics services, advertising networks)</li>
                <li><strong>Advertising Partners:</strong> We share information with Google AdSense and other advertising partners to display relevant advertisements</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required by law, court order, or governmental request</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity</li>
                <li><strong>With Your Consent:</strong> We may share your information for any other purpose with your explicit consent</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties for their marketing purposes without your explicit consent.
              </p>
            </section>

            {/* Section 8: Data Security */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Secure Socket Layer (SSL) encryption for data transmission</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Data backup and recovery procedures</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            {/* Section 9: Data Retention */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Data Retention
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </section>

            {/* Section 10: Your Privacy Rights */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Your Privacy Rights
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                10.1 General Rights
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete personal information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Objection:</strong> Object to the processing of your personal information</li>
                <li><strong>Restriction:</strong> Request restriction of processing your personal information</li>
                <li><strong>Data Portability:</strong> Request transfer of your personal information to another service</li>
                <li><strong>Withdraw Consent:</strong> Withdraw your consent to processing at any time</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                10.2 GDPR Rights (EU Users)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are located in the European Economic Area (EEA), you have additional rights under the GDPR, including the right to lodge a complaint with a supervisory authority.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                10.3 CCPA Rights (California Users)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are a California resident, you have the right to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Know what personal information we collect, use, disclose, and sell</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of the sale of your personal information</li>
                <li>Non-discrimination for exercising your privacy rights</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                10.4 How to Exercise Your Rights
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To exercise any of your privacy rights, please contact us at the email address provided in the "Contact Us" section below. We will respond to your request within the timeframe required by applicable law.
              </p>
            </section>

            {/* Section 11: Children's Privacy */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Children's Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Toolsverse is not intended for children under the age of 13 (or 16 in the EEA). We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information from our servers.
              </p>
            </section>

            {/* Section 12: International Data Transfers */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                12. International Data Transfers
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ from those in your jurisdiction.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using Toolsverse, you consent to the transfer of your information to our facilities and to the third parties with whom we share it as described in this Privacy Policy.
              </p>
            </section>

            {/* Section 13: Do Not Track */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                13. Do Not Track Signals
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Some web browsers incorporate a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, our website does not respond to DNT signals or similar mechanisms.
              </p>
            </section>

            {/* Section 14: Links to Other Websites */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                14. Links to Third-Party Websites
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website contains links to third-party AI tools and websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the privacy policy of every site you visit.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
              </p>
            </section>

            {/* Section 15: Changes to Privacy Policy */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                15. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update our Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. Your continued use of Toolsverse after any changes constitutes your acceptance of the updated Privacy Policy.
              </p>
            </section>

            {/* Section 16: Contact Us */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                16. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="text-gray-900 font-semibold mb-2">Toolsverse Team</p>
                <p className="text-gray-700 mb-2">
                  Website:{" "}
                  <a
                    href="https://thetoolsverse.com"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    https://thetoolsverse.com
                  </a>
                </p>
                <p className="text-gray-700">
                  Email:{" "}
                  <a
                    href="mailto:contact@thetoolsverse.com"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    sohail@thetoolsverse.com
                  </a>
                </p>
              </div>
            </section>

            {/* Section 17: Consent */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                17. Consent
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By using Toolsverse, you hereby consent to our Privacy Policy and agree to its terms and conditions.
              </p>
            </section>
          </article>

          {/* Back to Home Link */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <a
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
