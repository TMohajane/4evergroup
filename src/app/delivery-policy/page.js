const deliveryRows = [
  { method: "Pep (standard)", cost: "R60.00", timeframe: "7-9 business days" },
  { method: "Pep (express)", cost: "R110.00", timeframe: "3-5 business days" },
  { method: "Aramex (door to door)", cost: "R100.00", timeframe: "3-4 business days" },
  { method: "Postnet", cost: "R109.00", timeframe: "2-3 business days" },
  { method: "Collection", cost: "Free", timeframe: "By arrangement" },
];

export default function DeliveryPolicyPage() {
  return (
    <section className="mx-auto w-full max-w-4xl space-y-8 px-4 py-28 text-[#1a0533] sm:px-8 lg:px-12">
      <header className="space-y-2">
        <h1 className="hero-display text-4xl font-bold tracking-tight">Delivery Policy</h1>
        <p className="text-sm text-[#4b3b60]">Last updated: 17 April 2026</p>
      </header>

      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">4.1 Delivery Options &amp; Costs</h2>
          <div className="overflow-hidden rounded-2xl border border-[#1a0533]/10 bg-white">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-[#f9f4ff] text-[#1a0533]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Method</th>
                  <th className="px-4 py-3 font-semibold">Cost</th>
                  <th className="px-4 py-3 font-semibold">Estimated Timeframe</th>
                </tr>
              </thead>
              <tbody>
                {deliveryRows.map((row) => (
                  <tr key={row.method} className="border-t border-[#1a0533]/10">
                    <td className="px-4 py-3 text-[#4b3b60]">{row.method}</td>
                    <td className="px-4 py-3 text-[#4b3b60]">{row.cost}</td>
                    <td className="px-4 py-3 text-[#4b3b60]">{row.timeframe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">4.2 Collection</h2>
          <p className="leading-8 text-[#4b3b60]">
            Free collection is available in Midrand or Johannesburg. Collection arrangements must be made via WhatsApp at 071 776 8306.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">4.3 Delivery Process</h2>
          <ul className="list-disc space-y-2 pl-6 leading-8 text-[#4b3b60]">
            <li>Orders are dispatched once full payment and proof of payment have been received.</li>
            <li>A tracking number will be provided where applicable.</li>
            <li>Delivery timeframes are estimates provided by the courier and are not guaranteed by Forever Glow.</li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">4.4 Delivery Delays</h2>
          <p className="leading-8 text-[#4b3b60]">
            Forever Glow is not responsible for delays caused by courier services, public holidays, or circumstances beyond our control.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">4.5 Incorrect Delivery Details</h2>
          <p className="leading-8 text-[#4b3b60]">
            It is the customer&apos;s responsibility to provide accurate delivery information. Forever Glow is not liable for orders delivered to an
            incorrect address provided by the customer.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">4.6 Non-Collection (Pep)</h2>
          <p className="leading-8 text-[#4b3b60]">
            Pep parcels must be collected within the timeframe specified by Pep stores. Forever Glow is not responsible for parcels returned due
            to non-collection.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">4.7 Tracking &amp; Follow-Up</h2>
          <p className="leading-8 text-[#4b3b60]">
            Once your order has been dispatched, it is the customer&apos;s responsibility to track and follow up on their parcel directly with the
            chosen courier service provider. Forever Glow will provide the relevant tracking details where applicable, but is not responsible for
            tracking enquiries or courier-related issues after dispatch.
          </p>
        </section>
      </div>
    </section>
  );
}
