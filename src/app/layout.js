import "./globals.css";
import SiteHeader from "@/components/site-header";
import WhatsAppButton from "@/components/whatsapp-button";

export const metadata = {
  title: "Forever Group of Companies",
  description: "Forever Glow skincare product showcase website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-[#120226] text-[#f8e8bc]">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">{children}</main>
          <footer className="border-t border-[#c5a355]/25 px-4 py-5 text-center text-sm text-[#d9bf7a]">
            Forever Group of Companies · Reg: 2020 / 540529 / 07
          </footer>
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
