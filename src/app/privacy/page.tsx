import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Vancouver Activities",
  description: "Privacy policy for Vancouver Activities. Learn how we collect, use, and protect your information when you visit our website.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[300px] flex items-center justify-center bg-[#2d5016]">
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Privacy Policy
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
            Last updated: April 1, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-5">
        <div className="max-w-3xl mx-auto prose prose-gray prose-headings:font-heading prose-headings:font-bold prose-a:text-[#5f8f4a] prose-a:no-underline hover:prose-a:underline">
          <p className="text-gray-600 leading-relaxed">
            Vancouver Activities (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website vancouveractivities.com. This page informs you of our policies regarding the collection, use, and disclosure of personal information when you use our website.
          </p>

          <h2 className="text-2xl mt-10 mb-4">Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We collect information you voluntarily provide to us, including:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Contact Information:</strong> When you submit a contact form or event submission, we collect your name, email address, and any information you include in your message.</li>
            <li><strong>Event Submissions:</strong> When you submit an event, we collect the event details you provide including event name, date, location, description, and your contact information.</li>
            <li><strong>Usage Data:</strong> We automatically collect information about how you interact with our website, including pages visited, time spent on pages, and referring URLs.</li>
          </ul>

          <h2 className="text-2xl mt-10 mb-4">Cookies</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device.
          </p>
          <p className="text-gray-600 leading-relaxed">
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some features of our website may not function properly.
          </p>

          <h2 className="text-2xl mt-10 mb-4">Third-Party Services</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We may use third-party services that collect, monitor, and analyze website usage. These services include:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Google Analytics:</strong> We use Google Analytics to track and report website traffic. Google Analytics collects data about your use of the website. You can opt out by installing the Google Analytics opt-out browser add-on.</li>
            <li><strong>Google Maps:</strong> Our website may embed Google Maps to display event and venue locations. Google Maps may collect location data according to Google&apos;s privacy policy.</li>
            <li><strong>Social Media:</strong> Our website includes links to social media platforms. These platforms have their own privacy policies governing data collection on their sites.</li>
          </ul>

          <h2 className="text-2xl mt-10 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We use the information we collect for the following purposes:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>To provide and maintain our website</li>
            <li>To respond to your inquiries and contact form submissions</li>
            <li>To review and publish event submissions</li>
            <li>To analyze website usage and improve our content</li>
            <li>To detect, prevent, and address technical issues</li>
          </ul>

          <h2 className="text-2xl mt-10 mb-4">Data Security</h2>
          <p className="text-gray-600 leading-relaxed">
            The security of your personal information is important to us. We use commercially acceptable means to protect your information, including SSL encryption for data transmitted to and from our website. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl mt-10 mb-4">Your Rights</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Depending on your location, you may have certain rights regarding your personal information:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Access:</strong> You have the right to request copies of your personal information.</li>
            <li><strong>Correction:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
            <li><strong>Deletion:</strong> You have the right to request that we delete your personal information, under certain conditions.</li>
            <li><strong>Opt-out:</strong> You can opt out of receiving communications from us at any time by contacting us.</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            To exercise any of these rights, please contact us at <a href="mailto:privacy@vancouveractivities.com">privacy@vancouveractivities.com</a>.
          </p>

          <h2 className="text-2xl mt-10 mb-4">Children&apos;s Privacy</h2>
          <p className="text-gray-600 leading-relaxed">
            Our website is designed to provide information about family activities but is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
          </p>

          <h2 className="text-2xl mt-10 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the &ldquo;Last updated&rdquo; date. You are advised to review this privacy policy periodically for any changes.
          </p>

          <h2 className="text-2xl mt-10 mb-4">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about this privacy policy, please contact us at <a href="mailto:privacy@vancouveractivities.com">privacy@vancouveractivities.com</a> or visit our <Link href="/contact">contact page</Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2d5016] py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Have Questions?
          </h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
            If you have any questions about our privacy practices, do not hesitate to reach out.
          </p>
          <Link href="/contact" className="px-8 py-3.5 bg-white text-[#2d5016] font-heading text-sm font-semibold uppercase tracking-wider rounded hover:bg-gray-100 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
