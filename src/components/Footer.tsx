import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Integrasi Digital Network
          </h3>
          <p className="text-sm leading-relaxed">
            Mitra teknologi terpercaya untuk solusi IT terintegrasi,
            infrastruktur jaringan, dan pengembangan sistem informasi.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4" /> info@integrasidigital.net
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4" /> +62 812-xxxx-xxxx
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-1" />
              Jakarta, Indonesia
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#"><Globe /></a>
            <a className="hover:text-white" href="#"><Linkedin /></a>
            <a className="hover:text-white" href="#"><Github /></a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} Integrasi Digital Network. All rights reserved.
      </div>
    </footer>
  );
}
