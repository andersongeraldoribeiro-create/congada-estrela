"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Foto = {
  id: string;
  public_id: string;
  url: string;
  width: number;
  height: number;
};

const albuns = [
  { id: "quinta", nome: "Quinta", folder: "congada/quinta2025" },
  { id: "sexta", nome: "Sexta", folder: "congada/sexta2025" },
  { id: "sabado", nome: "Sábado", folder: "congada/sabado2025" },
  { id: "domingo", nome: "Domingo", folder: "congada/domingo2025" },
];

export default function GaleriaFotos() {
  const [albumAtivo, setAlbumAtivo] = useState(albuns[0]);
  const [fotos, setFotos] = useState<Foto[]>([]);
  const [fotoAberta, setFotoAberta] = useState<Foto | null>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarFotos() {
      setCarregando(true);

      const resposta = await fetch(
        `/api/cloudinary?folder=${encodeURIComponent(albumAtivo.folder)}`
      );

      const dados = await resposta.json();

      setFotos(Array.isArray(dados) ? dados : []);
      setCarregando(false);
    }

    carregarFotos();
  }, [albumAtivo]);

  return (
    <main className="bg-[#06162D]">
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <Image
          src="/images/hero/hero.png"
          alt="Galeria da Congada de Estrela do Indaiá"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#06162D]/95 via-[#06162D]/75 to-black/25" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#06162D] to-transparent" />

        <div className="relative z-10 container-custom pt-36">
          <div className="max-w-5xl">
            <span className="inline-block rounded-full border border-[#C7A14F] bg-black/35 px-5 py-2 text-sm font-bold uppercase tracking-[0.32em] text-[#E7C77A] backdrop-blur-sm">
              Acervo fotográfico
            </span>

            <h1 className="mt-8 text-6xl font-bold leading-tight text-white drop-shadow-2xl md:text-8xl">
              Galeria
            </h1>

            <div className="mt-7 h-1 w-32 rounded-full bg-[#C7A14F]" />

            <p className="mt-8 max-w-3xl text-xl font-medium leading-9 text-white/90 drop-shadow-xl md:text-2xl">
              Registros fotográficos da Congada de Estrela do Indaiá.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-[#06162D] py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1800px] px-4 md:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
              Festa de 2025
            </span>

            <h2 className="mt-5 text-5xl font-bold text-white md:text-7xl">
              Momentos da Festa
            </h2>
          </div>

          <div className="sticky top-24 z-30 mt-10 flex flex-wrap justify-center gap-4 rounded-3xl border border-white/10 bg-[#06162D]/85 p-5 backdrop-blur-xl">
            {albuns.map((album) => (
              <button
                key={album.id}
                type="button"
                onClick={() => setAlbumAtivo(album)}
                className={`rounded-full border px-9 py-5 text-base font-extrabold uppercase tracking-[0.16em] transition md:px-12 md:py-6 md:text-xl ${
                  albumAtivo.id === album.id
                    ? "border-[#C7A14F] bg-[#C7A14F] text-[#06162D]"
                    : "border-white/15 bg-white/5 text-white/80 hover:border-[#C7A14F] hover:text-[#E7C77A]"
                }`}
              >
                {album.nome}
              </button>
            ))}
          </div>

          {carregando ? (
            <p className="mt-20 text-center text-lg text-white/70">
              Carregando fotografias...
            </p>
          ) : (
            <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
              {fotos.map((foto) => (
                <button
                  key={foto.id}
                  type="button"
                  onClick={() => setFotoAberta(foto)}
                  className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#10233F] shadow-xl transition duration-300 hover:-translate-y-1 hover:border-[#C7A14F]/80"
                >
                  <Image
                    src={foto.url}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#06162D]/45 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {fotoAberta && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#06162D]/95 p-4 backdrop-blur-xl">
          <button
            type="button"
            onClick={() => setFotoAberta(null)}
            className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#C7A14F]/60 bg-black/30 text-3xl text-[#E7C77A] transition hover:bg-[#C7A14F] hover:text-[#06162D]"
          >
            ×
          </button>

          <Image
            src={fotoAberta.url}
            alt=""
            width={fotoAberta.width || 1800}
            height={fotoAberta.height || 1200}
            quality={100}
            className="max-h-[90vh] w-auto max-w-full rounded-[2rem] object-contain shadow-2xl"
          />
        </div>
      )}
    </main>
  );
}