export default function RefundsPage() {
  return (
    <section className="mx-auto w-full max-w-4xl space-y-8 px-4 py-28 text-[#1a0533] sm:px-8 lg:px-12">
      <header className="space-y-2">
        <h1 className="hero-display text-4xl font-bold tracking-tight">Refund &amp; Return Policy</h1>
        <p className="text-sm text-[#4b3b60]">Last updated: 17 April 2026</p>
      </header>

      <p className="rounded-2xl border border-[#1a0533]/10 bg-[#faf7f2] p-4 font-semibold text-[#1a0533]">
        Forever Glow operates a strict NO REFUND and NO RETURN policy on all products.
      </p>

      <div className="space-y-6">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">3.1 No Refunds</h2>
          <p className="leading-8 text-[#4b3b60]">All sales are final. Once payment has been made and the order confirmed, no refunds will be issued.</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">3.2 No Returns</h2>
          <p className="leading-8 text-[#4b3b60]">
            We do not accept returns on any products. Due to the nature of skincare products and for hygiene and safety reasons, we cannot accept
            opened or unopened products back.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">3.3 Damaged or Incorrect Orders</h2>
          <p className="leading-8 text-[#4b3b60]">
            If you receive a damaged or incorrect product, contact us via WhatsApp at 071 776 8306 within 24 hours of receiving your order. We
            will assess the matter on a case-by-case basis and may offer a replacement at our sole discretion.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">3.4 Allergic Reactions</h2>
          <p className="leading-8 text-[#4b3b60]">
            Forever Glow is not responsible for allergic reactions or skin sensitivities. We recommend performing a patch test before full
            application.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">3.5 Acknowledgement</h2>
          <p className="leading-8 text-[#4b3b60]">By placing an order with Forever Glow, you acknowledge and accept this policy.</p>
        </section>
      </div>
    </section>
  );
}
