const ingredients = [
  {
    title: "Tea tree oil",
    description:
      "Also known as Melaleuca oil. An essential oil that comes from steaming the leaves of the Australian tea tree. Known for its healing properties. E.g., acne, redness, swelling and inflammatory.",
  },
  {
    title: "Aloe Vera",
    description:
      "One of the most widely used herbal remedies for skin conditions. Known to speed up skin recovery.",
  },
  {
    title: "Shea butter",
    description:
      "High concentration of fatty acids and vitamins makes Shea butter an ideal cosmetic ingredient for softening skin. It soothes and deeply moisturizes skin.",
  },
  {
    title: "Vitamin E Pills",
    description:
      "Helps support the immune system, cell function and skin health. Helps protect against cell damage.",
  },
  {
    title: "Omega tissue oil",
    description:
      "Its fatty acids and antioxidants intensively revitalize the skin. Ideal for dry, irritated skin, uneven skin tone, tissue scarring, and promotes skin firming.",
  },
];

export default function IngredientsPage() {
  return (
    <section className="space-y-6">
      <h1 className="section-title text-3xl font-semibold">Ingredients</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {ingredients.map((ingredient) => (
          <article key={ingredient.title} className="card p-5">
            <h2 className="text-xl font-semibold text-[#c5a355]">{ingredient.title}</h2>
            <p className="mt-3 text-sm text-[#f3e3b7]">{ingredient.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
