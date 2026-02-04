"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <div className="font-bold text-xl">
            <span className={scrolled ? "text-gray-900" : "text-white"}>
              INTEGRASI DIGITAL NETWROK
            </span>
          </div>

          {/* Menu */}
          {/* Menu */}
            {/* Menu */}
            <nav className="hidden md:flex items-center gap-8 font-medium">
            {[
                { label: "Home", href: "#home", event: "trigger-hero-animation" },
                { label: "About", href: "#about", event: "trigger-about-animation" },
                { label: "Services", href: "#services", event: "trigger-services-animation" },
                { label: "Portfolio", href: "#portfolio", event: "trigger-portfolio-animation" },
                { label: "Contact", href: "#contact", event: "trigger-contact-animation" },
            ].map((item) => (
                <a
                key={item.label}
                href={item.href}
                onClick={() => {
                    window.dispatchEvent(new Event(item.event));
                }}
                className={`transition ${
                    scrolled
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-white hover:text-gray-200"
                }`}
                >
                {item.label}
                </a>
            ))}
            </nav>



          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className={`px-6 py-3 rounded-full font-semibold transition ${
                scrolled
                  ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "bg-white text-gray-900 hover:bg-gray-200"
              }`}
            >
              Get Quote
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
