import React from 'react';

const TermsPage = () => {
  return (
    <div className="pt-12 min-h-screen bg-(--west-bg) text-(--west-bg-econdary)]">
      <div className="max-w-4xl mx-auto px-5 py-10 md:px-8 md:py-12">

        <header className="mb-8 border-b border-(--west-bg-secondary) pb-5">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
            Terms & Conditions
          </h1>
          <h2 className="text-sm md:text-base opacity-70">
            Last Updated: December 19, 2025
          </h2>
        </header>

        <article className="space-y-8 text-base leading-relaxed">

          <section>
            <p>
              Welcome to <strong>225 West</strong>. These Terms and Conditions ("Terms") govern your access to and use of our website, services, workspace facilities, and events. By accessing our website or booking a service, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="bg-(--west-bg-secondary) text-(--west-bg) text-xs px-3 py-1 rounded-full font-semibold">01</span>
              Introduction & Definitions
            </h2>
            <ul className="list-disc pl-5 space-y-2 marker:text-(--west-bg-secondary)">
              <li><strong>"225 West"</strong> refers to the coworking space located in Jaipur, Rajasthan.</li>
              <li><strong>"User"</strong> refers to any individual or entity visiting the website or using our facilities.</li>
              <li><strong>"Services"</strong> includes physical workspaces, virtual offices, events, and website content.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="bg-(--west-bg-secondary) text-(--west-bg) text-xs px-3 py-1 rounded-full font-semibold">02</span>
              Eligibility
            </h2>
            <p>
              By using our Services, you represent and warrant that you are at least 18 years of age and have the legal authority to enter into these Terms on behalf of yourself or the company you represent.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="bg-(--west-bg-secondary) text-(--west-bg) text-xs px-3 py-1 rounded-full font-semibold">03</span>
              Use of Workspace & Conduct
            </h2>
            <div className="bg-(--west-bg-secondary)/5 p-5 rounded-lg border border-(--west-bg-secondary)/10 space-y-3">
              <p><strong>Respect:</strong> Harassment, discrimination, or abusive behavior towards staff or other members is strictly prohibited.</p>
              <p><strong>Noise Level:</strong> Please maintain a reasonable volume in open areas. Use phone booths for extended calls.</p>
              <p><strong>Illegal Activity:</strong> You may not use our internet or physical space for any illegal or unlawful purposes under Indian law.</p>
              <p><strong>Security:</strong> You are responsible for your personal belongings. 225 West is not liable for lost or stolen items.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="bg-(--west-bg-secondary) text-(--west-bg) text-xs px-3 py-1 rounded-full font-semibold">04</span>
              Bookings, Payments & Cancellations
            </h2>
            <ul className="list-disc pl-5 space-y-2 marker:text-(--west-bg-secondary)">
              <li><strong>Pricing:</strong> All prices listed are subject to change. Confirmed bookings are honored at the booked rate.</li>
              <li><strong>Taxes:</strong> Fees are exclusive of GST, charged as per applicable Indian tax laws.</li>
              <li><strong>Cancellations:</strong> Meeting rooms and day passes are refundable if cancelled 24 hours in advance. Cancellations within 24 hours are non-refundable.</li>
              <li><strong>Refunds:</strong> Processed within 7–10 business days to the original payment method.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="bg-(--west-bg-secondary) text-(--west-bg) text-xs px-3 py-1 rounded-full font-semibold">05</span>
              Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by Indian law, 225 West shall not be liable for any indirect, incidental, or consequential damages. We do not guarantee uninterrupted internet service. Our total liability shall not exceed the amount paid by you in the 3 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="bg-(--west-bg-secondary) text-(--west-bg) text-xs px-3 py-1 rounded-full font-semibold">06</span>
              Governing Law
            </h2>
            <p>
              These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in <strong>Jaipur, Rajasthan</strong>.
            </p>
          </section>

          <footer className="mt-12 pt-8 border-t border-(--west-bg-econdary)">
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

export default TermsPage;