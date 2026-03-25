import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";

export const metadata = {
  title: "Privacy Policy | Eversafe Safety Nets",
  description:
    "Eversafe Safety Nets values your privacy. Learn how we collect, use, and protect your personal information when you visit or interact with our website.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10">
          <h1 className="text-4xl font-bold text-yellow-500 mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            Last updated: {new Date().toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              1. Introduction
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Welcome to <strong>Eversafe Safety Nets</strong> (“we,” “our,” or “us”).
              Your privacy is extremely important to us. This Privacy Policy
              explains how we collect, use, disclose, and protect your personal
              information when you visit{" "}
              <strong>www.eversafesafetynets.com</strong> or use our services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              2. Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Personal Information:</strong> Name, email, phone number,
                address, and other details you provide via forms or calls.
              </li>
              <li>
                <strong>Usage Data:</strong> Information like IP address, browser
                type, device, pages visited, and time spent on our website.
              </li>
              <li>
                <strong>Cookies:</strong> We use cookies to improve your browsing
                experience and analyze website performance.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>To provide, operate, and maintain our services.</li>
              <li>To respond to your inquiries and service requests.</li>
              <li>To improve our website, products, and customer experience.</li>
              <li>To send important updates, promotions, or safety alerts.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              4. Information Sharing and Disclosure
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We do not sell, rent, or trade your personal information. However,
              we may share limited data with trusted third-party service
              providers to facilitate operations like installation scheduling,
              analytics, or marketing — all under strict confidentiality.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              5. Data Security
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We implement industry-standard safety measures to protect your
              data from unauthorized access, alteration, disclosure, or
              destruction. However, no online transmission is 100% secure, and
              we encourage you to take precautions while sharing data.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              6. Your Rights
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Access, correct, or delete your personal data.</li>
              <li>Opt out of promotional emails or marketing communications.</li>
              <li>Withdraw consent at any time by contacting us directly.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              7. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We use cookies and similar tools to enhance user experience,
              analyze site traffic, and deliver personalized content. You can
              disable cookies through your browser settings if preferred.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              8. Third-Party Links
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our website may contain links to third-party websites. We are not
              responsible for their privacy practices, content, or services.
              Please review their privacy policies before sharing personal
              information.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              9. Updates to This Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes
              in our practices or for legal compliance. The latest version will
              always be available on this page with the updated date.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              10. Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              For questions or concerns regarding this Privacy Policy, please
              contact us at:
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              📧 <strong>eversafesafetynets@gmail.com</strong>  
              <br />
              📞 +91 8074838518
              <br />
              🏢 Bengaluru,Karnataka, India
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
