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
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="hero-display text-2xl font-semibold tracking-tight">Forever Glow</p>
              <a href="https://wa.me/27717768306" target="_blank" rel="noopener noreferrer" className="hover:text-[#f4ddb0]">
                WhatsApp: 071 776 8306
              </a>
              <p>Reg: 2020 / 540529 / 07</p>
            </div>
          </footer>
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
