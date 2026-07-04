import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function CongoSerenoPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F8F7F3] text-[#10233F]">
        <section className="relative min-h-[80vh] overflow-hidden">
          <Image
            src="/images/hero/hero.png"
            alt="Congo Sereno da Congada de Estrela do Indaiá"
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
                  Congo Sereno
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-9 text-white/90">
                  Primeiro terno moderno da Congada de Estrela do Indaiá,
                  criado em 1986, trazendo novos ritmos, novos instrumentos e
                  uma participação marcante da juventude.
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
                O início dos ternos modernos
              </h2>

              <div className="mt-10 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  O Congo Sereno marca uma nova fase da Congada de Estrela do
                  Indaiá. Depois dos ternos tradicionais, ligados à linhagem
                  histórica da festa, surgiu a formação dos chamados ternos
                  modernos, que trouxeram novas cores, novos sons e uma forma
                  mais dinâmica de celebrar a devoção a Nossa Senhora do
                  Rosário.
                </p>

                <p>
                  Em Estrela do Indaiá, essa transformação começou em 1986, com
                  a criação do Congo Sereno. O terno foi a primeira iniciativa de
                  formação de um novo corte de congado na cidade, abrindo
                  caminho para uma renovação na Festa do Rosário.
                </p>

                <p>
                  Seu primeiro capitão foi José Hamilton de Faria. A partir de
                  sua criação, a festa passou a contar com um estilo musical mais
                  forte, uma bateria mais completa, instrumentos variados e uma
                  batida que, em alguns momentos, lembra uma escola de samba.
                </p>

                <p>
                  Com o Congo Sereno, teve início em Estrela do Indaiá um
                  congado mais dinâmico. A participação de muitos jovens deu ao
                  terno uma energia própria, misturando ritmos e transformando o
                  louvor a Nossa Senhora do Rosário em uma grande manifestação
                  de fé, alegria e movimento.
                </p>

                <p>
                  O surgimento dos ternos modernos não tomou o lugar dos ternos
                  tradicionais. Pelo contrário: reforçou a tradição religiosa da
                  cidade, ampliou a participação dos congadeiros e deu à Festa
                  do Rosário um espetáculo novo, mais colorido, mais animado e
                  marcado pela presença da juventude.
                </p>

                <p>
                  O Congo Sereno representa exatamente esse momento de
                  ampliação. Ele não rompe com a fé que sustenta a Congada, mas
                  apresenta uma maneira diferente de vivê-la. Seu ritmo mais
                  forte, sua bateria mais completa e sua energia coletiva
                  ajudaram a abrir espaço para outras formações modernas que
                  surgiriam depois.
                </p>

                <p>
                  Ao longo do tempo, o terno passou por diferentes capitães e
                  continuou participando da Festa do Rosário. Hoje, permanece
                  como uma das expressões dessa fase mais recente da Congada
                  estrelense, preservando o vínculo entre devoção, juventude,
                  música e tradição.
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
                Um marco de renovação
              </h2>
            </div>

            <div className="mx-auto mt-16 max-w-4xl space-y-8">
              {[
                [
                  "1986",
                  "Criação do Congo Sereno, primeira iniciativa de formação de um novo corte de congado em Estrela do Indaiá.",
                ],
                [
                  "Primeiro capitão",
                  "O primeiro capitão do terno foi José Hamilton de Faria.",
                ],
                [
                  "Novo estilo",
                  "O terno introduziu uma musicalidade mais forte, com bateria mais completa, instrumentos variados e batida próxima ao ritmo de escola de samba.",
                ],
                [
                  "Juventude",
                  "A formação do Congo Sereno marcou a presença de muitos jovens e deu início a um congado mais dinâmico na cidade.",
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
                Música e ritmo
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
                Uma batida mais forte
              </h2>

              <p className="mt-8 text-lg leading-9 text-white/85">
                O Congo Sereno foi o primeiro terno a introduzir na Congada de
                Estrela do Indaiá um estilo musical mais forte, com bateria mais
                completa e instrumentos variados. Essa mudança deu à festa uma
                sonoridade mais vibrante e abriu espaço para novas formas de
                louvar Nossa Senhora.
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C7A14F]">
                Terno moderno
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                Renovação sem romper com a fé
              </h3>

              <p className="mt-6 text-lg leading-9 text-white/85">
                Os ternos modernos trouxeram novos sons, novas cores e maior
                animação para a Festa do Rosário, mas sem substituir os ternos
                tradicionais. Eles reforçaram a tradição religiosa e ampliaram a
                participação dos congadeiros.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container-custom grid gap-10 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C7A14F]">
                Fundação
              </p>
              <h3 className="mt-4 text-2xl font-bold text-[#1D3D73]">1986</h3>
              <p className="mt-4 leading-8 text-gray-700">
                Ano em que surgiu o Congo Sereno, iniciando a formação dos
                ternos modernos na cidade.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C7A14F]">
                Primeiro capitão
              </p>
              <h3 className="mt-4 text-2xl font-bold text-[#1D3D73]">
                José Hamilton de Faria
              </h3>
              <p className="mt-4 leading-8 text-gray-700">
                Nome registrado como primeiro capitão do Congo Sereno.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C7A14F]">
                Característica
              </p>
              <h3 className="mt-4 text-2xl font-bold text-[#1D3D73]">
                Ritmo dinâmico
              </h3>
              <p className="mt-4 leading-8 text-gray-700">
                O terno trouxe mistura de ritmos, bateria forte e grande
                participação de jovens.
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
                Uma nova forma de celebrar
              </h2>

              <div className="mt-8 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  O Congo Sereno mostra que a tradição da Congada também se
                  fortalece pela renovação. Ao surgir em 1986, ele trouxe uma
                  linguagem mais vibrante para a Festa do Rosário, sem deixar de
                  lado a devoção que sustenta todos os ternos.
                </p>

                <p>
                  Sua história representa a entrada de novos ritmos, a força dos
                  jovens e a capacidade da Congada de Estrela do Indaiá de se
                  manter viva, acolhendo mudanças sem perder sua raiz religiosa.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <Link
                href="/ternos/contra-danca"
                className="rounded-full border border-[#1D3D73] px-8 py-4 text-center font-bold text-[#1D3D73] transition hover:bg-[#1D3D73] hover:text-white"
              >
                Anterior: Contra-Dança
              </Link>

              <Link
                href="/ternos/estrela-de-ouro"
                className="rounded-full bg-[#C7A14F] px-8 py-4 text-center font-bold text-[#10233F] transition hover:brightness-95"
              >
                Próximo: Estrela de Ouro
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}