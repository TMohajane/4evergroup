"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const aboutCopy = [
  "Forever Glow is an anti marks cream created to give you that vibrant deeply hydration on your skin. It removes acne, scars, dark marks, pigmentation and discoloration.",
  "Enriched with tea tree, Aloe Vera, vitamin E and Shea Butter.",
];

const products = [
  { name: "Facial Moisturizer", price: "R260.00", size: "h-[28rem]" },
  { name: "Body Butter", price: "R390.00", size: "h-[20rem]" },
  { name: "Omega Tissue Oil", price: "R119.00", size: "h-[23rem]" },
];

const ingredients = [
  {
    title: "Tea tree oil",
    copy: "Also known as Melaleuca oil. An essential oil that comes from steaming the leaves of the Australian tea tree. Known for its healing properties. E.g., acne, redness, swelling and inflammatory.",
  },
  {
    title: "Aloe Vera",
    copy: "One of the most widely used herbal remedies for skin conditions. Known to speed up skin recovery.",
  },
  {
    title: "Shea butter",
    copy: "High concentration of fatty acids and vitamins makes Shea butter an ideal cosmetic ingredient for softening skin. It soothes and deeply moisturizes skin.",
  },
  {
    title: "Vitamin E Pills",
    copy: "Helps support the immune system, cell function and skin health. Helps protect against cell damage.",
  },
  {
    title: "Omega tissue oil",
    copy: "Its fatty acids and antioxidants intensively revitalize the skin. Ideal for dry, irritated skin, uneven skin tone, tissue scarring, and promotes skin firming.",
  },
];

const deliveryOptions = [
  { title: "Pep standard", copy: "R60 (7-9 business days)" },
  { title: "Pep express", copy: "R110 (3-5 business days)" },
  { title: "Aramex door to door", copy: "R100 (3-4 business days)" },
];

const orderSteps = [
  "Capitec: 1396299104, linked to 071 776 8306, Collien Ntsako Mabunda",
  "FNB: ForeverGlow Business account, 62860102773, Cheque",
  "Absa: Collien Ntsako Mabunda, 4105805301, Cheque",
  "Reference: your name. Send proof of payment.",
];

const sectionReveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function HomePage() {
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 600], [0, 70]);
  const heroGradientShift = useTransform(scrollY, [0, 600], [0, -45]);

  return (
    <div className="bg-white text-[#1a0533]">
      <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(140deg,#f5f0eb_0%,#efe7e2_42%,#e8ddf2_100%)] px-4 pb-24 pt-32 sm:px-8 lg:px-12">
        <motion.div
          style={{ y: heroGradientShift }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_28%,rgba(212,56,142,0.18),transparent_55%)]"
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-full -translate-x-1/2 -translate-y-1/2 px-4 text-center hero-display text-[clamp(5rem,15vw,12rem)] font-bold leading-[0.88] tracking-tight text-[#1a0533]"
        >
          Forever Glow
        </motion.h1>

        <motion.div
          style={{ y: heroParallax }}
          className="relative z-10 mx-auto grid w-full max-w-7xl items-end gap-12 lg:grid-cols-[1.08fr_0.92fr]"
        >
          <motion.div initial="hidden" animate="show" variants={sectionReveal}>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#d4388e]">Forever Glow Skincare</p>
            <p className="mt-6 max-w-xl text-lg text-[#4b3b60]">Editorial skincare essentials designed for vibrant, deeply hydrated skin.</p>
            <motion.a
              href="#products"
              whileHover={{ scale: 1.03 }}
              className="mt-10 inline-flex rounded-full border border-[#1a0533] px-8 py-3 text-sm font-medium transition hover:border-[#d4388e] hover:text-[#d4388e]"
            >
              Explore Products
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
            className="justify-self-end"
          >
            <div className="hero-image-placeholder h-[28rem] w-[min(28rem,88vw)] rounded-[2rem]" />
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        id="about"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[#f5f0eb] px-4 py-32 sm:px-8 lg:px-12"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="hero-display text-[clamp(2.4rem,5vw,4.8rem)] font-bold leading-[1.02] tracking-tight text-[#1a0533]">
              Vibrant skin <span className="italic">starts here</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg text-gray-600">{aboutCopy[0]}</p>
            <p className="mt-5 text-lg text-gray-600">{aboutCopy[1]}</p>
            <motion.a
              href="https://wa.me/27717768306"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="mt-10 inline-flex rounded-full border border-[#1a0533] px-8 py-3 text-sm font-medium transition hover:border-[#d4388e] hover:text-[#d4388e]"
            >
              Order on WhatsApp
            </motion.a>
          </div>
          <motion.div whileHover={{ scale: 1.03 }} className="mx-auto w-full max-w-sm">
            <div className="editorial-product-card h-[30rem] w-full -rotate-3 rounded-3xl" />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="products"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white px-4 py-28 sm:px-8 lg:px-12"
      >
        <div className="mx-auto grid w-full max-w-7xl items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-6 sm:grid-cols-2">
            {products.map((product, index) => (
              <motion.article key={product.name} variants={cardReveal} className={`${index === 0 ? "sm:row-span-2" : ""}`}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className={`editorial-product-card ${product.size} rounded-2xl p-6 shadow-[0_18px_45px_rgba(26,5,51,0.12)] transition-shadow duration-300 hover:shadow-xl`}
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-[#6f5f79]">Product</p>
                  <h3 className="mt-4 hero-display text-3xl font-bold tracking-tight text-[#1a0533]">{product.name}</h3>
                  <p className="mt-2 text-[#1a0533]">{product.price}</p>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>

          <div className="lg:pl-8">
            <h2 className="hero-display text-[clamp(2.1rem,4.7vw,4.4rem)] font-bold leading-[1.06] tracking-tight text-[#1a0533]">
              Pure care <span className="italic">by nature</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">Luxury textures, intentional ingredients, and a radiant finish made for everyday confidence.</p>
            <ul className="mt-8 space-y-3 text-gray-600">
              <li>Facial Moisturizer - R260.00</li>
              <li>Body Butter - R390.00</li>
              <li>Omega Tissue Oil - R119.00</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="bundle"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative overflow-hidden bg-[#f5f0eb] px-4 py-32 sm:px-8 lg:px-12"
      >
        <p className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 hero-display text-[clamp(8rem,20vw,16rem)] font-bold leading-none tracking-tight text-[#1a0533]/5">
          glow
        </p>
        <div className="relative mx-auto w-full max-w-7xl">
          <h2 className="hero-display text-[clamp(2.2rem,4.8vw,4.5rem)] font-bold tracking-tight text-[#1a0533]">Complete Collection</h2>
          <p className="mt-4 text-lg text-gray-600">All 3 for R710.00</p>
          <p className="text-gray-600">(excluding delivery)</p>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-12 grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <motion.div key={`bundle-${product.name}`} variants={cardReveal} whileHover={{ scale: 1.03 }} className="editorial-product-card h-[16rem] rounded-2xl shadow-[0_15px_40px_rgba(26,5,51,0.12)] transition-shadow duration-300 hover:shadow-xl" />
            ))}
          </motion.div>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-6 sm:grid-cols-2">
              <motion.div whileHover={{ scale: 1.03 }} className="editorial-product-card h-[14rem] rounded-2xl shadow-[0_15px_40px_rgba(26,5,51,0.12)] transition-shadow duration-300 hover:shadow-xl" />
              <motion.div whileHover={{ scale: 1.03 }} className="editorial-product-card h-[14rem] rounded-2xl shadow-[0_15px_40px_rgba(26,5,51,0.12)] transition-shadow duration-300 hover:shadow-xl" />
            </div>
            <div>
              <h3 className="hero-display text-[clamp(2rem,4vw,3.8rem)] font-bold tracking-tight text-[#1a0533]">
                Bundle your <span className="italic">glow routine</span>
              </h3>
              <p className="mt-4 text-gray-600">A complete trio to hydrate, soften, and visibly renew your skin texture.</p>
              <motion.a
                href="https://wa.me/27717768306"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="mt-8 inline-flex rounded-full border border-[#1a0533] px-8 py-3 text-sm font-medium transition hover:border-[#d4388e] hover:text-[#d4388e]"
              >
                Get the bundle
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="ingredients"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white px-4 py-28 sm:px-8 lg:px-12"
      >
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="hero-display text-[clamp(2.1rem,4.5vw,4rem)] font-bold tracking-tight text-[#1a0533]">Ingredients</h2>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {ingredients.map((ingredient) => (
              <motion.article key={ingredient.title} variants={cardReveal} whileHover={{ scale: 1.03 }} className="rounded-2xl border border-[#1a0533]/10 bg-[#f8f3ef] p-6 transition-shadow duration-300 hover:shadow-xl">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#1a0533] text-sm font-semibold text-[#c5a355]">FG</div>
                <h3 className="hero-display text-2xl font-bold tracking-tight text-[#1a0533]">{ingredient.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{ingredient.copy}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="delivery"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[#1a0533] px-4 py-28 text-[#c5a355] sm:px-8 lg:px-12"
      >
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="hero-display text-[clamp(2.1rem,4.4vw,4rem)] font-bold tracking-tight">Delivery</h2>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-10 grid gap-5 md:grid-cols-3">
            {deliveryOptions.map((option) => (
              <motion.article key={option.title} variants={cardReveal} className="rounded-2xl border border-[#c5a355]/35 bg-white/5 p-6">
                <h3 className="hero-display text-2xl text-[#f6e7c2]">{option.title}</h3>
                <p className="mt-3 text-[#dec787]">{option.copy}</p>
              </motion.article>
            ))}
          </motion.div>
          <p className="mt-8 text-[#dec787]">Pick up in Midrand or Joburg</p>
        </div>
      </motion.section>

      <motion.section
        id="order"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[#f5f0eb] px-4 py-28 sm:px-8 lg:px-12"
      >
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="hero-display text-[clamp(2.1rem,4.4vw,4rem)] font-bold tracking-tight text-[#1a0533]">How to Order</h2>
          <ol className="mt-10 space-y-4 text-gray-600">
            <li className="rounded-2xl border border-[#1a0533]/10 bg-white p-6">WhatsApp: 071 776 8306 / https://wa.me/27717768306</li>
            {orderSteps.map((step) => (
              <li key={step} className="rounded-2xl border border-[#1a0533]/10 bg-white p-6">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </motion.section>
    </div>
  );
}
