"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const aboutCopy = {
  heading: "The Visionary Behind Forever Group",
  intro: [
    'For Ntsako Mabunda, the journey to founding the Forever Group of Companies began with a lifelong obsession with radiant, healthy skin. Her passion for "the glow" started years ago during school assemblies, where she realized that skin is not just an organ—it is a reflection of confidence and care.',
    "As seasons passed, Ntsako recognized that our skin evolves with us. After personally struggling with dullness and realizing the market lacked accessible, high-SPF hydration, she set out to find a real solution.",
  ],
  sections: [
    {
      title: "The Birth of ForeverGlow",
      paragraphs: [
        "In 2020, amidst the challenges of the global lockdown, Ntsako emerged with a breakthrough. What began as a personal quest for purity and hydration became the formula for ForeverGlow. The results were undeniable: impurities vanished, and a radiant transformation took place.",
        'When the world noticed her results, Ntsako decided to share her secret. Today, ForeverGlow is more than just skincare; it is a restorer of confidence. From our renowned Face Moisturizer and Omega Tissue Oil to our moisture-locking Body Butter, we provide the tools to ensure you never "look like what you are going through."',
      ],
    },
    {
      title: "Forever Group: Beyond the Glow",
      paragraphs: [
        "What started with a single face cream has evolved into the Forever Group of Companies. Guided by Ntsako's leadership, the group is committed to excellence, restoration, and the belief that quality care should be a permanent part of your lifestyle.",
      ],
    },
  ],
};

const products = [
  { name: "Facial Moisturizer", price: "R260.00", size: "h-[28rem]", image: "/photos/Facial%20Moisturizer.jpeg" },
  { name: "Body Butter", price: "R390.00", size: "h-[20rem]", image: "/photos/Body%20Butter.jpeg" },
  { name: "Omega Tissue Oil", price: "R119.00", size: "h-[23rem]", image: "/photos/Omega%20Tissue%20Oil.jpeg" },
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
  { title: "Postnet", copy: "R109 (2-3 business days)" },
];

const provenResults = [
  { value: 500, suffix: "+", label: "Products Sold", note: "And counting" },
  { value: 200, suffix: "+", label: "Happy Clients", note: "Glowing skin guaranteed" },
  { value: 5, suffix: "+", label: "Years Experience", note: "Trusted skincare brand" },
  { value: 99, suffix: "%", label: "Client Satisfaction", note: "Results that speak" },
];

const testimonials = [
  {
    quote:
      "Forever Glow completely transformed my skin. The dark marks I had for years started fading within weeks. I cannot recommend it enough.",
    name: "Thandi",
    tint: "bg-[#FF0080]",
  },
  {
    quote:
      "The body butter is absolutely amazing. My skin has never felt this soft and hydrated. The scent is heavenly too.",
    name: "Lerato",
    tint: "bg-[#3A0060]",
  },
  {
    quote:
      "I was skeptical at first but the results speak for themselves. My acne scars have visibly reduced and my skin glows.",
    name: "Naledi",
    tint: "bg-[#FFD700]",
  },
];

const faqs = [
  {
    question: "How long does delivery take?",
    answer:
      "Depending on your chosen courier: Pep Standard (7–9 days), Pep Express (3–5 days), Aramex Door-to-Door (3–4 days), PostNet (2–3 days).",
  },
  {
    question: "How do I place an order?",
    answer: "Simply WhatsApp us at 071 776 8306 with the products you'd like. We'll confirm your order and send payment details.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept EFT/bank transfer via Capitec, FNB, and Absa. Payment details are provided on WhatsApp after ordering.",
  },
  {
    question: "Is Forever Glow suitable for all skin types?",
    answer: "Yes! Our products are formulated to work on all skin types. If you have very sensitive skin, we recommend doing a patch test first.",
  },
  {
    question: "How soon will I see results?",
    answer: "Most clients begin seeing visible improvements within 2–4 weeks of consistent use.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Please refer to our refunds policy page for full details.",
  },
];

const beforeAfterItems = [
  {
    caption: "Dark marks faded in 4 weeks",
    beforeSrc: "/photos/dark_marks_before.jpeg",
    afterSrc: "/photos/dark_marks_after.jpeg",
  },
  {
    caption: "Acne scars visibly reduced",
    beforeSrc: "/photos/acne_scars_before.jpeg",
    afterSrc: "/photos/acne-scars_after.jpeg",
  },
  {
    caption: "Even skin tone restored",
    beforeSrc: "/photos/even_tone_before.jpeg",
    afterSrc: "/photos/even_tone_after.jpeg",
  },
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

const carouselVariants = {
  enter: (direction) => ({ x: direction > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction > 0 ? -80 : 80, opacity: 0 }),
};

function CountUpNumber({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;

    const controls = animate(0, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (latest) => setCount(Math.round(latest)),
    });

    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function QuoteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#FF0080]" aria-hidden="true">
      <path
        fill="currentColor"
        d="M10.5 5.5C6.9 7.2 5 10 5 13.9A4.1 4.1 0 0 0 9.1 18c2.3 0 4.1-1.8 4.1-4.1A4.1 4.1 0 0 0 9.1 9.8c-.5 0-.9.1-1.4.2.7-1.6 2-2.8 3.8-3.8l-1-1Zm8 0C14.9 7.2 13 10 13 13.9a4.1 4.1 0 0 0 4.1 4.1c2.3 0 4.1-1.8 4.1-4.1a4.1 4.1 0 0 0-4.1-4.1c-.5 0-.9.1-1.4.2.7-1.6 2-2.8 3.8-3.8l-1-1Z"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#FFD700]" aria-hidden="true">
      <path
        fill="currentColor"
        d="m12 2.4 2.96 6 6.62.96-4.79 4.67 1.13 6.6L12 17.5l-5.92 3.13 1.13-6.6L2.4 9.36l6.62-.96L12 2.4Z"
      />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path fill="currentColor" d="m15.71 5.29-1.42-1.42L6.17 12l8.12 8.13 1.42-1.42L9 12z" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path fill="currentColor" d="m8.29 18.71 1.42 1.42L17.83 12 9.71 3.87 8.29 5.29 15 12z" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#FFD700]" aria-hidden="true">
      <path fill="currentColor" d="M20 4.5c-8 .2-13 4.6-13.5 11.8A6.5 6.5 0 0 0 13 22c5.6 0 8.5-5.4 8.5-11.8V4.5H20Zm-9.2 12.1a8.9 8.9 0 0 1 6.2-6.4l.5 1.6a7.4 7.4 0 0 0-5 5.1l-1.7-.3Z" />
    </svg>
  );
}

function DropIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#FF0080]" aria-hidden="true">
      <path fill="currentColor" d="M12 2.5S5 10.3 5 14.7A7 7 0 1 0 19 14.7C19 10.3 12 2.5 12 2.5Zm0 16.7a5.2 5.2 0 0 1-5.2-5.2c0-2.4 3-6.5 5.2-9 2.2 2.5 5.2 6.6 5.2 9A5.2 5.2 0 0 1 12 19.2Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.52 3.48A11.83 11.83 0 0 0 12.04 0 11.96 11.96 0 0 0 1.64 17.88L0 24l6.28-1.64a11.96 11.96 0 0 0 5.74 1.46h.01C18.63 23.82 24 18.45 24 11.84c0-3.17-1.24-6.15-3.48-8.36ZM12.03 21.8h-.01a9.95 9.95 0 0 1-5.07-1.38l-.36-.21-3.73.97.99-3.64-.23-.37a9.95 9.95 0 0 1-1.54-5.33c0-5.5 4.47-9.97 9.97-9.97 2.67 0 5.18 1.04 7.06 2.92a9.9 9.9 0 0 1 2.92 7.05c0 5.5-4.48 9.97-9.99 9.97Zm5.46-7.47c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.66.15s-.76.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.66-1.59-.9-2.17-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.52.08-.8.38-.27.3-1.05 1.03-1.05 2.52 0 1.49 1.08 2.93 1.23 3.13.15.2 2.1 3.2 5.08 4.48.71.31 1.27.5 1.7.64.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35Z"
      />
    </svg>
  );
}

function BeforeAfterSlider({ caption, index, beforeSrc, afterSrc }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);

  const updatePosition = (clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  };

  return (
    <motion.article
      variants={cardReveal}
      className="rounded-3xl bg-[#f9f4ff] p-5 shadow-[0_6px_24px_rgba(26,5,51,0.07)]"
    >
      <div
        ref={containerRef}
        className="relative h-64 overflow-hidden rounded-2xl bg-[linear-gradient(120deg,#8E24BE,#3A0060)]"
        onClick={(event) => updatePosition(event.clientX)}
      >
        {/* After image — full-size base layer */}
        <Image
          src={afterSrc}
          alt={`After — ${caption}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Before image — same full size, clipped from the right using clip-path */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={beforeSrc}
            alt={`Before — ${caption}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="absolute left-4 top-4 rounded-full bg-[#1a0533]/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
          Before
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-[#FF0080]/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
          After
        </div>

        <motion.div
          drag="x"
          dragConstraints={containerRef}
          dragMomentum={false}
          onDrag={(_, info) => updatePosition(info.point.x)}
          style={{ left: `${position}%` }}
          className="absolute bottom-0 top-0 -translate-x-1/2 cursor-ew-resize"
        >
          <div className="absolute bottom-0 left-1/2 top-0 w-[2px] -translate-x-1/2 bg-white shadow-[0_0_0_1px_rgba(26,5,51,0.2)]" />
          <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#1a0533]/20 bg-white text-[#1a0533] shadow-lg">
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path fill="currentColor" d="M7 9V7l-5 5 5 5v-2h10v2l5-5-5-5v2H7Z" />
            </svg>
            <span className="sr-only">Drag to compare before and after</span>
          </div>
        </motion.div>
      </div>
      <p className="mt-4 text-center text-sm font-medium text-[#3A0060]">{caption}</p>
      <p className="mt-1 text-center text-xs uppercase tracking-[0.12em] text-[#FFD700]">Comparison {index + 1}</p>
    </motion.article>
  );
}

function ProductCardImage({ src, alt, priority = false, sizes }) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      priority={priority}
      quality={100}
      sizes={sizes}
      onError={() => setImageSrc("/photos/product_bundle.jpeg")}
      className="object-contain p-4 mix-blend-multiply"
    />
  );
}

export default function HomePage() {
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 600], [0, 70]);
  const heroGradientShift = useTransform(scrollY, [0, 600], [0, -45]);
  const aboutParallax = useTransform(scrollY, [0, 1500], [0, -60]);
  const productParallax = useTransform(scrollY, [0, 1500], [0, 55]);

  const [cursor, setCursor] = useState({ x: 50, y: 50 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);
  const deliverySummaryOptions = deliveryOptions.map((option) => `${option.title} ${option.copy}`);
  const deliverySummary =
    deliverySummaryOptions.length > 1
      ? `${deliverySummaryOptions.slice(0, -1).join(", ")}, or ${deliverySummaryOptions[deliverySummaryOptions.length - 1]}`
      : deliverySummaryOptions[0];

  useEffect(() => {
    if (!isAutoPlay) return undefined;

    const timer = setInterval(() => {
      setDirection(1);
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const paginate = (nextDirection) => {
    setDirection(nextDirection);
    setActiveTestimonial((current) => (current + nextDirection + testimonials.length) % testimonials.length);
  };

  const activeItem = testimonials[activeTestimonial];

  return (
    <motion.div
      className="bg-white text-[#1a0533]"
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
    >
      <motion.section
        className="relative flex min-h-screen items-center overflow-hidden px-4 pb-24 pt-32 sm:px-8 lg:px-12"
        onMouseMove={(event) => {
          const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
          setCursor({ x: ((event.clientX - left) / width) * 100, y: ((event.clientY - top) / height) * 100 });
        }}
      >
        <Image
          src="/photos/hero.jpg"
          alt="Forever Glow skincare hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle dark overlay for text readability — keeps background sharp and visible */}
        <motion.div
          style={{ y: heroGradientShift }}
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(10,0,30,0.58)_0%,rgba(26,5,51,0.42)_55%,rgba(80,20,70,0.50)_100%)]"
        />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(380px at ${cursor.x}% ${cursor.y}%, rgba(212,56,142,0.22), transparent 70%)`,
          }}
        />

        {/* Oversized "glow" watermark */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none">
          <span className="hero-display text-[clamp(12rem,28vw,22rem)] font-bold leading-none tracking-tight text-white/10">
            glow
          </span>
        </div>

        <motion.div style={{ y: heroParallax }} className="relative z-10 mx-auto w-full max-w-4xl text-center">
          <motion.div initial="hidden" animate="show" variants={sectionReveal}>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#f4b8d4]">Forever Glow Skincare</p>
            <h2 className="hero-display mt-6 text-[clamp(3rem,7vw,7rem)] font-bold leading-[1.0] tracking-tight text-white drop-shadow-lg">
              Glow-forward care made for{" "}
              <span className="bg-gradient-to-r from-white via-[#f4c0da] to-[#FF0080] bg-clip-text text-transparent">visible confidence</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/85 drop-shadow">South Africa's favourite natural skincare — crafted for radiant, confident skin.</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <motion.a
                href="#products"
                whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(255,0,128,0.55)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex rounded-full bg-gradient-to-r from-[#FF0080] to-[#3A0060] px-9 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:border hover:border-white"
              >
                Explore Products
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex rounded-full border border-white/60 px-9 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
              >
                Our Story →
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bouncing scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" className="h-8 w-8 text-white/70" aria-hidden="true">
            <path fill="currentColor" d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41Z" />
          </svg>
        </motion.div>
      </motion.section>

      <motion.section
        id="about"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative overflow-hidden bg-[#f9f4ff] px-4 py-36 sm:px-8 lg:px-12"
      >
        <motion.div style={{ y: aboutParallax }} className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#FF0080]/10 blur-3xl" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="order-1 mx-auto w-full max-w-sm lg:order-2"
          >
            <div className="relative h-[30rem] w-full motion-safe:-rotate-2 overflow-hidden rounded-[2rem] shadow-[0_22px_42px_rgba(58,0,96,0.16)] transition-transform duration-500 motion-safe:hover:rotate-0 ring-4 ring-[#FFD700]/30 ring-offset-4">
              <Image
                src="/photos/hero1.jpg"
                alt="Founder Ntsako Mabunda"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>
          <div className="order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FF0080]">Our Story</p>
            <h2 className="hero-display mt-4 text-[clamp(2.4rem,5vw,4.8rem)] font-bold leading-[1.02] tracking-tight text-[#3A0060]">{aboutCopy.heading}</h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">{aboutCopy.intro[0]}</p>
            <p className="mt-7 text-lg leading-8 text-gray-600">{aboutCopy.intro[1]}</p>
            <div className="my-8 h-px w-full bg-[#FFD700]/50" />
            <div className="mt-2 border-l border-[#FFD700] pl-4">
              <h3 className="text-lg font-bold uppercase tracking-[0.18em] text-[#FFD700]">{aboutCopy.sections[0].title}</h3>
            </div>
            <p className="mt-5 text-lg leading-8 text-gray-600">{aboutCopy.sections[0].paragraphs[0]}</p>
            <p className="mt-7 text-lg leading-8 text-gray-600">{aboutCopy.sections[0].paragraphs[1]}</p>
            <div className="mt-10 border-l border-[#FFD700] pl-4">
              <h3 className="text-lg font-bold uppercase tracking-[0.18em] text-[#FFD700]">{aboutCopy.sections[1].title}</h3>
            </div>
            <p className="mt-5 text-lg leading-8 text-gray-600">{aboutCopy.sections[1].paragraphs[0]}</p>
            <motion.a
              href="https://wa.me/27717768306"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 24px rgba(212,56,142,0.45)" }}
              whileTap={{ scale: 0.97 }}
              className="mt-12 inline-flex rounded-full bg-[#3A0060] px-10 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#ff5cb5] hover:to-[#6f2cff]"
            >
              Order on WhatsApp
            </motion.a>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="products"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative overflow-hidden bg-[#f9f4ff] px-4 py-32 sm:px-8 lg:px-12"
      >
        <motion.div style={{ y: productParallax }} className="pointer-events-none absolute left-0 top-10 h-64 w-64 rounded-full bg-[#3A0060]/10 blur-3xl" />
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FF0080]">Our Collection</p>
              <h2 className="mt-4 hero-display text-[clamp(2.1rem,4.7vw,4.4rem)] font-bold leading-[1.06] tracking-tight text-[#1a0533]">
                Pure care <span className="italic">by nature</span>
              </h2>
            </div>
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <span className="inline-flex rounded-full bg-[#FFD700] px-4 py-1.5 text-xs font-bold text-[#3A0060] shadow-sm">Save R59 on the bundle</span>
              <p className="max-w-sm text-lg text-gray-600">Luxury textures, intentional ingredients, and a radiant finish made for everyday confidence.</p>
            </div>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr]"
          >
            <motion.article variants={cardReveal} className="sm:row-span-2">
              <motion.div
                whileHover={{ scale: 1.02, boxShadow: "0 20px 60px rgba(58,0,96,0.15)" }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="editorial-product-card relative overflow-hidden rounded-3xl bg-white shadow-[0_8px_40px_rgba(58,0,96,0.08)]"
              >
                <div className="relative h-[32rem] w-full rounded-t-3xl bg-[#f0e8ff]">
                  <ProductCardImage src={products[0].image} alt={`${products[0].name} product image`} priority sizes="(max-width: 768px) 100vw, 55vw" />
                </div>
                <div className="p-6 text-center">
                  <div className="mx-auto h-px w-12 bg-[#FFD700]" />
                  <h3 className="hero-display mt-4 text-2xl font-bold tracking-tight text-[#3A0060]">{products[0].name}</h3>
                  <p className="mt-2 text-base font-semibold text-[#FFD700]">{products[0].price}</p>
                  <a
                    href="https://wa.me/27717768306"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-sm font-medium text-[#FF0080] underline underline-offset-4 hover:text-[#3A0060] transition-colors"
                  >
                    Order Now →
                  </a>
                </div>
              </motion.div>
            </motion.article>
            {products.slice(1).map((product) => (
              <motion.article key={product.name} variants={cardReveal}>
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 60px rgba(58,0,96,0.15)" }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="editorial-product-card relative overflow-hidden rounded-3xl bg-white shadow-[0_8px_40px_rgba(58,0,96,0.08)]"
                >
                  <div className="relative h-[22rem] w-full rounded-t-3xl bg-[#f0e8ff]">
                    <ProductCardImage src={product.image} alt={`${product.name} product image`} sizes="(max-width: 768px) 100vw, 40vw" />
                  </div>
                  <div className="p-6 text-center">
                    <div className="mx-auto h-px w-12 bg-[#FFD700]" />
                    <h3 className="hero-display mt-4 text-xl font-bold tracking-tight text-[#3A0060]">{product.name}</h3>
                    <p className="mt-2 text-base font-semibold text-[#FFD700]">{product.price}</p>
                    <a
                      href="https://wa.me/27717768306"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex text-sm font-medium text-[#FF0080] underline underline-offset-4 hover:text-[#3A0060] transition-colors"
                    >
                      Order Now →
                    </a>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="bundle"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative overflow-hidden bg-[#1a0533] px-4 py-32 sm:px-8 lg:px-12"
      >
        <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#FF0080]/20 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#3A0060]/60 blur-[100px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD700]/10 blur-[80px]" />
        <p className="pointer-events-none absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 hero-display text-[clamp(8rem,20vw,16rem)] font-bold leading-none tracking-tight text-white/5">
          glow
        </p>
        <div className="relative z-[2] mx-auto w-full max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FF0080]">Best Value</p>
          <h2 className="hero-display mt-4 text-[clamp(2.2rem,4.8vw,4.5rem)] font-bold tracking-tight text-white">Complete Collection</h2>

          <motion.div variants={cardReveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="py-4">
              <h3 className="hero-display text-[clamp(1.8rem,3.6vw,3rem)] font-bold tracking-tight text-white">
                Bundle your <span className="italic">glow routine</span>
              </h3>
              <ul className="mt-6 space-y-3 text-lg text-white/80">
                <li className="flex items-center gap-3"><span className="font-bold text-[#FFD700]">✓</span> Facial Moisturizer</li>
                <li className="flex items-center gap-3"><span className="font-bold text-[#FFD700]">✓</span> Body Butter</li>
                <li className="flex items-center gap-3"><span className="font-bold text-[#FFD700]">✓</span> Omega Tissue Oil</li>
              </ul>
              <p className="mt-6 text-3xl font-bold text-[#FFD700]">R710.00</p>
              <p className="mt-1 text-sm font-semibold text-[#FF0080]">Save R59 when you bundle</p>
              <motion.a
                href="https://wa.me/27717768306"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 24px rgba(212,56,142,0.45)" }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 inline-flex rounded-full border-none bg-gradient-to-r from-[#FF0080] to-[#3A0060] px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
              >
                Get the bundle
              </motion.a>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative h-[32rem] overflow-hidden rounded-3xl bg-[#f5eeff] shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
            >
              <Image
                src="/photos/product_bundle.jpeg"
                alt="Forever Glow Complete Collection bundle — Facial Moisturizer, Body Butter, and Omega Tissue Oil"
                fill
                quality={100}
                className="object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <div className="overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#3A0060" />
        </svg>
      </div>
      <motion.section
        id="results"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[#3A0060] px-4 py-32 text-white sm:px-8 lg:px-12"
      >
        <div className="mx-auto w-full max-w-7xl">
          <p className="inline-flex rounded-full border border-[#FF0080]/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#FF0080]">By The Numbers</p>
          <h2 className="mt-6 hero-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold tracking-tight">
            Proven <span className="text-[#FFD700]">Results</span>
          </h2>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {provenResults.map((result) => (
              <motion.article
                key={result.label}
                variants={cardReveal}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                className="rounded-2xl bg-white/5 p-6 border-b-2 border-[#FFD700] transition-colors"
              >
                <p className="hero-display text-6xl font-bold leading-none text-white">
                  <CountUpNumber value={result.value} suffix={result.suffix} />
                </p>
                <div className="mt-3 h-1 w-12 rounded-full bg-[#FF0080]" />
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#FFD700]">{result.label}</p>
                <p className="mt-2 text-sm text-[#FFD700]/80">{result.note}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>
      <div className="overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#3A0060" />
        </svg>
      </div>

      <motion.section
        id="testimonials"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative overflow-hidden bg-[#f9f4ff] px-4 py-32 sm:px-8 lg:px-12"
      >
        <div className="pointer-events-none absolute right-16 top-20 h-52 w-52 rounded-full bg-gradient-to-br from-[#3A0060]/30 to-[#FF0080]/10 blur-3xl" />
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FF0080]">Client Stories</p>
          <h2 className="mt-4 hero-display text-[clamp(2.1rem,4.6vw,4rem)] font-bold tracking-tight text-[#1a0533]">What Our Clients Say</h2>
          <div className="mt-12 rounded-3xl border border-[#FF0080]/20 bg-[#3A0060] p-8 text-white shadow-[0_22px_60px_rgba(58,0,96,0.4)] sm:p-10">
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.article
                  key={activeItem.name}
                  custom={direction}
                  variants={carouselVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.42, ease: "easeOut" }}
                >
                  <QuoteIcon />
                  <div className="mt-5 flex gap-1" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <StarIcon key={starIndex} />
                    ))}
                  </div>
                  <p className="mt-6 text-xl italic leading-9 text-white">“{activeItem.quote}”</p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-full text-sm font-semibold text-white ring-2 ring-[#FFD700]/60 ${activeItem.tint}`}>
                      {activeItem.name
                        .split(" ")
                        .filter(Boolean)
                        .map((part) => part[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{activeItem.name}</p>
                      <p className="text-sm text-[#FFD700]">Forever Glow Client</p>
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsAutoPlay((current) => !current)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#FF0080] hover:text-[#FF0080]"
                  aria-label={isAutoPlay ? "Pause autoplay" : "Play autoplay"}
                >
                  {isAutoPlay ? "⏸" : "▶"}
                </button>
                <button
                  type="button"
                  onClick={() => paginate(-1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#FF0080] hover:text-[#FF0080]"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeftIcon />
                </button>
                <button
                  type="button"
                  onClick={() => paginate(1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#FF0080] hover:text-[#FF0080]"
                  aria-label="Next testimonial"
                >
                  <ChevronRightIcon />
                </button>
              </div>
              <div className="flex items-center gap-2">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => {
                      setDirection(index > activeTestimonial ? 1 : -1);
                      setActiveTestimonial(index);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      index === activeTestimonial ? "w-8 bg-[#FF0080]" : "w-2 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="before-after"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white px-4 py-32 sm:px-8 lg:px-12"
      >
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FF0080]">Real Transformations</p>
          <h2 className="mt-4 hero-display text-[clamp(2.1rem,4.6vw,4rem)] font-bold tracking-tight text-[#1a0533]">Real Results, Real Glow</h2>
          <p className="mt-4 max-w-2xl text-lg text-[#3A0060]">Drag the slider to compare before and after results from our routine.</p>
          <p className="mt-2 flex items-center gap-2 text-sm font-medium text-[#FF0080]"><span aria-hidden="true">☜</span> Drag the slider to reveal results <span aria-hidden="true">☞</span></p>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-10 grid gap-6 md:grid-cols-3">
            {beforeAfterItems.map((item, index) => (
              <BeforeAfterSlider key={item.caption} index={index} caption={item.caption} beforeSrc={item.beforeSrc} afterSrc={item.afterSrc} />
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="ingredients"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative overflow-hidden bg-[#f9f4ff] px-4 py-32 sm:px-8 lg:px-12"
      >
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_15%_20%,rgba(197,163,85,0.2),transparent_40%),radial-gradient(circle_at_90%_75%,rgba(212,56,142,0.15),transparent_42%)]" />
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FF0080]">What's Inside</p>
          <h2 className="mt-4 hero-display text-[clamp(2.1rem,4.5vw,4rem)] font-bold tracking-tight text-[#1a0533]">Ingredients</h2>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-12 space-y-6">
            {ingredients.map((ingredient, index) => {
              const reversed = index % 2 === 1;
              return (
                <motion.article
                  key={ingredient.title}
                  variants={cardReveal}
                  whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(58,0,96,0.10)" }}
                  className={`grid gap-6 rounded-3xl p-7 lg:grid-cols-[0.22fr_0.78fr] ${index % 2 === 0 ? "bg-white" : "bg-[#f9f4ff]"}`}
                >
                  <div className={`flex flex-col items-start gap-4 ${reversed ? "lg:order-2" : ""}`}>
                    <p className="hero-display text-7xl leading-none text-[#FFD700]">{String(index + 1).padStart(2, "0")}</p>
                    <div className="rounded-full bg-white p-3 shadow-sm">{index % 2 === 0 ? <LeafIcon /> : <DropIcon />}</div>
                  </div>
                  <div className={reversed ? "lg:order-1" : ""}>
                    <h3 className="hero-display text-[clamp(1.6rem,3vw,2.3rem)] font-bold tracking-tight text-[#1a0533]">{ingredient.title}</h3>
                    <p className="mt-4 text-base leading-8 text-[#3A0060]">{ingredient.copy}</p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="order"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white px-4 py-32 sm:px-8 lg:px-12"
      >
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FF0080]">Simple Process</p>
          <h2 className="mt-4 hero-display text-[clamp(2.1rem,4.4vw,4rem)] font-bold tracking-tight text-[#1a0533]">How to Order</h2>
          <div className="mt-10 space-y-6">
            {[
              {
                title: "Choose Your Products",
                description: "Browse our collection and pick your favourites",
              },
              {
                title: "Place Your Order",
                description: (
                  <a
                    href="https://wa.me/27717768306"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#1a0533] underline decoration-[#FF0080] underline-offset-4"
                  >
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white">
                      <WhatsAppIcon />
                    </span>
                    Send your order via WhatsApp at 071 776 8306
                  </a>
                ),
              },
              {
                title: "Make Payment",
                description: (
                  <div className="mt-3 rounded-xl border-l-4 border-[#FFD700] bg-[#f9f4ff] p-4 font-mono text-sm">
                    <p><span className="font-sans font-semibold text-[#3A0060]">Capitec:</span> 1396299104 — Collien Ntsako Mabunda</p>
                    <p className="mt-1"><span className="font-sans font-semibold text-[#3A0060]">FNB:</span> 62860102773 — ForeverGlow Business, Cheque</p>
                    <p className="mt-1"><span className="font-sans font-semibold text-[#3A0060]">Absa:</span> 4105805301 — Collien Ntsako Mabunda, Cheque</p>
                    <p className="mt-3 font-sans text-xs font-semibold uppercase tracking-widest text-[#FF0080]">Use your name as payment reference</p>
                  </div>
                ),
              },
              {
                title: "Send Proof of Payment",
                description: "WhatsApp your proof of payment and keep it until delivery",
              },
              {
                title: "Receive Your Glow",
                description: `Choose delivery: ${deliverySummary}, or pick up in Midrand/Joburg`,
              },
            ].map((step, index, arr) => (
              <div key={step.title} className="relative pl-16">
                {index < arr.length - 1 && <div className="absolute left-6 top-12 h-[calc(100%-0.5rem)] w-px bg-[#FF0080]/40" aria-hidden="true" />}
                <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#3A0060] to-[#FF0080] text-lg font-semibold text-white">
                  {index + 1}
                </div>
                <motion.article whileHover={{ y: -3 }} className="rounded-2xl bg-[#f9f4ff] p-6 transition-shadow hover:shadow-md">
                  <h3 className="hero-display text-2xl font-bold tracking-tight text-[#1a0533]">{step.title}</h3>
                  <div className="mt-3 text-[#3A0060]">{step.description}</div>
                </motion.article>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <motion.a
              href="https://wa.me/27717768306"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(255,0,128,0.45)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#3A0060] to-[#FF0080] px-12 py-4 text-base font-semibold text-white shadow-lg"
            >
              Ready? Order on WhatsApp →
            </motion.a>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="faq"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[#f9f4ff] px-4 py-32 sm:px-8 lg:px-12"
      >
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FF0080]">Got Questions?</p>
          <h2 className="mt-4 hero-display text-[clamp(2.1rem,4.4vw,4rem)] font-bold tracking-tight text-[#3A0060]">
            Frequently Asked <span className="italic">Questions</span>
          </h2>
          <div className="mt-12 divide-y divide-[#3A0060]/10">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="py-6 hover:bg-white/70 rounded-2xl px-4 transition-colors">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-start justify-between gap-6 text-left"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="hero-display text-lg font-semibold text-[#3A0060] sm:text-xl">{faq.question}</span>
                  <span className="mt-1 flex-shrink-0 text-2xl font-light leading-none text-[#FFD700]">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      {index === faqs.length - 1 ? (
                      <p className="mt-4 text-base leading-8 text-gray-600">
                        Please refer to our{" "}
                        <Link href="/refunds" className="text-[#FF0080] underline underline-offset-4 hover:text-[#3A0060] transition-colors">
                          refunds policy page
                        </Link>{" "}
                        for full details.
                      </p>
                    ) : (
                      <p className="mt-4 text-base leading-8 text-gray-600">{faq.answer}</p>
                    )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
