import "./globals.css";
import SiteHeader from "@/components/site-header";
import WhatsAppButton from "@/components/whatsapp-button";
import PageTransition from "@/components/page-transition";

export const metadata = {
  title: "Forever Glow",
  description: "Forever Glow skincare product showcase website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-[#f5f0eb] text-[#1a0533]">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <footer className="bg-[#1a0533] px-4 py-12 text-[#c5a355] sm:px-8 lg:px-12">
            <div className="mx-auto w-full max-w-7xl">
              <div className="grid gap-8 md:grid-cols-[1.1fr_1fr_1fr]">
                <div>
                  <p className="hero-display text-2xl font-semibold tracking-tight">Forever Glow</p>
                  <p className="mt-3 text-sm text-[#dec787]">Reg: 2020 / 540529 / 07</p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f6e7c2]">Contact</p>
                  <a href="https://wa.me/27717768306" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-2 text-[#c5a355] transition hover:text-[#f4ddb0]">
                    <span aria-hidden="true">💬</span>
                    <span>071 776 8306</span>
                  </a>
                  <p className="mt-3 flex items-center gap-2 text-[#dec787]">
                    <span aria-hidden="true">📍</span>
                    <span>Midrand / Joburg</span>
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f6e7c2]">Social</p>
                  <div className="mt-4 flex items-center gap-3">
                    <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c5a355]/50 text-lg transition hover:border-[#f4ddb0] hover:text-[#f4ddb0]" aria-label="Instagram">
                      <span aria-hidden="true">📸</span>
                    </a>
                    <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c5a355]/50 text-lg transition hover:border-[#f4ddb0] hover:text-[#f4ddb0]" aria-label="Facebook">
                      <span aria-hidden="true">👍</span>
                    </a>
                    <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c5a355]/50 text-lg transition hover:border-[#f4ddb0] hover:text-[#f4ddb0]" aria-label="TikTok">
                      <span aria-hidden="true">🎵</span>
                    </a>
                  </div>
                </div>
              </div>

              <p className="mt-10 border-t border-[#c5a355]/25 pt-6 text-sm text-[#dec787]">
                Built with ❤️ by{" "}
                <a href="#" className="underline decoration-[#d4388e] underline-offset-4 transition hover:text-[#f4ddb0]">
                  c401 studios
                </a>
              </p>
            </div>
          </footer>
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
