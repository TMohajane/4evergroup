import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="card p-8 sm:p-12">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d4388e]">Forever Glow Skincare</p>
        <h1 className="text-3xl font-semibold text-[#c5a355] sm:text-5xl">Forever Group of Companies</h1>
        <p className="mt-4 max-w-2xl text-[#f3e3b7]">
          Forever Glow is an anti marks cream created to give you that vibrant deeply hydration on your skin.
        </p>
        <p className="mt-2 text-sm text-[#d9bf7a]">Reg: 2020 / 540529 / 07</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/products" className="rounded-full bg-[#c5a355] px-6 py-3 font-medium text-[#120226]">
            View Products
          </Link>
          <Link href="/how-to-order" className="rounded-full border border-[#d4388e] px-6 py-3 font-medium text-[#f6dfef]">
            Shop Forever Glow
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="section-title text-2xl font-semibold">Featured Products</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Facial Moisturizer - R260.00",
            "Body Butter - R390.00",
            "Omega Tissue Oil - R119.00",
          ].map((product) => (
            <div key={product} className="card p-5">
              <div className="image-placeholder mb-4 flex h-36 items-center justify-center rounded-lg px-4 text-center text-sm">
                Product image placeholder: {product}
              </div>
              <p className="font-medium text-[#f8e8bc]">{product}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-6">
        <h2 className="section-title text-2xl font-semibold">About Forever Glow</h2>
        <p className="mt-3 text-[#f3e3b7]">
          Forever Glow is an anti marks cream created to give you that vibrant deeply hydration on your skin. It removes acne, scars, dark marks, pigmentation and discoloration.
        </p>
        <Link href="/about" className="mt-4 inline-block text-[#d4388e] hover:text-[#f3d9eb]">
          Read more
        </Link>
      </section>
    </div>
  );
}
