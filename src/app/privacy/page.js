export default function PrivacyPage() {
  return (
    <section className="mx-auto w-full max-w-4xl space-y-8 px-4 py-28 text-[#1a0533] sm:px-8 lg:px-12">
      <header className="space-y-2">
        <h1 className="hero-display text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-[#4b3b60]">Last updated: 17 April 2026</p>
      </header>

      <p className="leading-8 text-[#4b3b60]">
        Forever Glow respects your privacy and is committed to protecting your personal information in accordance with the Protection of Personal
        Information Act (POPIA) of South Africa.
      </p>

      <div className="space-y-6">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">2.1 Information We Collect</h2>
          <ul className="list-disc space-y-2 pl-6 leading-8 text-[#4b3b60]">
            <li>Your full name</li>
            <li>Contact number (WhatsApp)</li>
            <li>Delivery address</li>
            <li>Proof of payment (which may contain banking details)</li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">2.2 How We Use Your Information</h2>
          <ul className="list-disc space-y-2 pl-6 leading-8 text-[#4b3b60]">
            <li>Processing and fulfilling your order</li>
            <li>Communicating with you regarding your order</li>
            <li>Arranging delivery of your products</li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">2.3 Information Sharing</h2>
          <p className="leading-8 text-[#4b3b60]">We do not sell, trade, or share your personal information with third parties, except:</p>
          <ul className="list-disc space-y-2 pl-6 leading-8 text-[#4b3b60]">
            <li>Courier services (Aramex, Pep, Postnet) for the purpose of delivering your order</li>
            <li>As required by South African law</li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">2.4 Data Storage &amp; Security</h2>
          <p className="leading-8 text-[#4b3b60]">
            We take reasonable steps to protect your personal information. Order records and proof of payment are stored securely and only
            accessed by authorised personnel.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">2.5 Your Rights</h2>
          <p className="leading-8 text-[#4b3b60]">Under POPIA, you have the right to:</p>
          <ul className="list-disc space-y-2 pl-6 leading-8 text-[#4b3b60]">
            <li>Request access to the personal information we hold about you</li>
            <li>Request correction or deletion of your personal information</li>
            <li>Object to the processing of your personal information</li>
          </ul>
          <p className="leading-8 text-[#4b3b60]">To exercise any of these rights, contact us via WhatsApp at 071 776 8306.</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">2.6 Retention</h2>
          <p className="leading-8 text-[#4b3b60]">
            We retain your personal information only for as long as necessary to fulfil the purposes outlined above, after which it is securely
            deleted.
          </p>
        </section>
      </div>
    </section>
  );
}
