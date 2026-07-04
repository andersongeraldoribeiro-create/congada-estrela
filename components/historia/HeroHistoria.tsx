import Image from "next/image";

export default function HeroHistoria() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src="/images/hero/hero.png"
        alt="História da Congada de Estrela do Indaiá"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06162D]/95 via-[#06162D]/75 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F8F7F3] to-transparent" />

      <div className="relative z-10 flex min-h-screen items-center pt-28">
        <div className="container-custom">
          <div className="max-w-4xl text-white">
            <span className="inline-flex rounded-full border border-[#C7A14F]/70 bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.35em] text-[#E5C779] backdrop-blur-md">
              História da Congada em Estrela
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
              A festa que nasceu com a cidade e atravessou gerações
            </h1>

            <div className="mt-8 h-1 w-32 rounded-full bg-[#C7A14F]" />

            <p className="mt-10 max-w-3xl text-lg leading-9 text-white/90 md:text-xl">
              A Festa de Nossa Senhora do Rosário, São Benedito e Santa
              Efigênia é uma das maiores expressões de fé, memória e cultura de
              Estrela do Indaiá. Sua história começou quando a cidade ainda era
              uma vila e permanece viva no compromisso dos congadeiros, capitães,
              famílias, festeiros e devotos.
            </p>

            <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <strong className="block text-4xl text-[#C7A14F]">1920</strong>
                <span className="mt-2 block text-sm text-white/80">
                  Década de origem da festa
                </span>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <strong className="block text-4xl text-[#C7A14F]">1990</strong>
                <span className="mt-2 block text-sm text-white/80">
                  Mudança para a Igreja do Rosário
                </span>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <strong className="block text-4xl text-[#C7A14F]">100+</strong>
                <span className="mt-2 block text-sm text-white/80">
                  Anos de devoção e tradição
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
