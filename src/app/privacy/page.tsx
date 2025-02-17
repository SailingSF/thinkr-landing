import React from 'react'

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-700">
            This Privacy Policy describes how we collect, use, process, and disclose your information, including personal information, in conjunction with your access to and use of our Shopify App.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            When you install our app, we collect certain information necessary for the functionality and security of our service:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Store information (name, URL, contact details)</li>
            <li>Access to product and inventory data</li>
            <li>Order information</li>
            <li>Customer data as necessary for app functionality</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the collected information for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To provide customer support</li>
            <li>To detect, prevent and address technical issues</li>
            <li>To improve our service</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Data Storage and Security</h2>
          <p className="text-gray-700">
            We implement appropriate technical and organizational security measures to protect your data. Your information is stored on secure servers, and we use industry-standard encryption to protect data in transit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Data Sharing and Disclosure</h2>
          <p className="text-gray-700">
            We do not sell your personal information. We may share your information with third parties only in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>With your consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and prevent fraud</li>
            <li>With service providers who assist in our operations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
          <p className="text-gray-700 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to our use of your data</li>
            <li>Request data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;last updated&rdquo; date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            Email: privacy@thinkr.pro
          </p>
        </section>

        <footer className="text-sm text-gray-500 mt-12">
          Last updated: {new Date().toLocaleDateString()}
        </footer>
      </div>
    </div>
  )
}
