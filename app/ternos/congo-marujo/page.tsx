import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function CongoMarujoPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F8F7F3] text-[#10233F]">
        <section className="relative min-h-[80vh] overflow-hidden">
          <Image
            src="/images/hero/hero.png"
            alt="Congo Marujo da Congada de Estrela do Indaiá"
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
                  Congo Marujo
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-9 text-white/90">
                  Terno da Festa do Rosário de Estrela do Indaiá fundado em
                  2004, ligado à guia de Moçambique, à memória dos negros
                  marítimos e ao louvor a Nossa Senhora do Rosário.
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
                Um terno de fé, tradição e superação
              </h2>

              <div className="mt-10 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  O Congo Marujo é um dos ternos que integram a Festa do Rosário
                  de Estrela do Indaiá. De acordo com os trabalhos que trataram
                  da festa, sua cantiga tem relação com a guia de Moçambique, e
                  sua trajetória foi registrada como parte da história recente da
                  Congada estrelense.
                </p>

                <p>
                  O terno foi fundado em 2004 por Jânio Antunes Cardoso,
                  dançante vindo de outro terno. Segundo o relato, o Congo
                  Marujo nasceu em 2004, tem por vestimentas calça, camisa, lenço
                  e chapéu no lugar do tradicional saiote, e seus dançantes usam
                  um lenço amarrado ao pescoço.
                </p>

                <p>
                  A história do grupo também registra que sua bateria não possui
                  diferenças harmônicas em relação aos demais ternos. A formação
                  do Congo Marujo, portanto, aproxima-se da estrutura musical e
                  ritual da Congada de Estrela do Indaiá, ao mesmo tempo em que
                  preserva elementos próprios de sua identidade.
                </p>

                <p>
                  A narrativa do terno destaca uma história de fé, tradição,
                  superação e louvor a Nossa Senhora. Desde os primeiros relatos
                  da história de Nossa Senhora do Rosário, os congadeiros cantam
                  sua fé por meio de canções que representam o nome Congo Marujo,
                  a devoção e a permanência do Rosário.
                </p>

                <p>
                  O grupo também carrega a memória de momentos de interrupção e
                  retomada. Segundo o relato apresentado, o Congo Marujo deixou de
                  sair entre 1996 e 2004 porque o capitão da época faleceu e não
                  deixou sucessor. Em 2004, Jânio Antunes Cardoso assumiu a
                  continuidade do terno, que voltou a compor a festa.
                </p>

                <p>
                  Mais do que uma guarda recente, o Congo Marujo representa a
                  reorganização de uma memória ritual. Sua presença na festa
                  reúne canto, dança, farda, instrumentos e devoção em torno da
                  proteção de Nossa Senhora do Rosário, São Benedito e Santa
                  Efigênia.
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
                Marcos do Congo Marujo
              </h2>
            </div>

            <div className="mx-auto mt-16 max-w-4xl space-y-8">
              {[
                [
                  "1996 a 2004",
                  "Período em que o Congo Marujo deixou de sair, após o falecimento do capitão, sem que houvesse sucessor imediato.",
                ],
                [
                  "2004",
                  "Fundação e retomada do terno por Jânio Antunes Cardoso, mantendo viva a presença do Congo Marujo na Festa do Rosário.",
                ],
                [
                  "2004 em diante",
                  "O terno passou a sair com farda composta por calça, camisa, lenço e chapéu, preservando sua identidade própria dentro da Congada.",
                ],
                [
                  
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
                Sentido ritual
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
                A guia de Moçambique nos cortejos
              </h2>

              <p className="mt-8 text-lg leading-9 text-white/85">
                Além de louvar Nossa Senhora, o Congo Marujo tem como função
                muito especial fazer a guia de Moçambique em todos os cortejos de
                procissões, levando o andor de Nossa Senhora do Rosário e também
                acompanhando reis, rainhas, príncipes e princesas.
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C7A14F]">
                Nome e memória
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                Uma homenagem aos negros marítimos
              </h3>

              <p className="mt-6 text-lg leading-9 text-white/85">
                O termo Marujo remete aos negros marítimos. Na narrativa do
                terno, essa memória aparece unida à fé católica, à religiosidade
                africana e ao compromisso de manter viva a tradição do Rosário.
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
              <h3 className="mt-4 text-2xl font-bold text-[#1D3D73]">
                2004
              </h3>
              <p className="mt-4 leading-8 text-gray-700">
                Ano em que Jânio Antunes Cardoso fundou o Congo Marujo em
                Estrela do Indaiá.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C7A14F]">
                Componentes
              </p>
              <h3 className="mt-4 text-2xl font-bold text-[#1D3D73]">
                25 a 35
              </h3>
              <p className="mt-4 leading-8 text-gray-700">
                Quantidade aproximada de dançantes do Congo Marujo, segundo o
                registro apresentado sobre o terno.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C7A14F]">
                Repertório
              </p>
              <h3 className="mt-4 text-2xl font-bold text-[#1D3D73]">
                5 músicas
              </h3>
              <p className="mt-4 leading-8 text-gray-700">
                O Congo Marujo possui cinco músicas mais cantadas, entre canções
                autorais e cantadas vindas de outras congadas.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="container-custom">
            <div className="mx-auto max-w-5xl rounded-3xl bg-[#F8F7F3] p-8 shadow-xl md:p-14">
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
                Fardas e símbolos
              </span>

              <h2 className="mt-5 text-4xl font-bold text-[#1D3D73] md:text-5xl">
                Calça, camisa, lenço e chapéu
              </h2>

              <div className="mt-8 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  Em Estrela do Indaiá, o Congo Marujo manteve o mesmo estilo das
                  fardas dos demais ternos: calça, camisa, lenço e chapéu,
                  abrindo mão do saiote presente nos ternos de linhagem e
                  acrescentando um lenço amarrado ao pescoço.
                </p>

                <p>
                  De acordo com a narrativa do capitão Neimar Fabiano Nunes da
                  Silva, a farda do Congo Marujo é composta pelas cores branco e
                  azul. O quepe dá características ao nome Marujo, e a bandeira
                  tem como característica os tons branco, azul e rosa,
                  representando os santos de devoção do grupo.
                </p>

                <p>
                  Nossa Senhora do Rosário, Santa Efigênia e São Benedito estão
                  sempre presentes nas vestes do Congo Marujo. Nas cores, nos
                  emblemas e na bandeira, a farda também afirma o lugar da fé no
                  cotidiano da guarda.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container-custom">
            <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-xl md:p-14">
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
                Música e instrumentos
              </span>

              <h2 className="mt-5 text-4xl font-bold text-[#1D3D73] md:text-5xl">
                Cantos de louvor, batida e cortejo
              </h2>

              <div className="mt-8 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  As músicas do Congo Marujo são sempre em louvor a Nossa
                  Senhora, São Benedito e Santa Efigênia. Elas são cantadas em
                  corais, com vozes dos próprios integrantes das alas.
                </p>

                <p>
                  O terno utiliza instrumentos de percussão, como caixas,
                  taróis, sanfona e pandeiros, além de tamborinhos para ditar os
                  ritmos de seus toques.
                </p>

                <p>
                  Segundo o relato, algumas músicas são de própria autoria e
                  outras são cantadas vindas de outras congadas. Esse repertório
                  reforça o vínculo do Congo Marujo com a tradição compartilhada
                  entre os ternos e, ao mesmo tempo, com a memória particular de
                  seus capitães e componentes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="container-custom">
            <div className="mx-auto max-w-5xl rounded-3xl bg-[#F8F7F3] p-8 shadow-xl md:p-14">
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
                Capitães e continuidade
              </span>

              <h2 className="mt-5 text-4xl font-bold text-[#1D3D73] md:text-5xl">
                Lideranças que mantêm a guarda em movimento
              </h2>

              <div className="mt-8 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  A história do Congo Marujo registra como primeiros capitães
                  Marciano Pereira José, Ediardo, Maciel, Welinton, Ildemar,
                  Paulo Sérgio, Paulo José, Edicaros e Ronilson Vinícius. O
                  relato também menciona capitães que seguiram na condução do
                  terno ao longo do tempo.
                </p>

                <p>
                  Entre os nomes registrados estão Jânio Antunes Cardoso,
                  Neimar Fabiano Nunes da Silva e Valdirlei. Também são citados
                  Fernando Eustáquio Silveira, conhecido como Capitão Mor, Amélia
                  de Fátima Gonçalo e Sandro Marcos Camargos.
                </p>

                <p>
                  O cargo de capitão do Congo Marujo é visto como uma função de
                  responsabilidade, marcada pela integração entre pessoas mais
                  velhas e mais jovens. A guarda reúne adolescentes, adultos e
                  participantes entre 35 e 50 anos.
                </p>
              </div>
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
                Uma guarda jovem com raízes antigas
              </h2>

              <div className="mt-8 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  Embora recente na formação registrada em Estrela do Indaiá, o
                  Congo Marujo carrega símbolos que remetem a tradições mais
                  antigas da Congada. Sua memória reúne a guia de Moçambique, os
                  negros marítimos, os cantos de louvor e o compromisso de
                  manter viva a Festa do Rosário.
                </p>

                <p>
                  A continuidade do terno depende da transmissão entre gerações,
                  da participação dos dançantes e da preservação dos rituais que
                  unem fé, música, movimento e devoção. Assim, o Congo Marujo se
                  afirma como parte da história cultural e religiosa de Estrela
                  do Indaiá.
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
