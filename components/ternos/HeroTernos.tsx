import Image from "next/image";
import Link from "next/link";

const ternos = [
  {
    nome: "Moçambique",
    href: "/ternos/mocambique",
    imagem: "/images/ternos/mocambique/capa.jpg",
    resumo:
      "Terno de grande importância na Congada de Estrela do Indaiá, com presença marcante na estrutura ritual, musical e devocional da festa.",
  },
  {
    nome: "Congo Catupé",
    href: "/ternos/congo-catupe",
    imagem: "/images/ternos/congo-catupe/capa.jpg",
    resumo:
      "Terno tradicional da Congada de Estrela do Indaiá, integrante da formação atual da festa e guardião de memórias, cantos e devoções.",
  },
  {
    nome: "Congo Real Penacho",
    href: "/ternos/congo-real-penacho",
    imagem: "/images/ternos/congo-real-penacho/capa.jpg",
    resumo:
      "Terno marcado pela tradição do Penacho, com danças vibrantes, combates simbólicos e instrumentos como sanfona, caixa, violão, pandeiro e cavaquinho.",
  },
  {
    nome: "Contra-Dança",
    href: "/ternos/contra-danca",
    imagem: "/images/ternos/contra-danca/capa.jpg",
    resumo:
      "Fundado em 1920, o Contra-Dança possui função lúdica na festa, com coreografias, trança-fitas, movimentos próprios e forte presença cênica nos cortejos.",
  },
  {
    nome: "Congo Sereno",
    href: "/ternos/congo-sereno",
    imagem: "/images/ternos/congo-sereno/capa.jpg",
    resumo:
      "Criado em 1986 por iniciativa de José Hamilton de Faria, o Congo Sereno canta louvores a Nossa Senhora e utiliza instrumentos como caixa, tarol, pandeiro e sanfona.",
  },
  {
    nome: "Estrela-de-Ouro",
    href: "/ternos/estrela-de-ouro",
    imagem: "/images/ternos/estrela-de-ouro/capa.jpg",
    resumo:
      "Criado em 1988 por iniciativa de Laura Veloso Ribeiro, surgiu como terno feminino e representa um marco da participação das mulheres na Congada.",
  },
  {
    nome: "Congo Pena Verde",
    href: "/ternos/congo-pena-verde",
    imagem: "/images/ternos/congo-pena-verde/capa.jpg",
    resumo:
      "Fundado em 1988 por Maria Helena Pereira, tem o verde como referência simbólica e preserva cantos próprios dedicados aos santos da festa.",
  },
  {
    nome: "Congo Marujo",
    href: "/ternos/congo-marujo",
    imagem: "/images/ternos/congo-marujo/capa.jpg",
    resumo:
      "Fundado em 2004 por Jânio Antunes Cardoso, o Congo Marujo utiliza calça, camisa, lenço e chapéu, com instrumentos como caixa, pandeiro e tarol.",
  },
  {
    nome: "Penacho de São Sebastião",
    href: "/ternos/penacho-sao-sebastiao",
    imagem: "/images/ternos/penacho-sao-sebastiao/capa.jpg",
    resumo:
      "Terno da formação atual da Congada de Estrela do Indaiá, surgido de forma independente. Saiu pela primeira vez em 2019 e participa dos cortejos e celebrações da festa.",
  },
];

export default function HeroTernos() {
  return (
    <main className="bg-[#06162D]">
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <Image
          src="/images/hero/hero.png"
          alt="Ternos da Congada de Estrela do Indaiá"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#06162D]/95 via-[#06162D]/75 to-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#06162D] to-transparent" />

        <div className="relative z-10 container-custom pt-36">
          <div className="max-w-4xl">
            <span className="inline-block rounded-full border border-[#C7A14F] bg-black/35 px-5 py-2 text-sm font-bold uppercase tracking-[0.32em] text-[#E7C77A] backdrop-blur-sm">
              Ternos participantes
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-white drop-shadow-2xl md:text-7xl">
              Ternos da Congada
            </h1>

            <div className="mt-7 h-1 w-28 rounded-full bg-[#C7A14F]" />

            <p className="mt-8 max-w-3xl text-lg font-medium leading-9 text-white/90 drop-shadow-xl md:text-xl">
              Conheça os grupos que integram a Congada de Estrela do Indaiá e
              preservam cantos, danças, instrumentos, memórias e devoções da
              festa.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-[#06162D] py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(199,161,79,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_32%)]" />

        <div className="relative container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.32em] text-[#C7A14F]">
              Grupos da festa
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl">
              Conheça os 9 ternos participantes
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-white/75">
              Cada terno possui uma trajetória própria dentro da Festa de Nossa
              Senhora do Rosário, São Benedito e Santa Efigênia.
            </p>
          </div>

          <div className="mt-20 grid items-stretch gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
            {ternos.map((terno, index) => (
              <Link
                key={terno.href}
                href={terno.href}
                className="group relative flex h-full min-h-[560px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#10233F]/90 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-[#C7A14F]/80 hover:bg-[#10233F]"
              >
                <div className="relative h-72 w-full overflow-hidden bg-[#06162D]">
                  <Image
                    src={terno.imagem}
                    alt={terno.nome}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#06162D]/95 via-[#06162D]/30 to-black/10" />

                  <span className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#C7A14F]/80 bg-[#06162D]/85 text-lg font-bold text-[#E7C77A] shadow-lg backdrop-blur-sm">
                    {index + 1}
                  </span>

                  <span className="absolute bottom-6 left-6 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white/85 backdrop-blur-md">
                    Terno
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-8 md:p-9">
                  <h3 className="text-2xl font-bold leading-tight text-white transition group-hover:text-[#E7C77A] md:text-3xl">
                    {terno.nome}
                  </h3>

                  <div className="mt-6 h-[2px] w-20 rounded-full bg-[#C7A14F]" />

                  <p className="mt-7 flex-1 text-base leading-8 text-white/75">
                    {terno.resumo}
                  </p>

                  <span className="mt-10 inline-flex w-fit rounded-xl bg-[#C7A14F] px-6 py-3 font-bold text-[#06162D] shadow-lg transition group-hover:bg-[#E7C77A]">
                    Conhecer o terno →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
