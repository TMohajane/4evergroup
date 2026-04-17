export default function HowToOrderPage() {
  return (
    <section className="space-y-6">
      <h1 className="section-title text-3xl font-semibold">How to Order</h1>
      <div className="card space-y-4 p-6">
        <p>Place order via WhatsApp.</p>
        <h2 className="text-xl font-semibold text-[#c5a355]">Payment to:</h2>
        <ul className="list-disc space-y-2 pl-6 text-[#f3e3b7]">
          <li>Capitec Bank: 1396299104, linked to 071 776 8306, Collien Ntsako Mabunda</li>
          <li>FNB ForeverGlow Business account: 62860102773, Cheque</li>
          <li>Absa: Collien Ntsako Mabunda, Account: 4105805301, Cheque</li>
        </ul>
        <p>Reference: your name</p>
        <p>Send proof of payment and keep proof until order is received</p>
      </div>
    </section>
  );
}
