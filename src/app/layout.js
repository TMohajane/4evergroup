import "./globals.css";
import SiteHeader from "@/components/site-header";
import WhatsAppButton from "@/components/whatsapp-button";
import PageTransition from "@/components/page-transition";

export const metadata = {
  title: "Forever Group of Companies",
  description: "Forever Glow skincare product showcase website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-[#faf7f2] text-[#1a0533]">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <footer className="bg-[#120226] px-4 py-10 text-[#c5a355]">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p>Forever Group of Companies · Reg: 2020 / 540529 / 07</p>
              <a href="https://wa.me/27717768306" target="_blank" rel="noopener noreferrer" className="hover:text-[#faf7f2]">
                WhatsApp: 071 776 8306
              </a>
            </div>
          </footer>
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
