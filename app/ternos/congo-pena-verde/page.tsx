import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function CongoPenaVerdePage() {
  return (
    <>
      <Header />

      <main className="bg-[#F8F7F3] text-[#10233F]">
        <section className="relative min-h-[80vh] overflow-hidden">
          <Image
            src="/images/hero/hero.png"
            alt="Congo Pena Verde da Congada de Estrela do Indaiá"
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
                  Congo Pena Verde
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-9 text-white/90">
                  Terno feminino da Congada de Estrela do Indaiá, ligado à
                  luta das mulheres por espaço na Festa do Rosário e à memória
                  de suas capitãs e famílias.
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
                Uma história de luta, fé e permanência
              </h2>

              <div className="mt-10 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  A história do Congo Pena Verde faz parte da luta das mulheres
                  estrelenses para conquistar espaço na Congada de Estrela do
                  Indaiá. Assim como ocorreu com outros ternos femininos, sua
                  trajetória revela tensões, desafios e a busca pelo direito de
                  participar de forma legítima da cultura religiosa do povo.
                </p>

                <p>
                  O terno foi fundado em 1988 por Maria Helena Pereira. A
                  criação foi aprovada em 6 de maio de 1989, na mesma data da
                  Grita Dourada, embora suas atividades já tivessem começado no
                  ano anterior sob a liderança da própria Maria Helena.
                </p>

                <p>
                  Nos registros da Congada, o surgimento do Pena Verde aparece
                  relacionado ao desejo de “puxar coroa”, função que ligava o
                  grupo aos rituais de louvor e visita aos festeiros. A
                  trajetória do terno também foi marcada pela ampliação da
                  presença feminina em espaços antes pouco acessíveis às
                  mulheres.
                </p>

                <p>
                  O nome do terno tem como símbolo uma pena verde. A memória do
                  grupo associa essa escolha ao desejo de Maria Helena Pereira
                  de utilizar uma pena semelhante à do terno de Neimar, Geraldo
                  Antonio da Silva, capitão do Congo Real Penacho. A partir
                  dessa referência, a fundadora e sua família deram ao novo
                  grupo o nome Pena Verde.
                </p>

                <p>
                  Após a mudança de Maria Helena e sua família para Divinópolis,
                  em Minas Gerais, o terno ficou parado por um período. Depois,
                  foi reiniciado e passou por novas lideranças, mantendo viva a
                  memória de sua fundadora e a continuidade da participação das
                  mulheres na Festa do Rosário.
                </p>

                <p>
                  Mais do que uma formação musical e ritual, o Congo Pena Verde
                  representa a permanência de famílias, capitãs, suplentes,
                  dançantes e devotos que sustentaram a tradição mesmo diante de
                  interrupções, mudanças de farda e reorganizações internas.
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
                Marcos do Congo Pena Verde
              </h2>
            </div>

            <div className="mx-auto mt-16 max-w-4xl space-y-8">
              {[
                [
                  "1988",
                  "Fundação do terno por Maria Helena Pereira, liderança associada ao início da trajetória do Congo Pena Verde.",
                ],
                [
                  "6 de maio de 1989",
                  "A criação do terno foi aprovada na mesma data da Grita Dourada, embora suas atividades já tivessem começado no ano anterior.",
                ],
                [
                  "1999",
                  "Depois de ficar parado por um período, o terno foi reiniciado e passou por reorganizações em sua condução.",
                ],
                [
                  "2000",
                  "O terno passou a se chamar Congo Pena Verde e fortaleceu o desejo de puxar coroas durante a Festa do Rosário.",
                ],
                [
                  "Continuidade",
                  "A história do terno seguiu com novas capitãs, suplentes e famílias responsáveis por manter viva sua presença na Congada.",
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
                Participação feminina
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
                Mulheres, tradição e reconhecimento
              </h2>

              <p className="mt-8 text-lg leading-9 text-white/85">
                A trajetória do Congo Pena Verde revela como os ternos femininos
                agravaram as discussões sobre gênero dentro da Festa do Rosário.
                Ao mesmo tempo, mostram como as mulheres sustentaram espaços de
                devoção, comando e pertencimento na Congada de Estrela do
                Indaiá.
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C7A14F]">
                Terno feminino
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                Uma presença que permanece
              </h3>

              <p className="mt-6 text-lg leading-9 text-white/85">
                O Pena Verde integra a história das mulheres que enfrentaram
                preconceitos, reorganizaram funções e abriram caminhos para que
                novas gerações participassem dos rituais da Congada com
                visibilidade e autoridade.
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
                1988
              </h3>
              <p className="mt-4 leading-8 text-gray-700">
                Ano de fundação do terno por Maria Helena Pereira, segundo o
                registro apresentado na história do Congo Pena Verde.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C7A14F]">
                Aprovação
              </p>
              <h3 className="mt-4 text-2xl font-bold text-[#1D3D73]">
                6 de maio de 1989
              </h3>
              <p className="mt-4 leading-8 text-gray-700">
                Data em que a criação do terno foi aprovada, junto à Grita
                Dourada, com atividades iniciadas no ano anterior.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C7A14F]">
                Símbolo
              </p>
              <h3 className="mt-4 text-2xl font-bold text-[#1D3D73]">
                Pena verde
              </h3>
              <p className="mt-4 leading-8 text-gray-700">
                Elemento associado ao nome do terno e à memória de sua criação
                no contexto da Congada estrelense.
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
                Cores, bandeira e transformação
              </h2>

              <div className="mt-8 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  Em sua história, o Congo Pena Verde vestia saia, blusa,
                  gravata borboleta, colete e chapéu verde. Com o passar do
                  tempo, foram realizadas modificações na farda, como a retirada
                  da saia, a adoção da calça e a troca do colete pela faixa,
                  mantendo a gravatinha borboleta, o lenço e o chapéu.
                </p>

                <p>
                  A bandeira do terno tem a função de guiar e proteger seus
                  componentes, pagar promessas e conduzir visitas às casas dos
                  festeiros e de outras famílias que precisam da presença do
                  grupo.
                </p>

                <p>
                  O terno também puxa coroas, cantando para Nossa Senhora do
                  Rosário, São Benedito e Santa Efigênia. Essa função reforça o
                  vínculo do Pena Verde com os rituais de fé e devoção que
                  estruturam a Festa do Rosário.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container-custom">
            <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-xl md:p-14">
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
                Música e louvor
              </span>

              <h2 className="mt-5 text-4xl font-bold text-[#1D3D73] md:text-5xl">
                Cantos para visitar, louvar e puxar coroas
              </h2>

              <div className="mt-8 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  O Congo Pena Verde canta para louvar Nossa Senhora, visitar
                  os festeiros, puxar coroas e acompanhar os rituais da festa.
                  Seu repertório reúne cantos antigos e composições criadas pela
                  própria capitã, formando aproximadamente quarenta músicas.
                </p>

                <p>
                  Entre os instrumentos utilizados estão caixas, caixa de
                  guerra, surdo, apito e pandeiros. A musicalidade do terno é
                  conduzida por seus capitães e suplentes, que orientam o ritmo
                  e a forma das apresentações.
                </p>

                <p>
                  O ritmo das danças é variado. Há músicas em tons mais lentos e
                  outras mais rápidas. Nos momentos de maior intensidade, os
                  instrumentos e os cantos em voz firme homenageiam a mãe do
                  céu, relembram a luta dos escravizados e afirmam a devoção que
                  move o grupo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="container-custom">
            <div className="mx-auto max-w-5xl rounded-3xl bg-[#F8F7F3] p-8 shadow-xl md:p-14">
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
                Capitãs e continuidade
              </span>

              <h2 className="mt-5 text-4xl font-bold text-[#1D3D73] md:text-5xl">
                Famílias que sustentam a memória do terno
              </h2>

              <div className="mt-8 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  A história do Pena Verde registra diferentes capitãs e
                  lideranças. Entre os nomes citados estão Maria Helena Pereira,
                  Cícera Aparecida Borges, Lunamar Rosa Silva, Fabiana de
                  Farias, Clóvis da Costa Santos e Claudenice Maria Silva Rocha
                  Costa.
                </p>

                <p>
                  O registro também menciona Glaudelirce Silva Rocha como
                  capitã atual e apresenta como suplentes Jucilene Silva Mendes
                  Teixeira, Andreza Ianqueline Silva Mendes de Lara e Valquíria
                  Lidiane Lourenço.
                </p>

                <p>
                  Essas lideranças preservam a continuidade do terno e mostram
                  como a Congada se mantém por meio de vínculos familiares,
                  transmissão de responsabilidades, organização coletiva e
                  compromisso com a Festa do Rosário.
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
                Um terno de fé, memória e resistência
              </h2>

              <div className="mt-8 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  O Congo Pena Verde ocupa lugar importante na história recente
                  da Congada de Estrela do Indaiá. Sua memória reúne a luta das
                  mulheres, a força das famílias, os cantos de louvor e a
                  presença dos rituais de visita, proteção e coroação.
                </p>

                <p>
                  Ao permanecer na Festa do Rosário, o terno reafirma que a
                  tradição também se transforma. Suas fardas, seus instrumentos,
                  suas capitãs e sua bandeira registram uma história de fé,
                  reorganização e continuidade dentro da cultura congadeira
                  estrelense.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <Link
                href="/ternos/estrela-de-ouro"
                className="rounded-full border border-[#1D3D73] px-8 py-4 text-center font-bold text-[#1D3D73] transition hover:bg-[#1D3D73] hover:text-white"
              >
                Anterior: Estrela de Ouro
              </Link>

              <Link
                href="/ternos"
                className="rounded-full bg-[#C7A14F] px-8 py-4 text-center font-bold text-[#10233F] transition hover:brightness-95"
              >
                Voltar para Ternos
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
