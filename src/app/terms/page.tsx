import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Nano Banana",
  description: "Terms of Service for Nano Banana AI image editing service",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using Nano Banana's AI image editing service, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Description</h2>
              <p className="text-gray-700 mb-4">
                Nano Banana provides AI-powered image editing and enhancement services. Our platform allows users to upload images and apply various AI-driven modifications and improvements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>You must be at least 13 years old to use our service</li>
                <li>You are responsible for maintaining the confidentiality of your account</li>
                <li>You must not upload illegal, harmful, or copyrighted content</li>
                <li>You agree to use the service only for lawful purposes</li>
                <li>You must not attempt to reverse engineer or exploit our AI models</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Content and Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                You retain ownership of your original images. By using our service, you grant us a limited license to process your images for the purpose of providing our AI editing services. We do not claim ownership of your content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Service Availability</h2>
              <p className="text-gray-700 mb-4">
                We strive to maintain high service availability but cannot guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue the service at any time with reasonable notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Payment and Refunds</h2>
              <p className="text-gray-700 mb-4">
                Subscription fees are charged in advance and are non-refundable except as required by law or as specified in our refund policy. We reserve the right to change pricing with 30 days notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Our service is provided "as is" without warranties. We are not liable for any indirect, incidental, or consequential damages arising from your use of the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your account at any time for violation of these terms. You may cancel your account at any time through your account settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We may update these terms from time to time. We will notify users of material changes via email or through our service. Continued use after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  Email: about@nanobananashow.xyz<br />
                  Support: privacy@nanobananashow.xyz
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}