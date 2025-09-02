"use client";

import React, { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/navLinks";

interface MobileLinkProps {
  href: string;
  label: string;
  onClick: () => void;
  className?: string;
}

const MobileLink: React.FC<MobileLinkProps> = ({ href, label, onClick, className = "" }) => (
  <Link
    href={href}
    onClick={onClick}
    className={`px-4 py-3 rounded-lg hover:bg-slate-100 transition-colors ${className}`}
  >
    {label}
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white/80 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-block w-8 h-8 rounded-xl bg-cyan-600"></span>
            <span className="font-extrabold tracking-tight text-xl">
              Medium Ali Moussa
            </span>
          </Link>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center gap-6 font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-brand-600 transition-colors"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-4 py-2 rounded-xl bg-cyan-600 text-white hover:bg-cyan-700 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Bouton mobile très élégant */}
          <button
            className="md:hidden w-12 h-12 flex flex-col justify-center items-center gap-1 relative z-50 rounded-full border-2 border-slate-300 bg-white/90 shadow-md hover:bg-white transition-all duration-300"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-slate-800 transition-transform duration-300 origin-center ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-slate-800 transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-slate-800 transition-transform duration-300 origin-center ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Overlay semi-transparent */}
        <div
          className={`fixed inset-0 bg-black/30 transition-opacity duration-300 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMenu}
        ></div>

        {/* Menu mobile stylé premium */}
        <div
          className={`md:hidden fixed top-16 left-4 right-4 bg-white rounded-b-xl shadow-2xl transition-transform transition-opacity duration-300 ease-in-out z-50 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-2 pt-4 pb-6 font-medium">
            {navLinks.map(({ href, label }) => (
              <MobileLink key={href} href={href} label={label} onClick={closeMenu} />
            ))}
            <MobileLink
              href="/contact"
              label="Contact"
              onClick={closeMenu}
              className="bg-cyan-600 text-white hover:bg-cyan-700"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
