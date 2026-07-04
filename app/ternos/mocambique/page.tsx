import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function MocambiquePage() {
  return (
    <>
      <Header />

      <main className="bg-[#F8F7F3] text-[#10233F]">
        <section className="relative min-h-[80vh] overflow-hidden">
          <Image
            src="/images/hero/hero.png"
            alt="Moçambique da Congada de Estrela do Indaiá"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06162D]/95 via-[#10233F]/85 to-transparent" />

          <div className="relative z-10 flex min-h-[80vh] items-center pt-28">
            <div className="container-custom">
              <div className="max-w-4xl text-white">
                <Link
                  href="/ternos"
                  className="inline-block text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]"
                >
                  Ternos da Congada
                </Link>

                <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
                  Moçambique
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-9 text-white/90">
                  Um dos ternos mais respeitados da Congada de Estrela do
                  Indaiá, ligado ao mito da imagem de Nossa Senhora do Rosário e
                  às funções centrais da Festa do Rosário.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container-custom">
            <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-xl md:p-14">
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
                História do terno
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-[#1D3D73] md:text-5xl">
                O Moçambique na tradição estrelense
              </h2>

              <div className="mt-10 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  Na Congada de Estrela do Indaiá, o Moçambique ocupa um lugar
                  de grande respeito. Sua história está ligada ao mito da imagem
                  de Nossa Senhora do Rosário encontrada em uma gruta. Conta-se
                  que várias tentativas foram feitas para levar a imagem até a
                  igreja, mas somente o Moçambique conseguiu realizar essa
                  missão. Por isso, sua importância dentro da Festa do Rosário
                  nasce diretamente dessa tradição.
                </p>

                <p>
                  A partir desse acontecimento, o Moçambique passou a exercer
                  algumas das funções mais importantes da festa. Cabe a ele
                  buscar e conduzir elementos sagrados e personagens centrais dos
                  rituais, como bordões, bordonetas, reis, rainhas, príncipes e
                  princesas do Rosário. Também participa do transporte da
                  bandeira do mastro e da imagem da santa nos dias de procissão.
                </p>

                <p>
                  O terno também é reconhecido como espaço de devoção e
                  promessa. Muitos participantes se juntam ao Moçambique para
                  pagar promessas ou pedir graças a Nossa Senhora do Rosário.
                  Por isso, é descrito como o terno que reúne mais componentes
                  todos os anos.
                </p>

                <p>
                  Uma de suas marcas mais fortes é a roupa branca. Diferente de
                  outros ternos, que mudam as cores das fardas ao longo dos
                  anos, o Moçambique mantém a vestimenta branca como símbolo de
                  sua tradição. A farda é formada por calça, blusa, saiote e
                  gorro ou boné branco. O saiote pode trazer fitas suaves,
                  muitas vezes em rosa e azul, associadas às cores de Nossa
                  Senhora.
                </p>

                <p>
                  O som do Moçambique também preserva características antigas. Os
                  congadeiros usam gungas presas aos tornozelos, produzindo um
                  som mais suave que os batuques de outros ternos. Junto delas
                  aparece o patogongo, instrumento tradicional ligado ao
                  Moçambique. O ritmo é mais lento e acompanha músicas e rezas
                  em forma de ladainhas, mantendo vivo o modo dos antigos.
                </p>

                <p>
                  Por sua antiguidade, por sua ligação com o mito da santa e por
                  suas funções religiosas, o Moçambique é considerado o terno
                  mais importante da cidade. Sua tradição é preservada com grande
                  cuidado, mantendo características que atravessam gerações e
                  representam a própria história da Festa do Rosário em Estrela
                  do Indaiá.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
                Papel na festa
              </span>

              <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                Funções do Moçambique
              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-700">
                O Moçambique exerce responsabilidades ligadas ao coração ritual
                da Festa do Rosário.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {[
                "Buscar e conduzir bordões e bordonetas.",
                "Acompanhar reis, rainhas, príncipes e princesas do Rosário.",
                "Transportar a bandeira do mastro.",
                "Conduzir a imagem da santa nos dias de procissão.",
                "Acolher pagadores de promessa.",
                "Acompanhar devotos que pedem ou agradecem graças.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-[#C7A14F]/30 bg-[#F8F7F3] p-8 shadow-md"
                >
                  <p className="text-lg leading-8 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#10233F] py-24 text-white">
          <div className="container-custom grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
                Identidade visual
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
                A força simbólica da roupa branca
              </h2>

              <p className="mt-8 text-lg leading-9 text-white/85">
                A vestimenta branca é uma das marcas mais reconhecidas do
                Moçambique. Ela expressa continuidade, respeito e ligação com
                Nossa Senhora do Rosário. Mesmo com o passar dos anos, o terno
                preserva essa característica como parte essencial de sua
                identidade.
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C7A14F]">
                Música e tradição
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                Um ritmo mais antigo e reverente
              </h3>

              <p className="mt-6 text-lg leading-9 text-white/85">
                As gungas, o patogongo e as ladainhas ajudam a preservar uma
                sonoridade própria. O ritmo mais lento diferencia o Moçambique
                dos ternos de batuque mais forte e mantém viva uma forma antiga
                de louvar.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container-custom">
            <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-xl md:p-14">
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
                Tradição preservada
              </span>

              <h2 className="mt-5 text-4xl font-bold text-[#1D3D73] md:text-5xl">
                O modo dos antigos
              </h2>

              <div className="mt-8 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  O Moçambique preserva uma forma de participação marcada pela
                  continuidade. Sua tradição não está apenas no que se vê, mas
                  também no modo como seus rituais são mantidos: no caminhar, no
                  som das gungas, nas ladainhas, na roupa branca e nas funções
                  que carrega dentro da festa.
                </p>

                <p>
                  Por isso, o terno representa mais do que uma ala da Congada.
                  Ele é uma memória viva da Festa do Rosário e da própria
                  história de Estrela do Indaiá, guardando uma ligação profunda
                  entre fé, promessa, devoção e tradição.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <Link
                href="/ternos"
                className="rounded-full border border-[#1D3D73] px-8 py-4 text-center font-bold text-[#1D3D73] transition hover:bg-[#1D3D73] hover:text-white"
              >
                Voltar para os ternos
              </Link>

              <Link
                href="/ternos/congo-catupe"
                className="rounded-full bg-[#C7A14F] px-8 py-4 text-center font-bold text-[#10233F] transition hover:brightness-95"
              >
                Próximo: Congo Catupé
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}