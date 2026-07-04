import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function ContraDancaPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F8F7F3] text-[#10233F]">
        <section className="relative min-h-[80vh] overflow-hidden">
          <Image
            src="/images/hero/hero.png"
            alt="Contra-Dança da Congada de Estrela do Indaiá"
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
                  Contra-Dança
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-9 text-white/90">
                  Terno tradicional da Congada de Estrela do Indaiá, conhecido
                  pela dança, pela alegria, pelas daminhas, pelo trança-fitas e
                  por sua ligação com o mito da imagem de Nossa Senhora do
                  Rosário.
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
                O terno das daminhas
              </h2>

              <div className="mt-10 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  O Contra-Dança é um dos ternos tradicionais da Congada de
                  Estrela do Indaiá. Embora tenha sido o terceiro terno fundado
                  na cidade, em 1920, ele ocupa o quarto lugar na hierarquia da
                  festa, vindo após o Moçambique, o Congo Catupé e o Congo Real
                  Penacho.
                </p>

                <p>
                  Sua posição na procissão está ligada ao papel que desempenha
                  dentro do mito de origem da Festa do Rosário. Na tradição
                  preservada pelos congadeiros, o Contra-Dança representa as
                  crianças escravizadas vindas de Angola, lembradas como as
                  primeiras a encontrar a imagem de Nossa Senhora do Rosário na
                  gruta.
                </p>

                <p>
                  Como eram crianças, não tinham força para retirar a imagem da
                  santa. A tradição conta que elas usaram brincadeiras, danças,
                  disfarces e alegria para distrair os guardas que protegiam a
                  imagem. Assim, abriram caminho para que o Moçambique pudesse
                  retirar Nossa Senhora do Rosário da gruta e levá-la até a
                  igreja.
                </p>

                <p>
                  Por causa dessa função, o Contra-Dança não conduz as imagens
                  dos santos durante a procissão. Sua missão é anunciar a boa
                  notícia da descoberta da santa e abrir caminho para os demais
                  ternos. Por isso, segue à frente do cortejo, guiando a
                  procissão e mantendo viva a lembrança desse episódio da
                  tradição estrelense.
                </p>

                <p>
                  O nome Contra-Dança faz referência a uma antiga dança popular
                  afro-luso-brasileira, formada por doze pares de homens, em que
                  um integrante de cada dupla se vestia de mulher. Essa tradição
                  também é associada aos Doze Pares de França, ligados às
                  histórias de Carlos Magno. Em Estrela do Indaiá, porém, a
                  explicação mais forte está ligada ao mito da aparição de Nossa
                  Senhora do Rosário e à religiosidade africana.
                </p>

                <p>
                  O terno foi fundado em 1928 por Dico Larino, seu primeiro
                  capitão. Ao longo dos anos, a tradição foi conduzida por
                  diversos capitães, entre eles Luiz do Dico, Geraldo do Dico,
                  Pedro Morcego, João Marcos, Luís Maciel, Welinton, Ildemar,
                  Paulo Sérgio, Paulo José, Edicarlos, Ronilson, Vinícius e,
                  atualmente, Guilherme Ubiratan.
                </p>

                <p>
                  Diferente de outros ternos, o Contra-Dança não possui cânticos
                  próprios. Sua força está principalmente na dança. A
                  apresentação mistura elementos de quadrilha, passos
                  característicos do próprio terno e o tradicional trança-fitas,
                  uma das manifestações mais conhecidas da Congada de Estrela do
                  Indaiá.
                </p>

                <p>
                  Os instrumentos utilizados pelo grupo são sanfona, caixas,
                  pandeiro e cuíca, responsáveis por acompanhar a coreografia e
                  dar ritmo à apresentação. O terno também conta com integrantes
                  vestidos de palhaço, cuja função é proteger e fazer a guarda
                  do grupo durante a festa.
                </p>

                <p>
                  A vestimenta mantém características próprias. Os homens usam
                  chapéu branco, camisa, calça e saiote. As meninas vestem
                  vestidos, e os meninos utilizam roupas semelhantes às dos
                  adultos. A bandeira do terno é confeccionada em tecido branco
                  e traz as imagens de Nossa Senhora do Rosário, São Benedito e
                  Santa Efigênia.
                </p>

                <p>
                  Mesmo com o passar das décadas, o Contra-Dança nunca deixou de
                  participar da Festa do Rosário. Atualmente, reúne cerca de 50
                  integrantes e segue preservando uma tradição iniciada em 1928.
                  Mais do que um grupo de dança, o Contra-Dança representa a
                  alegria, a criatividade e a esperança presentes no mito de
                  origem da Congada de Estrela do Indaiá.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
                Linha histórica
              </span>

              <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                De 1928 até hoje
              </h2>
            </div>

            <div className="mx-auto mt-16 max-w-4xl space-y-8">
              {[
                [
                  "1928",
                  "Fundação do Contra-Dança por Dico Larino, primeiro capitão do terno.",
                ],
                [
                  "Tradição antiga",
                  "O terno passa a representar as crianças escravizadas vindas de Angola no mito da imagem de Nossa Senhora do Rosário.",
                ],
                [
                  "Procissões",
                  "Por anunciar a descoberta da santa, o Contra-Dança abre caminho e guia o cortejo.",
                ],
                [
                  "Atualidade",
                  "O terno permanece ativo, com cerca de 50 integrantes, tendo Guilherme Ubiratan como capitão atual.",
                ],
              ].map(([ano, texto]) => (
                <div
                  key={ano}
                  className="rounded-3xl border-l-8 border-[#C7A14F] bg-[#F8F7F3] p-8 shadow-md"
                >
                  <h3 className="text-2xl font-bold text-[#1D3D73]">{ano}</h3>
                  <p className="mt-3 text-lg leading-8 text-gray-700">
                    {texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#10233F] py-24 text-white">
          <div className="container-custom grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
                Dança e apresentação
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
                Quadrilha, passos próprios e trança-fitas
              </h2>

              <p className="mt-8 text-lg leading-9 text-white/85">
                A identidade do Contra-Dança está na coreografia. Sem cânticos
                próprios, o terno expressa sua tradição pelo movimento,
                misturando quadrilha, passos próprios e o trança-fitas, uma das
                apresentações mais marcantes da festa.
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C7A14F]">
                Instrumentos
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                O ritmo da apresentação
              </h3>

              <p className="mt-6 text-lg leading-9 text-white/85">
                A sanfona, as caixas, o pandeiro e a cuíca acompanham a dança e
                ajudam a manter o ritmo alegre e característico do terno durante
                a Festa do Rosário.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container-custom grid gap-10 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C7A14F]">
                Função ritual
              </p>
              <h3 className="mt-4 text-2xl font-bold text-[#1D3D73]">
                Abrir o cortejo
              </h3>
              <p className="mt-4 leading-8 text-gray-700">
                O terno anuncia a descoberta da santa e guia a procissão,
                abrindo caminho para os demais ternos.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C7A14F]">
                Guarda do terno
              </p>
              <h3 className="mt-4 text-2xl font-bold text-[#1D3D73]">
                Palhaços
              </h3>
              <p className="mt-4 leading-8 text-gray-700">
                Integrantes vestidos de palhaço atuam na proteção e guarda do
                grupo durante a festa.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C7A14F]">
                Bandeira
              </p>
              <h3 className="mt-4 text-2xl font-bold text-[#1D3D73]">
                Santos de devoção
              </h3>
              <p className="mt-4 leading-8 text-gray-700">
                A bandeira branca traz Nossa Senhora do Rosário, São Benedito e
                Santa Efigênia.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="container-custom">
            <div className="mx-auto max-w-5xl rounded-3xl bg-[#F8F7F3] p-8 shadow-xl md:p-14">
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
                Tradição preservada
              </span>

              <h2 className="mt-5 text-4xl font-bold text-[#1D3D73] md:text-5xl">
                Alegria que abre caminho
              </h2>

              <div className="mt-8 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  O Contra-Dança preserva uma parte singular da Congada de
                  Estrela do Indaiá. Sua força não está no canto, mas no corpo
                  em movimento, na brincadeira, na dança e na missão de anunciar
                  a presença de Nossa Senhora do Rosário.
                </p>

                <p>
                  Desde 1928, o terno mantém viva uma memória marcada pela
                  infância, pela esperteza e pela alegria. É por meio dessa
                  expressão que o Contra-Dança continua abrindo os caminhos da
                  Festa do Rosário e reafirmando seu lugar entre os ternos
                  tradicionais da cidade.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <Link
                href="/ternos/congo-real-penacho"
                className="rounded-full border border-[#1D3D73] px-8 py-4 text-center font-bold text-[#1D3D73] transition hover:bg-[#1D3D73] hover:text-white"
              >
                Anterior: Congo Real Penacho
              </Link>

              <Link
                href="/ternos/congo-sereno"
                className="rounded-full bg-[#C7A14F] px-8 py-4 text-center font-bold text-[#10233F] transition hover:brightness-95"
              >
                Próximo: Congo Sereno
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}