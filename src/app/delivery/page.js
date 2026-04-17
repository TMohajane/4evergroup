const deliveryOptions = [
  "Pep standard: R60 - takes 7-9 business days",
  "Pep express: R110 - takes 3-5 business days",
  "Aramex door to door: R100 - takes 3-4 business days",
  "Pick up available in Midrand or Joburg",
];

export default function DeliveryPage() {
  return (
    <section className="card space-y-4 p-8">
      <h1 className="section-title text-3xl font-semibold">Delivery / Shipping</h1>
      <ul className="list-disc space-y-2 pl-6 text-[#f3e3b7]">
        {deliveryOptions.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ul>
    </section>
  );
}
