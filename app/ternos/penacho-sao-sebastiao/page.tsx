import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function PenachoSaoSebastiaoPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F8F7F3] text-[#10233F]">
        <section className="relative min-h-[80vh] overflow-hidden">
          <Image
            src="/images/hero/hero.png"
            alt="Penacho de São Sebastião da Congada de Estrela do Indaiá"
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
                  Penacho de São Sebastião
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-9 text-white/90">
                  Terno mais recente da Festa do Rosário de Estrela do Indaiá,
                  fundado em 2018 e marcado pela devoção a São Sebastião, pelo
                  símbolo das penas e pela busca de uma identidade própria na
                  Congada.
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
                O terno mais recente da festa
              </h2>

              <div className="mt-10 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  O Penacho de São Sebastião é registrado como o terno mais
                  recente da Festa do Rosário de Estrela do Indaiá. Sua criação
                  ocorreu em 1º de novembro de 2018, pouco depois de a festa já
                  ter sido inscrita no livro de registro do patrimônio cultural
                  da cidade, em 10 de agosto de 2018.
                </p>

                <p>
                  Por sua formação recente, o terno ainda não aparece em
                  algumas obras e registros anteriores sobre a Congada
                  estrelense. Sua história, portanto, começa a ser narrada a
                  partir das memórias de seus capitães fundadores e da presença
                  do grupo nas celebrações mais recentes da Festa do Rosário.
                </p>

                <p>
                  A iniciativa de formação do terno foi de Gilton Rodrigo da
                  Silva. Ao lado de Leandro Antunes Evangelista, ele aparece
                  como capitão fundador do Penacho de São Sebastião. Segundo a
                  narrativa registrada, o nome do terno une duas referências
                  importantes: o Penacho, ligado ao Congo Real, e São Sebastião,
                  protetor dos soldados.
                </p>

                <p>
                  A função atribuída ao terno é proteger, guardar e acompanhar
                  os santos. Por isso, o grupo realiza a guarda para os santos e
                  também para as demais guardas, assumindo um papel de zelo
                  dentro da festa.
                </p>

                <p>
                  Em sua trajetória inicial, o terno participou da Festa do
                  Rosário uma vez, no ano de 2019. A partir dessa participação,
                  passou a integrar o conjunto de expressões vivas da Congada,
                  mesmo em meio a debates sobre tradição, legitimidade e
                  identidade.
                </p>

                <p>
                  O surgimento do Penacho de São Sebastião também provocou
                  discussões internas sobre o uso do nome Penacho, sua relação
                  com o Congo Real Penacho e o lugar do novo terno dentro da
                  memória da festa. Essas disputas revelam que a Congada é uma
                  tradição viva, marcada por continuidade, conflitos, negociação
                  e reconhecimento coletivo.
                </p>

                <p>
                  Nesse processo, a Associação da Congada passou a atuar como
                  espaço de mediação. Ao reconhecer o terno registrado como
                  Penacho de São Sebastião, a entidade contribuiu para afirmar
                  sua presença própria na Congada de Estrela do Indaiá.
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
                Uma história em formação
              </h2>
            </div>

            <div className="mx-auto mt-16 max-w-4xl space-y-8">
              {[
                [
                  "10 de agosto de 2018",
                  "A Festa do Rosário de Estrela do Indaiá já havia sido inscrita no livro de registro do patrimônio cultural do município.",
                ],
                [
                  "1º de novembro de 2018",
                  "Fundação do Penacho de São Sebastião, terno mais recente da festa.",
                ],
                [
                  "Capitães fundadores",
                  "Gilton Rodrigo da Silva e Leandro Antunes Evangelista são registrados como capitães fundadores do terno.",
                ],
                [
                  "2019",
                  "O terno participou da Festa do Rosário, sendo registrado em concentração ao pé do mastro levantado na Igreja do Rosário.",
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
                Farda e símbolos
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
                O penacho, o vermelho e a proteção dos santos
              </h2>

              <p className="mt-8 text-lg leading-9 text-white/85">
                A principal vestimenta do terno é o capacete de penas, símbolo
                que remete ao cocar dos caciques guerreiros. A farda traz o
                vermelho como referência ao manto de São Sebastião, enquanto a
                bandeira representa os santos seguidos pelo grupo: Nossa Senhora
                do Rosário e São Sebastião.
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C7A14F]">
                Função ritual
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                Guardar e proteger
              </h3>

              <p className="mt-6 text-lg leading-9 text-white/85">
                A narrativa dos capitães associa o Penacho de São Sebastião à
                guarda dos santos e das demais guardas. Seu lugar na festa é
                marcado pelo sentido de proteção, acompanhamento e devoção.
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
                1º de novembro de 2018
              </h3>
              <p className="mt-4 leading-8 text-gray-700">
                Data registrada para a criação do Penacho de São Sebastião.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C7A14F]">
                Capitães
              </p>
              <h3 className="mt-4 text-2xl font-bold text-[#1D3D73]">
                Gilton Rodrigo da Silva e Leandro Antunes Evangelista
              </h3>
              <p className="mt-4 leading-8 text-gray-700">
                Nomes registrados como capitães fundadores do terno.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C7A14F]">
                Componentes
              </p>
              <h3 className="mt-4 text-2xl font-bold text-[#1D3D73]">
                Cerca de 60
              </h3>
              <p className="mt-4 leading-8 text-gray-700">
                Número médio de integrantes informado na narrativa do terno.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="container-custom">
            <div className="mx-auto max-w-5xl rounded-3xl bg-[#F8F7F3] p-8 shadow-xl md:p-14">
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
                Música e devoção
              </span>

              <h2 className="mt-5 text-4xl font-bold text-[#1D3D73] md:text-5xl">
                Cânticos de batalha, agradecimento e pedido de graças
              </h2>

              <div className="mt-8 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  As músicas do Penacho de São Sebastião são descritas como
                  cânticos de agradecimento pela libertação dos negros, cantos de
                  batalha, de sofrimento e de pedido de graças e permissão aos
                  reis, rainhas, príncipes e princesas.
                </p>

                <p>
                  O repertório reúne mais de cem canções. O ritmo é acelerado,
                  referido como batuque, e a formação instrumental conta com
                  sanfona, caixa, pandeiro, afoxé e triangular.
                </p>

                <p>
                  A musicalidade do terno reforça sua presença recente na festa,
                  mas também o aproxima das formas tradicionais de louvor,
                  memória e celebração da Congada.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container-custom">
            <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-xl md:p-14">
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
                Tradição em disputa
              </span>

              <h2 className="mt-5 text-4xl font-bold text-[#1D3D73] md:text-5xl">
                Identidade, memória e reconhecimento
              </h2>

              <div className="mt-8 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  A história do Penacho de São Sebastião evidencia que a
                  tradição não é apenas repetição do passado. Ela também é
                  construída por meio de conflitos, acordos e escolhas feitas
                  pelos próprios congadeiros.
                </p>

                <p>
                  No caso do terno, as discussões envolveram a relação com o
                  Congo Real Penacho, a possibilidade de uso do nome Penacho e a
                  necessidade de construir uma identidade própria dentro da
                  Congada estrelense.
                </p>

                <p>
                  Ao mesmo tempo, sua criação mostra a continuidade da festa:
                  novos grupos surgem, novas narrativas são incorporadas e a
                  Congada permanece como um patrimônio vivo, sustentado pela fé,
                  pela música, pela memória e pela participação da comunidade.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <Link
                href="/ternos/congo-pena-verde"
                className="rounded-full border border-[#1D3D73] px-8 py-4 text-center font-bold text-[#1D3D73] transition hover:bg-[#1D3D73] hover:text-white"
              >
                Anterior: Congo Pena Verde
              </Link>

              <Link
                href="/ternos"
                className="rounded-full bg-[#C7A14F] px-8 py-4 text-center font-bold text-[#10233F] transition hover:brightness-95"
              >
                Voltar aos ternos
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
