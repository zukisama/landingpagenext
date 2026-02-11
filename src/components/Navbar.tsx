"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", trigger: "trigger-hero-animation" },
  { label: "About", href: "#about", trigger: "trigger-about-animation" },
  { label: "Services", href: "#services", trigger: "trigger-services-animation" },
  { label: "Portfolio", href: "#portfolio", trigger: "trigger-portfolio-animation" },
  { label: "Contact", href: "#contact", trigger: "trigger-cta-animation" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string, trigger?: string) => {
    setOpen(false);

    if (trigger) {
      window.dispatchEvent(new Event(trigger));
    }

    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 50);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div className="font-extrabold text-lg">
            <span className={scrolled ? "text-gray-900" : "text-white"}>
              INTEGRASI DIGITAL NETWORK
            </span>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href, item.trigger)}
                className={`transition ${
                  scrolled
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-white hover:text-gray-200"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          {/* MOBILE BUTTON */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              // Jika navbar sudah discroll atau menu sedang terbuka (bg putih), gunakan teks hitam
              scrolled || open ? "text-gray-900" : "text-white"
            }`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden flex-wrap fixed left-0 right-0 top-20 z-40 transition-all duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-white border-t shadow-lg px-6 py-6 space-y-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href, item.trigger)}
              className="block w-full text-left text-lg font-semibold text-gray-900"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
