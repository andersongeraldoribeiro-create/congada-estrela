import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#10233F] text-white">
      <div className="container-custom py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Logo */}
          <div>
            <Image
              src="/logo.png"
              alt="Congada de Estrela do Indaiá"
              width={90}
              height={90}
            />

            <h2 className="mt-5 text-2xl text-white">
              Congada de Estrela do Indaiá
            </h2>

            <p className="mt-2 text-[#C7A14F]">
              História • Fé • União
            </p>

            <p className="mt-6 leading-7 text-white/70">
              Portal oficial dedicado à preservação da história, da fé e da
              cultura da Festa de Nossa Senhora do Rosário, São Benedito e Santa
              Efigênia.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="mb-6 text-xl text-white">
              Navegação
            </h3>

            <ul className="space-y-4 text-white/70">
              <li>
                <Link href="/">Início</Link>
              </li>
              <li>
                <Link href="/historia">História</Link>
              </li>
              <li>
                <Link href="/ternos">Ternos</Link>
              </li>
              <li>
                <Link href="/galeria">Galeria</Link>
              </li>
              <li>
                <Link href="/contato">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="mb-6 text-xl text-white">
              Contato
            </h3>

            <p className="leading-7 text-white/70">
              Estrela do Indaiá • Minas Gerais
            </p>

            <a
              href="https://www.instagram.com/festadorosario_estrela/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center rounded-lg border border-[#C7A14F] px-5 py-3 font-semibold text-[#C7A14F] transition-all duration-300 hover:bg-[#C7A14F] hover:text-[#10233F]"
            >
              Instagram Oficial
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Congada de Estrela do Indaiá. Todos os
          direitos reservados.
        </div>
      </div>
    </footer>
  );
}