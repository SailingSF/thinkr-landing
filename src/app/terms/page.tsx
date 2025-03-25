import React from 'react'

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700">
            By accessing or using the ThinkR AI Agent for Shopify (&ldquo;Service&rdquo;), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you do not have permission to access the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
          <p className="text-gray-700 mb-4">
            The Service is a Shopify application that provides AI-powered assistance for store management and analytics. The Service includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Store management tools powered by artificial intelligence</li>
            <li>Data insights and analytics for your Shopify store</li>
            <li>Proactive recommendations and notifications</li>
            <li>Integration with your Shopify store data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Shopify Account and Access</h2>
          <p className="text-gray-700">
            To use our Service, you must have a valid Shopify store and provide us with access to necessary store data as outlined in our Privacy Policy. You are responsible for maintaining the security of your Shopify account and for all activities that occur under your account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Data Usage and Privacy</h2>
          <p className="text-gray-700">
            Our collection and use of your information is governed by our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>, which is incorporated into these Terms of Service. By using the Service, you consent to the practices described in the Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Subscription and Payments</h2>
          <p className="text-gray-700 mb-4">
            The Service may offer subscription plans with different features and limitations. By selecting a paid subscription, you agree to pay the subscription fees indicated for your selected plan.
          </p>
          <p className="text-gray-700">
            All payments are processed through Shopify&rsquo;s billing system. Subscription fees are non-refundable except as required by law or as explicitly stated in these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Restrictions on Use</h2>
          <p className="text-gray-700 mb-4">
            You agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Use the Service for any illegal purpose or in violation of any laws</li>
            <li>Attempt to gain unauthorized access to any portion of the Service</li>
            <li>Interfere with or disrupt the Service or servers connected to the Service</li>
            <li>Reverse engineer or attempt to extract the source code of the Service</li>
            <li>Use the Service to transmit any malware or harmful code</li>
            <li>Resell, lease, or otherwise transfer your access to the Service</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
          <p className="text-gray-700">
            The Service, including all content, features, and functionality, is owned by us and is protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of the Service without our explicit permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Disclaimer of Warranties</h2>
          <p className="text-gray-700">
            The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, secure, or error-free. While our AI aims to provide helpful insights, we do not guarantee the accuracy of AI-generated recommendations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
          <p className="text-gray-700">
            To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service. In no event shall our total liability exceed the amount you paid for the Service in the six months prior to the event giving rise to the liability.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
          <p className="text-gray-700">
            You agree to indemnify and hold us harmless from any claims, damages, liabilities, costs, or expenses (including attorney&rsquo;s fees) arising from your use of the Service or violation of these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
          <p className="text-gray-700">
            We may terminate or suspend your access to the Service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users of the Service, us, or third parties, or for any other reason at our sole discretion.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">12. Changes to Terms</h2>
          <p className="text-gray-700">
            We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting an updated version of these Terms on our website and through the Shopify admin. Your continued use of the Service after such modifications constitutes your acceptance of the revised Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">13. Governing Law</h2>
          <p className="text-gray-700">
            These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law principles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
          <p className="text-gray-700">
            If you have any questions about these Terms, please contact us at:
            <br />
            Email: support@thinkr.pro
          </p>
        </section>

        <footer className="text-sm text-gray-500 mt-12">
          Last updated: {new Date().toLocaleDateString()}
        </footer>
      </div>
    </div>
  )
} 