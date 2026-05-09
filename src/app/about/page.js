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
    <section className="relative overflow-hidden bg-[#f9f4ff] px-4 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h1 className="hero-display text-[clamp(2.4rem,5vw,4.8rem)] font-bold leading-[1.02] tracking-tight text-[#1a0533]">{aboutCopy.heading}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">{aboutCopy.intro[0]}</p>
          <p className="mt-5 text-lg leading-8 text-gray-600">{aboutCopy.intro[1]}</p>
          <h2 className="mt-8 hero-display text-2xl font-semibold text-[#FFD700]">{aboutCopy.sections[0].title}</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">{aboutCopy.sections[0].paragraphs[0]}</p>
          <p className="mt-5 text-lg leading-8 text-gray-600">{aboutCopy.sections[0].paragraphs[1]}</p>
          <h2 className="mt-8 hero-display text-2xl font-semibold text-[#3A0060]">{aboutCopy.sections[1].title}</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">{aboutCopy.sections[1].paragraphs[0]}</p>
          <a
            href="https://wa.me/27717768306"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full border border-[#3A0060] px-8 py-3 text-sm font-semibold transition-all duration-300 hover:border-[#FF0080] hover:bg-[#FF0080] hover:text-white"
          >
            Order on WhatsApp
          </a>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <div className="relative h-[30rem] w-full overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(26,5,51,0.12)]">
            <Image src="/photos/hero1.jpg" alt="Founder Ntsako Mabunda" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
