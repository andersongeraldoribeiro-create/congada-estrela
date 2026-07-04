"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuColor = scrolled ? "text-[#1D3D73]" : "text-white";
  const subtitleColor = scrolled ? "text-gray-600" : "text-white/80";

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-[#EDF3FB]/90 backdrop-blur-xl shadow-lg border-b border-[#D5DFEE]"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex h-24 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Congada de Estrela do Indaiá"
            width={75}
            height={75}
            priority
            className="object-contain"
          />

          <div>
            <h1
              className={`text-3xl font-bold transition-colors duration-300 ${menuColor}`}
            >
              Congada
            </h1>

            <p
              className={`text-sm transition-colors duration-300 ${subtitleColor}`}
            >
              História • Fé • União
            </p>
          </div>
        </Link>

        {/* Menu */}
        <nav className="hidden md:block">
          <ul
            className={`flex items-center gap-10 text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${menuColor}`}
          >
            <li>
              <Link
                href="/"
                className="transition hover:text-[#C7A14F]"
              >
                Início
              </Link>
            </li>

            <li>
              <Link
                href="/historia"
                className="transition hover:text-[#C7A14F]"
              >
                História
              </Link>
            </li>

            <li>
              <Link
                href="/ternos"
                className="transition hover:text-[#C7A14F]"
              >
                Ternos
              </Link>
            </li>

            <li>
              <Link
                href="/galeria"
                className="transition hover:text-[#C7A14F]"
              >
                Galeria
              </Link>
            </li>

            <li>
              <Link
                href="/contato"
                className="transition hover:text-[#C7A14F]"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}