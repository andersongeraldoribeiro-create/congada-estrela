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

  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuAberto]);

  const menuColor = scrolled || menuAberto ? "text-[#1D3D73]" : "text-white";
  const subtitleColor =
    scrolled || menuAberto ? "text-gray-600" : "text-white/80";

  const menuItems = [
    { nome: "Início", href: "/" },
    { nome: "História", href: "/historia" },
    { nome: "Ternos", href: "/ternos" },
    { nome: "Galeria", href: "/galeria" },
    { nome: "Comissão", href: "/comissao" },
    { nome: "Contato", href: "/contato" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-[80] w-full transition-all duration-500 ${
          scrolled || menuAberto
            ? "bg-[#EDF3FB]/95 backdrop-blur-xl shadow-lg border-b border-[#D5DFEE]"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom flex h-24 items-center justify-between">
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

          <nav className="hidden md:block">
            <ul
              className={`flex items-center gap-8 text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${menuColor}`}
            >
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-[#C7A14F]"
                  >
                    {item.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setMenuAberto(!menuAberto)}
            className={`relative z-[90] flex h-12 w-12 items-center justify-center rounded-full border transition md:hidden ${
              scrolled || menuAberto
                ? "border-[#1D3D73]/25 bg-white text-[#1D3D73] shadow-md"
                : "border-white/50 bg-black/20 text-white backdrop-blur-md"
            }`}
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          >
            <span className="text-3xl leading-none">
              {menuAberto ? "×" : "☰"}
            </span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[70] bg-[#06162D]/96 backdrop-blur-xl transition-all duration-500 md:hidden ${
          menuAberto
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(199,161,79,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.10),transparent_32%)]" />

        <div className="relative flex min-h-screen flex-col items-center justify-center px-8 pt-24 text-center">
          <div
            className={`transition-all duration-500 ${
              menuAberto
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
              Navegação
            </span>

            <h2 className="mt-5 text-4xl font-bold text-white">Congada</h2>

            <p className="mt-3 text-sm tracking-[0.18em] text-white/70">
              História • Fé • União
            </p>

            <div className="mx-auto mt-8 h-px w-48 bg-gradient-to-r from-transparent via-[#C7A14F] to-transparent" />

            <nav className="mt-10">
              <ul className="flex flex-col gap-5">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuAberto(false)}
                      className="group block text-3xl font-bold text-white transition hover:text-[#E7C77A]"
                    >
                      {item.nome}
                      <span className="mx-auto mt-3 block h-px w-0 bg-[#C7A14F] transition-all duration-300 group-hover:w-20" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mx-auto mt-10 h-px w-48 bg-gradient-to-r from-transparent via-[#C7A14F] to-transparent" />

            <button
              type="button"
              onClick={() => setMenuAberto(false)}
              className="mt-8 rounded-full border border-[#C7A14F]/60 px-7 py-3 text-sm font-bold uppercase tracking-[0.22em] text-[#E7C77A] transition hover:bg-[#C7A14F] hover:text-[#06162D]"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}