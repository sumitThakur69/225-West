import React from "react";

const PrivacyPage = () => {
  return (
    <div className="pt-12 min-h-screen bg-(--west-bg) text-(--west-bg-secondary)">
      <div className="max-w-4xl mx-auto px-5 py-10 md:px-8 md:py-12">

        {/* Header */}
        <header className="mb-8 border-b border-(--west-bg-secondary) pb-5">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
            Privacy Policy
          </h1>
          <h2 className="text-sm md:text-base opacity-70">
            Last Updated: December 19, 2025
          </h2>
        </header>

        <article className="space-y-8 text-base leading-relaxed">

          {/* Intro */}
          <section>
            <p>
              At <strong>225 West</strong>, we respect your privacy and are committed
              to protecting your personal information. This Privacy Policy explains
              how we collect, use, and safeguard your data in accordance with the
              <strong> Information Technology Act, 2000</strong>.
            </p>
          </section>

          {/* 01 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="bg-(--west-bg-secondary) text-(--west-bg) text-xs px-3 py-1 rounded-full font-semibold">
                01
              </span>
              Information We Collect
            </h2>

            <div className="bg-(--west-bg-secondary)/5 p-5 rounded-lg border border-(--west-bg-secondary)/10">
              <h3 className="font-semibold mb-2 text-base">
                Contact Information
              </h3>

              <p className="text-sm opacity-85 leading-relaxed">
                We only collect personal information that you voluntarily provide
                when submitting our contact form. This may include your name,
                email address, area of interest, and message.
              </p>

              <p className="text-sm opacity-85 leading-relaxed mt-3">
                We do not collect any information automatically. We do not use
                cookies, analytics tools, tracking technologies, or collect IP
                addresses, device information, or browsing behavior.
              </p>
            </div>
          </section>

          {/* 02 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="bg-(--west-bg-secondary) text-(--west-bg) text-xs px-3 py-1 rounded-full font-semibold">
                02
              </span>
              How We Use Your Data
            </h2>

            <ul className="list-disc pl-5 space-y-2 marker:text-(--west-bg-secondary)">
              <li>To respond to inquiries and contact requests.</li>
              <li>To schedule tours, bookings, and workspace visits.</li>
              <li>To communicate important service-related updates.</li>
              <li>To improve our services based on user feedback.</li>
            </ul>
          </section>

          {/* 03 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="bg-(--west-bg-secondary) text-(--west-bg) text-xs px-3 py-1 rounded-full font-semibold">
                03
              </span>
              Data Sharing & Disclosure
            </h2>

            <p className="mb-3">
              We do not sell, rent, or trade your personal data. Information may
              be shared only when necessary with:
            </p>

            <ul className="list-disc pl-5 space-y-2 marker:text-(--west-bg-secondary)">
              <li>
                <strong>Service Providers:</strong> Trusted partners assisting with
                operations or event coordination.
              </li>
              <li>
                <strong>Legal Authorities:</strong> When required by Indian law or
                government regulations.
              </li>
            </ul>
          </section>

          {/* 04 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="bg-(--west-bg-secondary) text-(--west-bg) text-xs px-3 py-1 rounded-full font-semibold">
                04
              </span>
              Your Rights
            </h2>

            <p>
              You may request access to, correction of, or deletion of your
              personal data, subject to legal and operational requirements.
              You may also opt out of communications at any time.
            </p>
          </section>

          {/* 05 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="bg-(--west-bg-secondary) text-(--west-bg) text-xs px-3 py-1 rounded-full font-semibold">
                05
              </span>
              Data Security
            </h2>

            <p>
              We use reasonable administrative and technical safeguards to protect
              your personal information. However, no internet transmission is
              completely secure.
            </p>
          </section>

          {/* 06 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="bg-(--west-bg-secondary) text-(--west-bg) text-xs px-3 py-1 rounded-full font-semibold">
                06
              </span>
              Policy Updates
            </h2>

            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated revision date.
            </p>
          </section>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-(--west-bg-secondary)">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="md:flex md:justify-between md:items-start gap-6">
              <address className="not-italic leading-relaxed mb-6 md:mb-0 text-sm">
                <strong>225 West</strong><br />
                225, Vardhman Nagar-A Patrakar Colony,<br />
                Gopalpura Bypass, near 200 Feet Bypass,<br />
                Jaipur, Rajasthan 302019, India
              </address>
              <div className="bg-(--west-bg-secondary) text-(--west-bg) px-5 py-3 rounded-lg inline-block text-sm">
                Email: <span className="underline-slide">To be updated</span>
              </div>
            </div>
          </footer>

        </article>
      </div>
    </div>
  );
};

export default PrivacyPage;
