"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#products", label: "Products" },
  { href: "/#ingredients", label: "Ingredients" },
  { href: "/#order", label: "How to Order" },
  { href: "/#faq", label: "FAQ" },
];

const socialLinks = [
  { href: "https://www.instagram.com/forever_glow_sa", label: "Instagram", short: "IG" },
  { href: "https://www.facebook.com/ForeverGlow", label: "Facebook", short: "FB" },
  { href: "https://www.tiktok.com/@forever_glow_sa", label: "TikTok", short: "TT" },
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M19.11 17.53c-.27-.13-1.56-.77-1.8-.86-.24-.09-.42-.13-.6.14s-.69.86-.84 1.04c-.16.18-.31.2-.58.07-.27-.13-1.12-.41-2.13-1.3-.79-.7-1.32-1.56-1.47-1.82-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.45-.82-1.98-.21-.51-.43-.45-.6-.46h-.51c-.18 0-.47.07-.72.34-.24.27-.94.92-.94 2.24s.96 2.6 1.09 2.78c.13.18 1.88 2.87 4.56 4.02.64.28 1.14.44 1.53.56.64.2 1.22.17 1.68.1.51-.08 1.56-.64 1.78-1.26.22-.63.22-1.16.16-1.26-.07-.11-.24-.18-.51-.31z" />
      <path d="M16.02 3.2C8.95 3.2 3.2 8.93 3.2 16c0 2.5.72 4.93 2.09 7.03L3 29l6.15-2.22a12.77 12.77 0 0 0 6.87 2c7.07 0 12.8-5.73 12.8-12.8S23.1 3.2 16.02 3.2zm0 23.46c-2.05 0-4.06-.55-5.81-1.6l-.42-.25-3.65 1.32 1.33-3.56-.27-.44a10.58 10.58 0 0 1-1.62-5.65c0-5.85 4.76-10.61 10.62-10.61 5.85 0 10.61 4.76 10.61 10.61 0 5.86-4.76 10.62-10.61 10.62z" />
    </svg>
  );
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        rafRef.current = null;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#3A0060]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center">
          <Image src="/photos/logo.png" alt="Forever Group of Companies" width={300} height={70} className="h-[70px] w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex text-white drop-shadow">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="relative transition hover:text-[#FFD700] after:absolute after:bottom-[-3px] after:left-0 after:h-0.5 after:w-0 after:bg-[#FFD700] after:transition-all after:duration-300 hover:after:w-full">
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/27717768306"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:scale-105"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon />
          </a>
          <div className="hidden items-center gap-2 lg:flex">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/35 text-[10px] font-semibold text-white transition hover:border-[#FFD700] hover:text-[#FFD700]"
              >
                {social.short}
              </a>
            ))}
          </div>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <div className="relative h-5 w-5">
            <span className={`absolute left-0 top-0.5 h-0.5 w-5 bg-white transition-all duration-300 ${menuOpen ? "top-2 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-3.5 h-0.5 w-5 bg-white transition-all duration-300 ${menuOpen ? "top-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="border-t border-white/20 bg-[#3A0060]/95 backdrop-blur-sm px-4 py-5 md:hidden"
          >
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 text-white">
              {links.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="transition hover:text-[#FFD700]">
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/27717768306"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm text-white"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-white/30 px-3 py-1 text-xs font-medium text-white transition hover:border-[#FFD700] hover:text-[#FFD700]"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
