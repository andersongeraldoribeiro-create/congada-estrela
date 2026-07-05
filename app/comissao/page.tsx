import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

const conselhoDiretor = [
  ["Presidente", "Fernando Wallysson Sousa"],
  ["Vice-Presidente", "Larice Dalgisa Silva Camargos"],
  ["1º Secretário", "Madalena Paula Vieira Lopes"],
  ["2º Secretário", "Letícia de Cássia Oliveira Souza"],
  ["1º Tesoureiro", "Bruna Aparecida dos Santos Rodrigues"],
  ["2º Tesoureiro", "Thamiris Rafaela de Oliveira Souza"],
];

const conselhoFiscal = [
  "José Dácio de Freitas",
  "Vinicius Francisco de Oliveira",
  "Rafael Luciano de Souza",
  "Valdirene Aparecida da Silva",
  "Nathália Arianne Campos Salviano",
  "Áriston Alves",
];

export default function ComissaoPage() {
  return (
    <>
      <Header />

      <main className="bg-[#06162D] text-white">
        <section className="relative flex min-h-[78vh] items-center overflow-hidden">
          <Image
            src="/images/hero/hero.png"
            alt="Comissão Organizadora"
            fill
            priority
            quality={100}
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#06162D]/75 to-[#06162D]/55" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06162D] to-transparent" />

          <div className="relative z-10 container-custom pt-32">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full border border-[#C7A14F] bg-black/35 px-5 py-2 text-sm font-bold uppercase tracking-[0.32em] text-[#E7C77A] backdrop-blur-sm">
                Associação
              </span>

              <h1 className="mt-7 text-5xl font-bold leading-none text-white drop-shadow-2xl md:text-7xl">
                Comissão Organizadora
              </h1>

              <div className="mt-6 h-1 w-28 rounded-full bg-[#C7A14F]" />

              <p className="mt-7 max-w-3xl text-lg font-medium leading-9 text-white/85 drop-shadow-xl md:text-xl">
                Conheça os integrantes responsáveis pela organização e
                administração da Associação da Congada de Estrela do Indaiá.
              </p>
            </div>
          </div>
        </section>

        <section className="container-custom py-24">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#C7A14F]">
              Gestão Atual
            </span>

            <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
              Comissão da Associação
            </h2>

            <div className="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-[#C7A14F] to-transparent" />

            <p className="mt-8 text-lg leading-9 text-white/70">
              A Comissão Organizadora atua na coordenação administrativa da
              Associação da Congada de Estrela do Indaiá, colaborando na
              preservação das tradições religiosas e culturais da Festa de Nossa
              Senhora do Rosário, São Benedito e Santa Efigênia.
            </p>
          </div>
        </section>

        <section className="container-custom pb-24">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#C7A14F]">
              Diretoria
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Conselho Diretor
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {conselhoDiretor.map(([cargo, nome]) => (
              <article
                key={nome}
                className="flex min-h-[180px] flex-col justify-between rounded-3xl border border-white/15 bg-[#10233F] p-8 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-[#C7A14F]/70"
              >
                <div>
                  <div className="mb-6 h-1 w-16 rounded-full bg-[#C7A14F]" />

                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C7A14F]">
                    {cargo}
                  </p>

                  <h3 className="mt-5 text-2xl font-bold leading-snug text-white">
                    {nome}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#081B35] py-24">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#C7A14F]">
                Fiscalização
              </span>

              <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
                Conselho Fiscal
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {conselhoFiscal.map((nome) => (
                <article
                  key={nome}
                  className="flex min-h-[160px] flex-col justify-between rounded-3xl border border-white/15 bg-[#10233F] p-8 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-[#C7A14F]/70"
                >
                  <div>
                    <div className="mb-6 h-1 w-16 rounded-full bg-[#C7A14F]" />

                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C7A14F]">
                      Conselheiro Fiscal
                    </p>

                    <h3 className="mt-5 text-2xl font-bold leading-snug text-white">
                      {nome}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}