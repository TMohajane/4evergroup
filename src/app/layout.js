import "./globals.css";
import SiteHeader from "@/components/site-header";
import WhatsAppButton from "@/components/whatsapp-button";
import PageTransition from "@/components/page-transition";
import ScrollProgress from "@/components/scroll-progress";
import AnalyticsProvider from "@/components/analytics-provider";

function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M20.52 3.48A11.83 11.83 0 0 0 12.04 0 11.96 11.96 0 0 0 1.64 17.88L0 24l6.28-1.64a11.96 11.96 0 0 0 5.74 1.46h.01C18.63 23.82 24 18.45 24 11.84c0-3.17-1.24-6.15-3.48-8.36ZM12.03 21.8h-.01a9.94 9.94 0 0 1-5.06-1.38l-.36-.22-3.76.98 1.01-3.65-.24-.38a9.94 9.94 0 0 1-1.54-5.3c0-5.52 4.5-10.01 10.03-10.01a9.96 9.96 0 0 1 7.09 2.94 9.9 9.9 0 0 1 2.93 7.06c0 5.52-4.5 10.01-10.02 10.01Zm5.5-7.5c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.93-2.23-.24-.59-.49-.5-.68-.51h-.58c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
      />
    </svg>
  );
}

function InstagramIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="igGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#feda75" />
          <stop offset="45%" stopColor="#d62976" />
          <stop offset="100%" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <path
        fill="url(#igGradient)"
        d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm8.4 1.8h-8.3A4.05 4.05 0 0 0 3.8 7.85v8.3a4.05 4.05 0 0 0 4.05 4.05h8.3a4.05 4.05 0 0 0 4.05-4.05v-8.3A4.05 4.05 0 0 0 16.15 3.8ZM12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Zm5.25-3.2a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"
      />
    </svg>
  );
}

function FacebookIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="#1877F2"
        d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.03 10.13 11.93v-8.44H7.08v-3.5h3.05V9.39c0-3.03 1.79-4.71 4.54-4.71 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.5 0-1.97.94-1.97 1.9v2.26h3.35l-.53 3.5h-2.82V24C19.62 23.1 24 18.1 24 12.07Z"
      />
    </svg>
  );
}

function TikTokIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M20.02 7.56a6.37 6.37 0 0 1-3.72-1.2v5.47a6.06 6.06 0 1 1-5.24-6.01v3.13a2.93 2.93 0 1 0 2.11 2.88V0h3.13a6.36 6.36 0 0 0 3.72 5.54v2.02Z"
      />
    </svg>
  );
}

function MapPinIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M12 2a7 7 0 0 0-7 7c0 5.4 7 13 7 13s7-7.6 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
      />
    </svg>
  );
}

function EmailIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2-8 5-8-5h16Zm0 12H4V9l8 5 8-5v9Z"
      />
    </svg>
  );
}

export const metadata = {
  title: "Forever Glow | Skincare by Forever Group",
  description: "South Africa's favourite natural skincare — crafted for radiant, confident skin.",
  icons: {
    icon: [{ url: "/photos/icon.png", type: "image/png" }],
    shortcut: [{ url: "/photos/icon.png", type: "image/png" }],
    apple: [{ url: "/photos/icon.png", type: "image/png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/photos/icon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/photos/icon.png" />
      </head>
      <body className="min-h-full bg-[#f9f4ff] text-[#1a0533]">
        <ScrollProgress />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <footer className="bg-[#3A0060] px-4 py-14 text-[#FFD700] sm:px-8 lg:px-12">
            <div className="mx-auto w-full max-w-7xl">
              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="hero-display text-3xl font-semibold tracking-tight text-white">Forever Glow</p>
                  <p className="mt-4 max-w-xs text-sm leading-7 text-[#FFD700]">Radiant skincare essentials designed for confident, everyday glow.</p>
                  <div className="mt-5 flex items-center gap-3">
                    <a href="https://wa.me/27717768306" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] transition duration-300 hover:-translate-y-0.5 hover:scale-105">
                      <WhatsAppIcon className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href="https://www.instagram.com/forever_glow_sa"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white transition duration-300 hover:-translate-y-0.5 hover:scale-105"
                    >
                      <InstagramIcon />
                    </a>
                    <a
                      href="https://www.facebook.com/ForeverGlow"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white transition duration-300 hover:-translate-y-0.5 hover:scale-105"
                    >
                      <FacebookIcon />
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Quick Links</p>
                  <ul className="mt-4 space-y-3 text-sm text-[#FFD700]">
                    {[
                      { href: "#about", label: "About" },
                      { href: "#products", label: "Products" },
                      { href: "#reseller", label: "Resellers" },
                      { href: "#ingredients", label: "Ingredients" },
                      { href: "#the-look", label: "The Look" },
                      { href: "#order", label: "How to Order" },
                    ].map((item) => (
                      <li key={item.href}>
                        <a href={item.href} className="group inline-flex items-center gap-2 transition hover:text-white">
                          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                          <span>{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-white">Policies</p>
                  <ul className="mt-4 space-y-3 text-sm text-[#FFD700]">
                    {[
                      { href: "/terms", label: "Terms & Conditions" },
                      { href: "/privacy", label: "Privacy Policy" },
                      { href: "/refunds", label: "Refund Policy" },
                      { href: "/delivery-policy", label: "Delivery Policy" },
                      { href: "/disclaimer", label: "Medical Disclaimer" },
                    ].map((item) => (
                      <li key={item.href}>
                        <a href={item.href} className="group inline-flex items-center gap-2 transition hover:text-white">
                          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                          <span>{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Contact</p>
                  <a href="https://wa.me/27717768306" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-2 text-sm text-[#FFD700] transition hover:text-white">
                    <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                    <span>071 776 8306</span>
                  </a>
                  <a href="mailto:Mabunda_ntsako@yahoo.com" className="mt-3 flex items-center gap-2 text-sm text-[#FFD700] transition hover:text-white">
                    <EmailIcon className="h-5 w-5 text-[#FFD700]" />
                    <span>Mabunda_ntsako@yahoo.com</span>
                  </a>
                  <p className="mt-3 flex items-center gap-2 text-sm text-[#FFD700]">
                    <MapPinIcon className="h-5 w-5 text-[#FFD700]" />
                    <span>Midrand &amp; Joburg, South Africa</span>
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Follow Us</p>
                  <div className="mt-4 space-y-3 text-sm text-[#FFD700]">
                    <a href="https://www.instagram.com/forever_glow_sa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-white" aria-label="Instagram">
                      <InstagramIcon className="h-5 w-5" />
                      <span>@forever_glow_sa</span>
                    </a>
                    <a href="https://www.facebook.com/ForeverGlow" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-white" aria-label="Facebook">
                      <FacebookIcon className="h-5 w-5" />
                      <span>ForeverGlow</span>
                    </a>
                    <a href="https://www.tiktok.com/@forever_glow_sa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-white" aria-label="TikTok">
                      <TikTokIcon className="h-5 w-5 text-white" />
                      <span>@forever_glow_sa</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 border-t border-[#FFD700]/30 pt-6 text-sm text-[#FFD700] md:flex-row md:items-center md:justify-between">
                <p>© 2026 Forever Group of Companies. All rights reserved.</p>
                <p>
                  Built with ❤️ by{" "}
                  <a
                    href="https://c401studios.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[#FF0080] underline-offset-4 transition hover:text-white"
                  >
                    c401 studios
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </div>
        <WhatsAppButton />
        <AnalyticsProvider />
      </body>
    </html>
  );
}
