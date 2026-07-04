"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuColor = scrolled || menuAberto ? "text-[#1D3D73]" : "text-white";
  const subtitleColor =
    scrolled || menuAberto ? "text-gray-600" : "text-white/80";

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled || menuAberto
          ? "bg-[#EDF3FB]/95 backdrop-blur-xl shadow-lg border-b border-[#D5DFEE]"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex h-24 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-4"
          onClick={() => setMenuAberto(false)}
        >
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

        {/* Menu Desktop */}
        <nav className="hidden md:block">
          <ul
            className={`flex items-center gap-10 text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${menuColor}`}
          >
            <li>
              <Link href="/" className="transition hover:text-[#C7A14F]">
                Início
              </Link>
            </li>

            <li>
              <Link href="/historia" className="transition hover:text-[#C7A14F]">
                História
              </Link>
            </li>

            <li>
              <Link href="/ternos" className="transition hover:text-[#C7A14F]">
                Ternos
              </Link>
            </li>

            <li>
              <Link href="/galeria" className="transition hover:text-[#C7A14F]">
                Galeria
              </Link>
            </li>

            <li>
              <Link href="/contato" className="transition hover:text-[#C7A14F]">
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        {/* Botão Mobile */}
        <button
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
          className={`flex h-12 w-12 items-center justify-center rounded-full border transition md:hidden ${
            scrolled || menuAberto
              ? "border-[#1D3D73]/30 bg-white text-[#1D3D73]"
              : "border-white/50 bg-black/20 text-white backdrop-blur-md"
          }`}
          aria-label="Abrir menu"
        >
          <span className="text-3xl leading-none">
            {menuAberto ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`overflow-hidden border-t border-[#D5DFEE] bg-[#EDF3FB]/98 transition-all duration-500 md:hidden ${
          menuAberto ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-custom py-6">
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="/"
                onClick={() => setMenuAberto(false)}
                className="block rounded-2xl border border-[#D5DFEE] bg-white/75 px-5 py-4 text-center text-sm font-bold uppercase tracking-wider text-[#1D3D73] shadow-sm transition hover:border-[#C7A14F] hover:bg-[#C7A14F] hover:text-white"
              >
                Início
              </Link>
            </li>

            <li>
              <Link
                href="/historia"
                onClick={() => setMenuAberto(false)}
                className="block rounded-2xl border border-[#D5DFEE] bg-white/75 px-5 py-4 text-center text-sm font-bold uppercase tracking-wider text-[#1D3D73] shadow-sm transition hover:border-[#C7A14F] hover:bg-[#C7A14F] hover:text-white"
              >
                História
              </Link>
            </li>

            <li>
              <Link
                href="/ternos"
                onClick={() => setMenuAberto(false)}
                className="block rounded-2xl border border-[#D5DFEE] bg-white/75 px-5 py-4 text-center text-sm font-bold uppercase tracking-wider text-[#1D3D73] shadow-sm transition hover:border-[#C7A14F] hover:bg-[#C7A14F] hover:text-white"
              >
                Ternos
              </Link>
            </li>

            <li>
              <Link
                href="/galeria"
                onClick={() => setMenuAberto(false)}
                className="block rounded-2xl border border-[#D5DFEE] bg-white/75 px-5 py-4 text-center text-sm font-bold uppercase tracking-wider text-[#1D3D73] shadow-sm transition hover:border-[#C7A14F] hover:bg-[#C7A14F] hover:text-white"
              >
                Galeria
              </Link>
            </li>

            <li>
              <Link
                href="/contato"
                onClick={() => setMenuAberto(false)}
                className="block rounded-2xl border border-[#D5DFEE] bg-white/75 px-5 py-4 text-center text-sm font-bold uppercase tracking-wider text-[#1D3D73] shadow-sm transition hover:border-[#C7A14F] hover:bg-[#C7A14F] hover:text-white"
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