import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function CongoRealPenachoPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F8F7F3] text-[#10233F]">
        <section className="relative min-h-[80vh] overflow-hidden">
          <Image
            src="/images/hero/hero.png"
            alt="Congo Real Penacho da Congada de Estrela do Indaiá"
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
                  Congo Real Penacho
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-9 text-white/90">
                  Terno de linhagem da Congada de Estrela do Indaiá, marcado
                  pela força guerreira, pelo combate ritual e pela função de
                  proteção da imagem de Nossa Senhora do Rosário.
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
                Guerreiros do Rosário
              </h2>

              <div className="mt-10 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  Entre os ternos de linhagem da Congada de Estrela do Indaiá,
                  o Congo Real Penacho se destaca por seu estilo mais agitado,
                  sua dança vibrante e sua música mais intensa em comparação com
                  o Moçambique e o Congo Catupé.
                </p>

                <p>
                  Sua história está ligada ao mito da retirada da imagem de
                  Nossa Senhora do Rosário da gruta. Dentro dessa tradição, o
                  Congo Real Penacho aparece como o terno que fez a segurança da
                  imagem durante o trajeto até a igreja, usando armas simbólicas,
                  como espadas e facões.
                </p>

                <p>
                  Por causa dessa função, seus dançantes são reconhecidos como
                  soldados de Nossa Senhora. O terno ocupa o terceiro lugar na
                  hierarquia tradicional e é lembrado como o pé da coroa,
                  guardando a imagem, os santos de devoção e os próprios
                  congadeiros.
                </p>

                <p>
                  A marca mais forte do Congo Real Penacho é o combate. Suas
                  coreografias dramatizam confrontos cuidadosamente preparados,
                  reafirmando a origem guerreira do terno. O combate carrega
                  dois sentidos principais: a luta entre batizados e pagãos e a
                  memória da libertação dos escravizados.
                </p>

                <p>
                  Na representação da luta religiosa, os batizados vencem os
                  pagãos, mostrando a força do poder de Deus. Na representação
                  da abolição, o combate recorda a resistência contra aqueles
                  que não aceitaram a libertação dos negros. Assim, a dança do
                  Penacho transforma a memória da fé e da liberdade em movimento.
                </p>

                <p>
                  O Congo Real Penacho também é reconhecido por sua alegria e
                  animação. Entre os ternos tradicionais, é um dos mais
                  populares da cidade, justamente por unir devoção, música,
                  movimento, dramatização e força simbólica.
                </p>

                <p>
                  Em 1982, diante do grande número de crianças no terno, foi
                  criado o Penachinho. A ideia era permitir que os meninos,
                  vestidos de forma semelhante aos adultos, participassem com
                  passos mais simples e acompanhassem melhor a festa.
                </p>

                <p>
                  Com o passar do tempo e a diminuição do número de crianças, o
                  Penachinho voltou a ser incorporado ao Penacho, com o cuidado
                  de um capitão mais jovem para acompanhar os pequenos. Mesmo
                  assim, sua criação permanece como parte importante da história
                  do terno.
                </p>

                <p>
                  Hoje, o Congo Real Penacho também conta com a presença de
                  mulheres. Elas ainda aparecem em menor número e se diferenciam
                  dos homens pelo uso de cocar, compondo a representação das
                  índias brasileiras.
                </p>

                <p>
                  Assim, o Congo Real Penacho permanece como um dos ternos mais
                  tradicionais de Estrela do Indaiá. Sua força está na
                  continuidade da tradição, na transmissão entre gerações e na
                  permanência de uma identidade marcada pela proteção, pelo
                  combate e pela devoção.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
                Papel na hierarquia
              </span>

              <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                O terceiro terno tradicional
              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-700">
                Na hierarquia da Congada, o Congo Real Penacho aparece após o
                Moçambique e o Congo Catupé, ocupando lugar de proteção e força
                guerreira dentro da tradição do Rosário.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="rounded-3xl border border-[#C7A14F]/30 bg-[#F8F7F3] p-8 shadow-md">
                <h3 className="text-2xl font-bold text-[#1D3D73]">
                  Soldados da santa
                </h3>
                <p className="mt-4 leading-8 text-gray-700">
                  Protegem a imagem de Nossa Senhora do Rosário e os
                  congadeiros.
                </p>
              </div>

              <div className="rounded-3xl border border-[#C7A14F]/30 bg-[#F8F7F3] p-8 shadow-md">
                <h3 className="text-2xl font-bold text-[#1D3D73]">
                  Pé da coroa
                </h3>
                <p className="mt-4 leading-8 text-gray-700">
                  Sua posição está ligada à guarda da imagem no trajeto até a
                  igreja.
                </p>
              </div>

              <div className="rounded-3xl border border-[#C7A14F]/30 bg-[#F8F7F3] p-8 shadow-md">
                <h3 className="text-2xl font-bold text-[#1D3D73]">
                  Combate ritual
                </h3>
                <p className="mt-4 leading-8 text-gray-700">
                  A dança dramatiza confrontos de fé, resistência e liberdade.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#10233F] py-24 text-white">
          <div className="container-custom grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
                O combate
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
                Dança, memória e luta
              </h2>

              <p className="mt-8 text-lg leading-9 text-white/85">
                O combate é uma das expressões mais marcantes do Congo Real
                Penacho. Com espadas e facões simbólicos, o terno encena lutas
                que lembram tanto a disputa entre batizados e pagãos quanto a
                luta pela libertação dos escravizados.
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C7A14F]">
                Penachinho
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                A participação das crianças
              </h3>

              <p className="mt-6 text-lg leading-9 text-white/85">
                Criado em 1982, o Penachinho surgiu para que as crianças do
                terno pudessem participar melhor da festa, com passos mais
                simples e vestimenta semelhante à dos adultos.
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
                Alegria, proteção e continuidade
              </h2>

              <div className="mt-8 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  O Congo Real Penacho une a solenidade da devoção com a energia
                  da dança guerreira. Sua presença na festa lembra que a Congada
                  também é feita de movimento, dramatização e coragem.
                </p>

                <p>
                  Ao lado do Moçambique e do Catupé, o Penacho forma a linha
                  tradicional da Congada estrelense. Sua história permanece viva
                  na memória do combate, na participação das crianças, na
                  presença das mulheres e na missão simbólica de proteger a fé
                  do Rosário.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <Link
                href="/ternos/congo-catupe"
                className="rounded-full border border-[#1D3D73] px-8 py-4 text-center font-bold text-[#1D3D73] transition hover:bg-[#1D3D73] hover:text-white"
              >
                Anterior: Congo Catupé
              </Link>

              <Link
                href="/ternos/contra-danca"
                className="rounded-full bg-[#C7A14F] px-8 py-4 text-center font-bold text-[#10233F] transition hover:brightness-95"
              >
                Próximo: Contra-Dança
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}