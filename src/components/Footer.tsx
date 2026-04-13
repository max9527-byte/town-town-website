import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Facebook, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-slate-800 pb-16">
        {/* Company Info */}
        <div className="space-y-6">
          <span className="text-2xl font-black tracking-tighter text-brand-teal">TOWN TOWN</span>
          <p className="text-slate-400 max-w-xs text-sm leading-relaxed">
            Professional hygiene care products manufacturer with over 10 years of experience. Providing innovative solutions for baby, adult, and female care globally.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-teal transition-colors duration-300">
              <Linkedin size={18} />
            </Link>
            <Link href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-teal transition-colors duration-300">
              <Facebook size={18} />
            </Link>
            <Link href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-teal transition-colors duration-300">
              <Globe size={18} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold">Quick Links</h4>
          <ul className="space-y-4">
            {["Home", "About Us", "Services", "Case Studies", "Contact Us"].map((link) => (
              <li key={link}>
                <Link href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-slate-400 hover:text-white transition-colors duration-200">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold">Our Services</h4>
          <ul className="space-y-4 text-slate-400">
            <li>OEM/ODM Customization</li>
            <li>Hygiene Product Manufacturing</li>
            <li>International Trade Support</li>
            <li>Brand Development</li>
            <li>Supply Chain Solutions</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 text-slate-400">
              <Phone size={18} className="text-brand-teal" />
              <span>+86 123 4567 8901</span>
            </li>
            <li className="flex items-center space-x-3 text-slate-400">
              <Mail size={18} className="text-brand-teal" />
              <span>info@towntowncare.com</span>
            </li>
            <li className="flex items-start space-x-3 text-slate-400">
              <MapPin size={18} className="text-brand-teal shrink-0 mt-1" />
              <span className="leading-tight">Industrial Zone, Quanzhou, Fujian, China</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
        <p>&copy; {new Date().getFullYear()} Town Town Care. All rights reserved.</p>
        <div className="mt-4 md:mt-0 space-x-6">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
