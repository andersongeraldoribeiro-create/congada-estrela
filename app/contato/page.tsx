import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function ContatoPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F8F7F3] text-[#10233F]">
        <section className="relative flex min-h-[82vh] items-center overflow-hidden">
          <Image
            src="/images/hero/hero.png"
            alt="Congada de Estrela do Indaiá"
            fill
            priority
            quality={100}
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F8F7F3] to-transparent" />

          <div className="relative z-10 container-custom pt-28">
            <div className="max-w-3xl">
              <span className="inline-block rounded-full border border-[#C7A14F] bg-black/35 px-5 py-2 text-sm font-bold uppercase tracking-[0.32em] text-[#E7C77A] backdrop-blur-sm">
                Contato
              </span>

              <h1 className="mt-7 text-6xl font-bold leading-none text-white drop-shadow-2xl md:text-8xl">
                Fale Conosco
              </h1>

              <div className="mt-6 h-1 w-28 rounded-full bg-[#C7A14F]" />

              <p className="mt-7 max-w-2xl text-lg font-medium leading-9 text-white drop-shadow-xl md:text-xl">
                Canal de comunicação do portal oficial da Congada de Estrela do
                Indaiá, dedicado à preservação da história, da fé e da cultura.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="https://www.instagram.com/festadorosario_estrela/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-[#C7A14F] px-8 py-4 font-bold text-[#10233F] shadow-xl transition hover:-translate-y-1 hover:bg-[#E7C77A]"
                >
                  Instagram Oficial
                </Link>

                <Link
                  href="/galeria"
                  className="rounded-lg border-2 border-white bg-white px-8 py-4 font-bold text-[#10233F] shadow-xl transition hover:-translate-y-1 hover:bg-[#F3F3F3]"
                >
                  Ver Galeria
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container-custom py-24">
          <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-xl md:p-12">
            <span className="text-sm font-bold uppercase tracking-[0.28em] text-[#C7A14F]">
              Informações
            </span>

            <h2 className="mt-4 text-4xl font-bold text-[#10233F]">
              Congada de Estrela do Indaiá
            </h2>

            <p className="mt-6 leading-8 text-gray-700">
              Este portal reúne informações, registros e conteúdos dedicados à
              valorização da Congada de Estrela do Indaiá, em Minas Gerais.
            </p>

            <div className="mt-8 rounded-2xl border border-[#D5DFEE] bg-[#EDF3FB] p-6">
              <p className="font-bold text-[#10233F]">
                Estrela do Indaiá • Minas Gerais
              </p>

              <p className="mt-2 text-gray-600">
                Festa de Nossa Senhora do Rosário, São Benedito e Santa Efigênia
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}