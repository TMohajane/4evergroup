const products = [
  {
    name: "Facial Moisturizer - R260.00",
    details: [
      "Anti marks cream for vibrant deep hydration",
      "Removes acne, scars, dark marks, pigmentation and discoloration",
      "Enriched with tea tree, Aloe Vera, vitamin E and Shea Butter",
    ],
  },
  {
    name: "Body Butter - R390.00",
    details: ["Same key benefits as above for body care"],
  },
  {
    name: "Omega Tissue Oil - R119.00",
    details: [
      "Fatty acids and antioxidants intensively revitalize the skin",
      "Ideal for dry, irritated skin, uneven skin tone, tissue scarring",
      "Promotes skin firming",
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <h1 className="section-title text-3xl font-semibold">Products</h1>
      <div className="grid gap-5 md:grid-cols-3">
        {products.map((product) => (
          <article key={product.name} className="card p-5">
            <div className="image-placeholder mb-4 flex h-40 items-center justify-center rounded-lg px-4 text-center text-sm">
              Product image placeholder: {product.name}
            </div>
            <h2 className="text-xl font-semibold text-[#c5a355]">{product.name}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#f3e3b7]">
              {product.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="card border-[#d4388e]/60 p-6">
        <h2 className="text-2xl font-semibold text-[#d4388e]">Bundle Special</h2>
        <p className="mt-2 text-[#f6dfef]">All 3 products for R710.00 (excluding delivery)</p>
      </div>
    </div>
  );
}
