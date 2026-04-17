"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const products = [
  { name: "Facial Moisturizer", price: "R260.00", size: "md:row-span-2" },
  { name: "Body Butter", price: "R390.00", size: "" },
  { name: "Omega Tissue Oil", price: "R119.00", size: "" },
  { name: "Bundle: All 3 (excluding delivery)", price: "R710.00", size: "md:col-span-2" },
];

const ingredients = ["Tea tree", "Aloe Vera", "Vitamin E", "Shea Butter", "Omega tissue oil"];

const delivery = [
  { option: "Pep standard", price: "R60", time: "7-9 business days" },
  { option: "Pep express", price: "R110", time: "3-5 business days" },
  { option: "Aramex door to door", price: "R100", time: "3-4 business days" },
];

const steps = [
  "Place your order on WhatsApp: 071 776 8306",
  "Pay via Capitec: 1396299104, Collien Ntsako Mabunda",
  "Pay via FNB: 62860102773, ForeverGlow Business, Cheque",
  "Pay via Absa: 4105805301, Collien Ntsako Mabunda, Cheque",
  "Reference: your name. Send proof of payment and keep the proof of payment until you get your order.",
];

const PARALLAX_SCROLL_RANGE = 450;
const PARALLAX_Y_OFFSET = 90;
const PARALLAX_MIN_OPACITY = 0.75;
const MARQUEE_REPEAT_COUNT = 10;
const MARQUEE_TEXT = "Shop Online | Midrand | Joburg";
const MARQUEE_ITEMS = Array.from({ length: MARQUEE_REPEAT_COUNT * 2 }, (_, index) => ({ id: index, label: MARQUEE_TEXT }));

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function HomePage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, PARALLAX_SCROLL_RANGE], [0, PARALLAX_Y_OFFSET]);
  const heroOpacity = useTransform(scrollY, [0, PARALLAX_SCROLL_RANGE], [1, PARALLAX_MIN_OPACITY]);

  return (
    <div>
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1a0533] via-[#2a0a52] to-[#120226] px-4 pb-16 pt-24 text-[#faf7f2] sm:px-6 lg:px-8">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div variants={reveal} initial="hidden" animate="show">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#d4388e]">Forever Glow Skincare</p>
            <h1 className="hero-display text-5xl leading-tight text-[#c5a355] sm:text-6xl lg:text-7xl">Forever Group of Companies</h1>
            <p className="mt-6 max-w-2xl text-lg">
              Forever Glow is an anti marks cream created to give you that vibrant deeply hydration on your skin. It removes acne, scars dark marks, pigmentation and discoloration.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#products"
                whileHover={{ scale: 1.04 }}
                className="rounded-full bg-[#c5a355] px-8 py-3 font-medium text-[#1a0533] transition hover:bg-[#d8bb7a]"
              >
                Shop Collections
              </motion.a>
              <motion.a
                href="https://wa.me/27717768306"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                className="rounded-full border border-[#d4388e] px-8 py-3 font-medium text-[#faf7f2] transition hover:bg-[#d4388e]"
              >
                Order Now
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={reveal} initial="hidden" animate="show" className="image-placeholder flex min-h-[28rem] items-end rounded-3xl p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-[#f8e8bc]">Hero image placeholder</p>
          </motion.div>
        </motion.div>
      </section>

      <section className="overflow-hidden bg-[#120226] py-4 text-[#c5a355]">
        <div className="marquee-track text-sm uppercase tracking-[0.18em]">
          {MARQUEE_ITEMS.map((item) => (
            <span key={item.id} className="mx-6">
              {item.label}
            </span>
          ))}
        </div>
      </section>

      <motion.section id="products" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="section-title text-4xl">Shop Collections</h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-10 grid auto-rows-[230px] gap-5 md:grid-cols-3"
        >
          {products.map((product) => (
            <motion.article key={product.name} variants={reveal} whileHover={{ y: -6, scale: 1.01 }} className={`card group overflow-hidden p-6 shadow-sm transition hover:shadow-xl ${product.size}`}>
              <div className="image-placeholder mb-6 h-24 rounded-2xl" />
              <h3 className="hero-display text-2xl text-[#1a0533]">{product.name}</h3>
              <p className="mt-2 text-[#d4388e]">{product.price}</p>
              <a
                href="https://wa.me/27717768306"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full border border-[#1a0533] px-4 py-2 text-sm transition group-hover:bg-[#1a0533] group-hover:text-[#faf7f2]"
              >
                Order Now
              </a>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="story"
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[#faf7f2] px-4 pb-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-8 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2 md:p-12">
          <div>
            <h2 className="section-title text-4xl">About Forever Glow</h2>
            <p className="mt-5 text-lg text-[#38235b]">
              Forever Glow is an anti marks cream created to give you that vibrant deeply hydration on your skin. It removes acne, scars, dark marks, pigmentation and discoloration.
            </p>
            <p className="mt-4 text-[#38235b]">Enriched with tea tree, Aloe Vera, vitamin E and Shea Butter.</p>
          </div>
          <div className="image-placeholder min-h-[18rem] rounded-3xl p-6">
            <p className="text-sm uppercase tracking-[0.18em]">Lifestyle image placeholder</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="ingredients"
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 lg:px-8"
      >
        <h2 className="section-title text-4xl">Ingredients</h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {ingredients.map((ingredient) => (
            <motion.article key={ingredient} variants={reveal} className="card p-5">
              <div className="mb-4 h-10 w-10 rounded-full bg-[#1a0533]" />
              <h3 className="hero-display text-xl">{ingredient}</h3>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="delivery"
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-gradient-to-br from-[#1a0533] to-[#120226] px-4 py-20 text-[#faf7f2] sm:px-6 lg:px-8"
      >
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="hero-display text-4xl text-[#c5a355]">Delivery Options</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {delivery.map((item) => (
              <article key={item.option} className="rounded-2xl border border-[#c5a355]/30 bg-white/5 p-6">
                <h3 className="text-xl text-[#f8e8bc]">{item.option}</h3>
                <p className="mt-2 text-[#d9bf7a]">{item.price}</p>
                <p className="mt-1 text-sm">{item.time}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-[#d9bf7a]">Pick up in Midrand or Joburg</p>
        </div>
      </motion.section>

      <motion.section
        id="order"
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <h2 className="section-title text-4xl">How to Order</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step} className="card flex gap-4 p-5">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#1a0533] text-sm text-[#faf7f2]">{index + 1}</span>
              <p className="text-[#38235b]">{step}</p>
            </li>
          ))}
        </ol>
      </motion.section>
    </div>
  );
}
