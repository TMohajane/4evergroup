import Image from "next/image";

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

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden bg-[#f9f4ff] px-4 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="order-2 lg:order-1">
          <h1 className="hero-display text-[clamp(2.4rem,5vw,4.8rem)] font-bold leading-[1.02] tracking-tight text-[#FF0080]">{aboutCopy.heading}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">{aboutCopy.intro[0]}</p>
          <p className="mt-7 text-lg leading-8 text-gray-600">{aboutCopy.intro[1]}</p>
          <div className="mt-10 border-l border-[#FFD700] pl-4">
            <h2 className="text-base font-medium uppercase tracking-[0.18em] text-[#FF0080]">{aboutCopy.sections[0].title}</h2>
          </div>
          <p className="mt-5 text-lg leading-8 text-gray-600">{aboutCopy.sections[0].paragraphs[0]}</p>
          <p className="mt-7 text-lg leading-8 text-gray-600">{aboutCopy.sections[0].paragraphs[1]}</p>
          <div className="mt-10 border-l border-[#FFD700] pl-4">
            <h2 className="text-base font-medium uppercase tracking-[0.18em] text-[#FF0080]">{aboutCopy.sections[1].title}</h2>
          </div>
          <p className="mt-5 text-lg leading-8 text-gray-600">{aboutCopy.sections[1].paragraphs[0]}</p>
          <a
            href="https://wa.me/27717768306"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex rounded-full bg-[#3A0060] px-10 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#ff5cb5] hover:to-[#6f2cff]"
          >
            Order on WhatsApp
          </a>
        </div>
        <div className="order-1 mx-auto w-full max-w-sm lg:order-2">
          <div className="relative h-[30rem] w-full overflow-hidden rounded-[2rem] shadow-[0_22px_42px_rgba(58,0,96,0.16)]">
            <Image src="/photos/hero1.jpg" alt="Founder Ntsako Mabunda" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
          </div>
          <div className="mt-4 text-center">
            <p className="hero-display text-lg font-bold text-[#FF0080]">Collien Ntsako Mabunda</p>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#FF0080]">Founder & CEO</p>
          </div>
        </div>
      </div>
    </section>
  );
}
