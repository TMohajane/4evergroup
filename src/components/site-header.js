"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#products", label: "Products" },
  { href: "/#story", label: "Story" },
  { href: "/#ingredients", label: "Ingredients" },
  { href: "/#delivery", label: "Delivery" },
  { href: "/#order", label: "How to Order" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(pathname !== "/" || window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "border-[#c5a355]/30 bg-[#120226]/95 backdrop-blur" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="hero-display text-2xl tracking-wide text-[#c5a355]">
          Forever Glow
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-[#f8e8bc] md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#d4388e]">
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/27717768306"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#c5a355] px-4 py-2 transition hover:bg-[#c5a355] hover:text-[#1a0533]"
          >
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className="rounded border border-[#c5a355]/70 px-3 py-2 text-sm text-[#f8e8bc] md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          Menu
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="border-t border-[#c5a355]/20 bg-[#120226] px-4 py-4 md:hidden"
          >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 text-[#f8e8bc]">
              {links.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="transition hover:text-[#d4388e]">
                  {link.label}
                </Link>
              ))}
              <a href="https://wa.me/27717768306" target="_blank" rel="noopener noreferrer" className="text-[#c5a355]">
                WhatsApp
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
