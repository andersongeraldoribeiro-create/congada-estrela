import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function EstrelaDeOuroPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F8F7F3] text-[#10233F]">
        <section className="relative min-h-[80vh] overflow-hidden">
          <Image
            src="/images/hero/hero.png"
            alt="Estrela de Ouro da Congada de Estrela do Indaiá"
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
                  Estrela de Ouro
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-9 text-white/90">
                  Terno criado em 1988, reconhecido como uma conquista histórica
                  da participação feminina na Festa do Rosário de Estrela do
                  Indaiá.
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
                Uma conquista das mulheres na Congada
              </h2>

              <div className="mt-10 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  A criação do Estrela de Ouro representa um momento importante
                  na centenária Festa do Rosário de Estrela do Indaiá. Durante
                  muito tempo, a participação das mulheres nos altos postos da
                  Congada foi limitada, e os ternos ligados à condução da festa
                  eram marcados pela presença masculina.
                </p>

                <p>
                  No início da festa, a presença feminina era proibida nas alas
                  do congado. Essa proibição tinha forte relação com a criação
                  dos ternos chamados “daminhas”, formados inicialmente por
                  meninas e associados ao gosto do teatro grego antigo.
                </p>

                <p>
                  O Estrela de Ouro foi criado em 1988, em um período de
                  transformação social e política no Brasil. Aquele ano também
                  marcou a promulgação da Constituição de 1988, em 5 de outubro,
                  e a luta das mulheres por participação mais ampla nos espaços
                  da sociedade brasileira.
                </p>

                <p>
                  Em Estrela do Indaiá, a criação do primeiro terno feminino foi
                  uma iniciativa de Laura Veloso Ribeiro. Segundo o registro, ela
                  foi grande condutora desse movimento e enfrentou resistências
                  para conquistar e garantir os direitos de participação das
                  mulheres nos diversos espaços da Congada.
                </p>

                <p>
                  O terno foi fundado em 10 de setembro de 1988, por iniciativa
                  de Laura, que foi sua capitã fundadora. A primeira participação
                  aconteceu na Festa do Rosário daquele mesmo ano, realizada em
                  setembro.
                </p>

                <p>
                  A criação do Estrela de Ouro abriu caminho para que mulheres
                  assumissem presença ativa no congado, não apenas como
                  participantes, mas também como lideranças. Sua história
                  expressa devoção, coragem e permanência dentro da Festa do
                  Rosário.
                </p>

                <p>
                  Ao longo dos anos, o terno enfrentou mudanças, disputas e
                  dificuldades, mas manteve sua característica fundamental: ser
                  um terno feminino. Essa permanência faz do Estrela de Ouro um
                  símbolo da participação das mulheres na tradição congadeira de
                  Estrela do Indaiá.
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
                Marcos do Estrela de Ouro
              </h2>
            </div>

            <div className="mx-auto mt-16 max-w-4xl space-y-8">
              {[
                [
                  "10 de setembro de 1988",
                  "Fundação do Estrela de Ouro por iniciativa de Laura Veloso Ribeiro, sua capitã fundadora.",
                ],
                [
                  "1988",
                  "Primeira participação do terno na Festa do Rosário de Estrela do Indaiá.",
                ],
                [
                  "1994",
                  "O terno deixou de sair na festa, ficando sem atividade por alguns anos.",
                ],
                [
                  "1998",
                  "Surgiu uma proposta para que Roseli Ailton de Araújo assumisse a continuidade do trabalho iniciado por Laura.",
                ],
                [
                  "2003",
                  "Roseli passou o cargo de capitã para Gislaine Aparecida, mantendo o terno em atividade.",
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
                Devoção, presença e liderança
              </h2>

              <p className="mt-8 text-lg leading-9 text-white/85">
                O Estrela de Ouro tornou visível a presença das mulheres na
                Congada de Estrela do Indaiá. Sua criação não foi apenas o
                surgimento de mais um terno, mas a abertura de um espaço de
                participação, comando e reconhecimento feminino dentro da Festa
                do Rosário.
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C7A14F]">
                Terno feminino
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                Um símbolo de permanência
              </h3>

              <p className="mt-6 text-lg leading-9 text-white/85">
                Mesmo diante de resistências e mudanças internas, o Estrela de
                Ouro preservou sua marca principal: ser um terno feminino. Sua
                trajetória registra a força das mulheres na manutenção da fé, da
                memória e da tradição congadeira.
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
                Ano de criação do Estrela de Ouro, terno feminino da Congada de
                Estrela do Indaiá.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C7A14F]">
                Capitã fundadora
              </p>
              <h3 className="mt-4 text-2xl font-bold text-[#1D3D73]">
                Laura Veloso Ribeiro
              </h3>
              <p className="mt-4 leading-8 text-gray-700">
                Nome associado à criação do terno e à luta pela participação das
                mulheres na Congada.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C7A14F]">
                Característica
              </p>
              <h3 className="mt-4 text-2xl font-bold text-[#1D3D73]">
                Terno feminino
              </h3>
              <p className="mt-4 leading-8 text-gray-700">
                Sua história está ligada à conquista de espaço, visibilidade e
                liderança das mulheres na Festa do Rosário.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="container-custom">
            <div className="mx-auto max-w-5xl rounded-3xl bg-[#F8F7F3] p-8 shadow-xl md:p-14">
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
                Símbolos e expressões
              </span>

              <h2 className="mt-5 text-4xl font-bold text-[#1D3D73] md:text-5xl">
                Fardas, bandeira e cantos
              </h2>

              <div className="mt-8 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  As características das fardas do Estrela de Ouro são o
                  brilho, a corte, o chamativo, transmitindo alegria. O terno é
                  descrito com cores fortes, ligadas à sua presença visual nas
                  ruas e nos cortejos da festa.
                </p>

                <p>
                  A bandeira do Estrela de Ouro tem azul e rosa como cores do
                  terno. Suas imagens remetem a Nossa Senhora do Rosário, Santa
                  Efigênia e São Benedito, santos que ocupam lugar central na
                  devoção da Congada.
                </p>

                <p>
                  Os cantos do Estrela de Ouro são sempre louvores a Nossa
                  Senhora, São Benedito e Santa Efigênia. São cantados em
                  corais, com vozes das próprias integrantes das alas. O terno
                  possui cantigas próprias, de autoria de suas participantes, e
                  também cantadas vindas de outras congadas.
                </p>

                <p>
                  Entre os instrumentos utilizados aparecem caixas, taróis,
                  sanfona e pandeiros, junto com trombinhos usados para dar
                  colorido sonoro às apresentações do terno.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container-custom">
            <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-xl md:p-14">
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
                Memória das capitãs
              </span>

              <h2 className="mt-5 text-4xl font-bold text-[#1D3D73] md:text-5xl">
                Lideranças e continuidade
              </h2>

              <div className="mt-8 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  A história do Estrela de Ouro registra a atuação de diferentes
                  lideranças. Depois de Laura Veloso Ribeiro, o terno passou por
                  momentos de interrupção e retomada, preservando a memória das
                  mulheres que assumiram sua continuidade.
                </p>

                <p>
                  Roseli Ailton de Araújo recebeu, em 1998, a proposta de
                  prosseguir com o trabalho iniciado por Laura. Em 2000, passou
                  a sair à frente do terno e, em 2003, transferiu o cargo de
                  capitã para Gislaine Aparecida.
                </p>

                <p>
                  A narrativa também registra a presença de outras mulheres na
                  condução do grupo, como Sara Fernanda Aparecida, Débora e
                  Viviane Aparecida Silva. Essas passagens mostram a continuidade
                  do terno como espaço de transmissão de responsabilidades,
                  devoção e pertencimento.
                </p>

                <p>
                  Em seus relatos, as capitãs destacam os desafios enfrentados
                  pelas mulheres no exercício de seus direitos de participação,
                  especialmente a dificuldade de conciliar os diversos papéis
                  sociais atribuídos a elas. Ainda assim, o Estrela de Ouro se
                  manteve como referência de luta e presença feminina na
                  Congada.
                </p>
              </div>
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
                Um terno de memória e conquista
              </h2>

              <div className="mt-8 space-y-7 text-lg leading-9 text-gray-700">
                <p>
                  O Estrela de Ouro ocupa lugar singular na Congada de Estrela do
                  Indaiá por reunir devoção, memória e afirmação da presença das
                  mulheres. Sua criação marcou uma mudança importante na forma de
                  participação feminina dentro da Festa do Rosário.
                </p>

                <p>
                  Mais do que um grupo de dança e música, o terno preserva a
                  história de mulheres que abriram caminho, enfrentaram limites e
                  sustentaram uma tradição que permanece viva nas ruas, nos
                  cantos, nas fardas, na bandeira e na fé do povo estrelense.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <Link
                href="/ternos/congo-sereno"
                className="rounded-full border border-[#1D3D73] px-8 py-4 text-center font-bold text-[#1D3D73] transition hover:bg-[#1D3D73] hover:text-white"
              >
                Anterior: Congo Sereno
              </Link>

              <Link
                href="/ternos/congo-pena-verde"
                className="rounded-full bg-[#C7A14F] px-8 py-4 text-center font-bold text-[#10233F] transition hover:brightness-95"
              >
                Próximo: Congo Pena Verde
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
