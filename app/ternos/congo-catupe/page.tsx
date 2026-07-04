import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function CongoCatupePage() {
  return (
    <>
      <Header />

      <main className="bg-[#F8F7F3] text-[#10233F]">
        <section className="relative min-h-[80vh] overflow-hidden">
          <Image
            src="/images/hero/hero.png"
            alt="Congo Catupé da Congada de Estrela do Indaiá"
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
                  Congo Catupé
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-9 text-white/90">
                  Segundo terno na hierarquia da Congada de Estrela do Indaiá,
                  o Congo Catupé faz parte dos ternos de linhagem e está ligado
                  ao mito da retirada da imagem de Nossa Senhora do Rosário.
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
                O Catupé na tradição da Congada
              </h2>

              <div className="mt-10 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  Na Congada de Estrela do Indaiá, o Congo Catupé aparece como
                  o segundo terno na hierarquia. Ele também faz parte dos ternos
                  ligados à tradição mais antiga da festa, ao lado do
                  Moçambique, do Penacho e do Contra-Dança.
                </p>

                <p>
                  Sua importância vem do mesmo mito que sustenta a posição do
                  Moçambique. Na tradição estrelense, a imagem de Nossa Senhora
                  do Rosário foi encontrada em uma gruta, e a retirada dessa
                  imagem só foi possível com a participação dos ternos ligados à
                  raiz do congado.
                </p>

                <p>
                  O Catupé ocupa um papel especial nesse acontecimento. Conta-se
                  que, no momento da retirada da imagem, o terno saiu da gruta
                  de fasto, ou seja, sem dar as costas para a santa. Esse gesto
                  de respeito é lembrado como uma atitude fundamental para que o
                  milagre acontecesse.
                </p>

                <p>
                  Por isso, o Catupé não é apenas um grupo dentro da festa. Ele
                  representa uma parte da memória sagrada da Congada. Sua
                  presença reforça a ligação entre os ternos de linhagem, o mito
                  de origem e a devoção a Nossa Senhora do Rosário.
                </p>

                <p>
                  Dentro da Festa do Rosário, o Catupé também aparece em
                  momentos importantes das procissões. A documentação da festa
                  registra o terno em cortejo e também conduzindo a imagem de
                  Santa Efigênia, uma das santas homenageadas pela Congada de
                  Estrela do Indaiá.
                </p>

                <p>
                  Assim, a história do Congo Catupé está ligada ao respeito, à
                  reverência e à continuidade da tradição. Ele guarda uma função
                  simbólica importante: lembrar que a força da Congada está na
                  união entre fé, gesto ritual e memória transmitida de geração
                  em geração.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
                Lugar na hierarquia
              </span>

              <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                Segundo terno da Congada
              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-700">
                O Catupé é apresentado como o segundo terno na hierarquia do
                congado de Estrela do Indaiá e faz parte da representação da
                tradição congadeira da cidade.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="rounded-3xl border border-[#C7A14F]/30 bg-[#F8F7F3] p-8 shadow-md">
                <h3 className="text-2xl font-bold text-[#1D3D73]">
                  Terno de linhagem
                </h3>
                <p className="mt-4 leading-8 text-gray-700">
                  Faz parte dos ternos ligados à tradição antiga da Congada.
                </p>
              </div>

              <div className="rounded-3xl border border-[#C7A14F]/30 bg-[#F8F7F3] p-8 shadow-md">
                <h3 className="text-2xl font-bold text-[#1D3D73]">
                  Mito da gruta
                </h3>
                <p className="mt-4 leading-8 text-gray-700">
                  Sua história está ligada ao mito da imagem de Nossa Senhora do
                  Rosário.
                </p>
              </div>

              <div className="rounded-3xl border border-[#C7A14F]/30 bg-[#F8F7F3] p-8 shadow-md">
                <h3 className="text-2xl font-bold text-[#1D3D73]">
                  Gesto de respeito
                </h3>
                <p className="mt-4 leading-8 text-gray-700">
                  Saiu da gruta de fasto, sem dar as costas para a santa.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#10233F] py-24 text-white">
          <div className="container-custom grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
                Papel ritual
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
                A reverência diante da santa
              </h2>

              <p className="mt-8 text-lg leading-9 text-white/85">
                O gesto de sair da gruta sem dar as costas para Nossa Senhora do
                Rosário é uma das marcas mais importantes da história do Catupé.
                Essa atitude expressa respeito, devoção e reconhecimento da
                presença sagrada da santa.
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C7A14F]">
                Procissão
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                A imagem de Santa Efigênia
              </h3>

              <p className="mt-6 text-lg leading-9 text-white/85">
                Nos registros da Festa do Rosário, o Catupé aparece conduzindo a
                imagem de Santa Efigênia durante a procissão, reforçando sua
                participação nos momentos centrais da celebração.
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
                Memória, fé e continuidade
              </h2>

              <div className="mt-8 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  A força do Congo Catupé está na ligação com a memória mais
                  antiga da Congada. Seu lugar na hierarquia não depende apenas
                  da ordem dos ternos, mas da função que ele representa dentro
                  do mito da santa e da formação da tradição estrelense.
                </p>

                <p>
                  Ao lado dos demais ternos de linhagem, o Catupé ajuda a
                  manter viva a raiz da Festa do Rosário. Sua história recorda
                  que cada gesto, cada cortejo e cada posição dentro da Congada
                  carregam um significado transmitido pela fé e pela memória do
                  povo congadeiro.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <Link
                href="/ternos/mocambique"
                className="rounded-full border border-[#1D3D73] px-8 py-4 text-center font-bold text-[#1D3D73] transition hover:bg-[#1D3D73] hover:text-white"
              >
                Anterior: Moçambique
              </Link>

              <Link
                href="/ternos/congo-real-penacho"
                className="rounded-full bg-[#C7A14F] px-8 py-4 text-center font-bold text-[#10233F] transition hover:brightness-95"
              >
                Próximo: Congo Real, Penacho e Penachinho
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}