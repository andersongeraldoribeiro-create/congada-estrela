import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <Image
        src="/images/hero/hero.png"
        alt="Congada de Estrela do Indaiá"
        fill
        priority
        quality={100}
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/5" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F8F7F3] to-transparent" />

      <div className="relative z-10 container-custom pt-28">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-[#C7A14F] bg-black/35 px-5 py-2 text-sm font-bold uppercase tracking-[0.32em] text-[#E7C77A] backdrop-blur-sm">
            Portal Oficial
          </span>

          <h1 className="mt-7 text-6xl font-bold leading-none text-white drop-shadow-2xl md:text-8xl">
            Congada
          </h1>

          <h2 className="mt-3 text-4xl font-semibold text-[#E7C77A] drop-shadow-xl md:text-5xl">
            Estrela do Indaiá
          </h2>

          <div className="mt-6 h-1 w-28 rounded-full bg-[#C7A14F]" />

          <p className="mt-7 max-w-2xl text-lg font-medium leading-9 text-white drop-shadow-xl md:text-xl">
            Um patrimônio de fé, cultura e tradição preservado há mais de um
            século através da Festa de Nossa Senhora do Rosário, São Benedito e
            Santa Efigênia.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/historia"
              className="rounded-lg bg-[#C7A14F] px-8 py-4 font-bold text-[#10233F] shadow-xl transition hover:-translate-y-1 hover:bg-[#E7C77A]"
            >
              Conheça a História
            </Link>

            <Link
              href="/galeria"
              className="rounded-lg border-2 border-white bg-white px-8 py-4 font-bold text-[#10233F] shadow-xl transition hover:-translate-y-1 hover:bg-[#F3F3F3]"
            >
              Ver Galeria
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-5">
            {[
              ["+100", "Anos de tradição"],
              ["9", "Ternos participantes"],
              ["3", "Santos de devoção"],
            ].map(([numero, texto]) => (
              <div
                key={texto}
                className="min-w-[150px] rounded-xl border border-white/25 bg-black/35 px-6 py-4 backdrop-blur-sm"
              >
                <strong className="block text-4xl text-[#E7C77A]">
                  {numero}
                </strong>
                <span className="text-sm font-medium text-white">{texto}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}