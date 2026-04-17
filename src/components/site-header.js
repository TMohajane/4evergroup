import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/ingredients", label: "Ingredients" },
  { href: "/delivery", label: "Delivery" },
  { href: "/how-to-order", label: "How to Order" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-[#c5a355]/25 bg-[#120226]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-wide text-[#c5a355]">
          Forever Group of Companies
        </Link>
        <nav className="flex flex-wrap gap-3 text-sm text-[#e8d39a]">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#d4388e]">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
