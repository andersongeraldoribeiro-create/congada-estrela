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

type Album = {
  id: string;
  nome: string;
  folder: string;
};

const albunsPorAno: Record<string, Album[]> = {
  "2025": [
    {
      id: "quinta",
      nome: "Quinta",
      folder: "congada/quinta2025",
    },
    {
      id: "sexta",
      nome: "Sexta",
      folder: "congada/sexta2025",
    },
    {
      id: "sabado",
      nome: "Sábado",
      folder: "congada/sabado2025",
    },
    {
      id: "domingo",
      nome: "Domingo",
      folder: "congada/domingo2025",
    },
  ],

  "2026": [
    {
      id: "quinta-sexta",
      nome: "Quinta e Sexta",
      folder: "congada/quinta2026",
    },
    {
      id: "sabado",
      nome: "Sábado",
      folder: "congada/sabado2026",
    },
    {
      id: "domingo",
      nome: "Domingo",
      folder: "congada/domingo2026",
    },
  ],
};

export default function GaleriaFotos() {
  const [anoAtivo, setAnoAtivo] = useState("2025");

  const albunsAtuais = albunsPorAno[anoAtivo];

  const [albumAtivo, setAlbumAtivo] = useState<Album>(
    albunsPorAno["2025"][0]
  );

  const [fotos, setFotos] = useState<Foto[]>([]);
  const [fotoAberta, setFotoAberta] = useState<Foto | null>(null);
  const [carregando, setCarregando] = useState(true);

  function selecionarAno(ano: string) {
    setAnoAtivo(ano);

    const primeiroAlbum = albunsPorAno[ano][0];

    setAlbumAtivo(primeiroAlbum);
    setFotoAberta(null);
  }

  useEffect(() => {
    async function carregarFotos() {
      setCarregando(true);
      setFotos([]);
      setFotoAberta(null);

      try {
        const resposta = await fetch(
          `/api/cloudinary?folder=${encodeURIComponent(albumAtivo.folder)}`
        );

        if (!resposta.ok) {
          throw new Error("Erro ao carregar fotografias.");
        }

        const dados = await resposta.json();

        setFotos(Array.isArray(dados) ? dados : []);
      } catch (error) {
        console.error("Erro ao carregar fotografias:", error);
        setFotos([]);
      } finally {
        setCarregando(false);
      }
    }

    carregarFotos();
  }, [albumAtivo]);

  return (
    <main className="bg-[#06162D]">
      {/* HERO */}
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

      {/* GALERIA */}
      <section className="relative bg-[#06162D] py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1800px] px-4 md:px-8">
          {/* TÍTULO */}
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
              Acervo da Congada
            </span>

            <h2 className="mt-5 text-5xl font-bold text-white md:text-7xl">
              Momentos da Festa
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
              Escolha o ano e o dia da festa para visualizar os registros
              fotográficos.
            </p>
          </div>

          {/* ANOS */}
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-2 gap-8 md:gap-20">
              {/* 2025 */}
              <button
                type="button"
                onClick={() => selecionarAno("2025")}
                aria-pressed={anoAtivo === "2025"}
                className="group relative border-b border-white/10 px-4 pb-8 pt-3 text-center"
              >
                <span
                  className={`block text-5xl font-black tracking-tight transition duration-300 sm:text-6xl md:text-8xl ${
                    anoAtivo === "2025"
                      ? "text-[#E7C77A]"
                      : "text-white/35 group-hover:text-white/70"
                  }`}
                >
                  2025
                </span>

                <span
                  className={`mt-3 block text-xs font-bold uppercase tracking-[0.3em] transition duration-300 md:text-sm ${
                    anoAtivo === "2025"
                      ? "text-[#C7A14F]"
                      : "text-white/25 group-hover:text-white/50"
                  }`}
                >
                  Festa
                </span>

                <div
                  className={`absolute bottom-[-1px] left-1/2 h-[4px] -translate-x-1/2 rounded-full transition-all duration-300 ${
                    anoAtivo === "2025"
                      ? "w-3/4 bg-[#C7A14F]"
                      : "w-0 bg-transparent"
                  }`}
                />
              </button>

              {/* 2026 */}
              <button
                type="button"
                onClick={() => selecionarAno("2026")}
                aria-pressed={anoAtivo === "2026"}
                className="group relative border-b border-white/10 px-4 pb-8 pt-3 text-center"
              >
                <span
                  className={`block text-5xl font-black tracking-tight transition duration-300 sm:text-6xl md:text-8xl ${
                    anoAtivo === "2026"
                      ? "text-[#E7C77A]"
                      : "text-white/35 group-hover:text-white/70"
                  }`}
                >
                  2026
                </span>

                <span
                  className={`mt-3 block text-xs font-bold uppercase tracking-[0.3em] transition duration-300 md:text-sm ${
                    anoAtivo === "2026"
                      ? "text-[#C7A14F]"
                      : "text-white/25 group-hover:text-white/50"
                  }`}
                >
                  Festa
                </span>

                <div
                  className={`absolute bottom-[-1px] left-1/2 h-[4px] -translate-x-1/2 rounded-full transition-all duration-300 ${
                    anoAtivo === "2026"
                      ? "w-3/4 bg-[#C7A14F]"
                      : "w-0 bg-transparent"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* ANO SELECIONADO */}
          <div className="mt-14 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-white/35">
              Fotografias da
            </span>

            <h3 className="mt-2 text-3xl font-bold text-white md:text-4xl">
              Festa de <span className="text-[#E7C77A]">{anoAtivo}</span>
            </h3>
          </div>

          {/* DIAS */}
          <div className="sticky top-24 z-30 mt-8 flex flex-wrap justify-center gap-3 rounded-3xl border border-white/10 bg-[#06162D]/90 p-4 shadow-2xl backdrop-blur-xl md:gap-4 md:p-5">
            {albunsAtuais.map((album) => {
              const ativo = albumAtivo.id === album.id;

              return (
                <button
                  key={album.id}
                  type="button"
                  onClick={() => setAlbumAtivo(album)}
                  aria-pressed={ativo}
                  className={`rounded-full border px-6 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition duration-300 md:px-12 md:py-6 md:text-xl md:tracking-[0.16em] ${
                    ativo
                      ? "border-[#C7A14F] bg-[#C7A14F] text-[#06162D] shadow-lg"
                      : "border-white/15 bg-white/5 text-white/80 hover:border-[#C7A14F] hover:text-[#E7C77A]"
                  }`}
                >
                  {album.nome}
                </button>
              );
            })}
          </div>

          {/* CARREGANDO */}
          {carregando && (
            <div className="mt-20 flex flex-col items-center justify-center">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-[#C7A14F]" />

              <p className="mt-5 text-lg text-white/70">
                Carregando fotografias...
              </p>
            </div>
          )}

          {/* SEM FOTOS */}
          {!carregando && fotos.length === 0 && (
            <div className="mx-auto mt-20 max-w-xl rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-12 text-center">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#C7A14F]">
                {albumAtivo.nome}
              </span>

              <h3 className="mt-4 text-2xl font-bold text-white">
                Nenhuma fotografia encontrada
              </h3>

              <p className="mt-3 text-white/50">
                Ainda não existem fotografias disponíveis para este álbum da
                Festa de {anoAtivo}.
              </p>
            </div>
          )}

          {/* FOTOS */}
          {!carregando && fotos.length > 0 && (
            <>
              <div className="mt-12 flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C7A14F]">
                    {albumAtivo.nome}
                  </span>

                  <p className="mt-1 text-lg font-semibold text-white">
                    Festa de {anoAtivo}
                  </p>
                </div>

                <span className="text-sm font-medium text-white/50">
                  {fotos.length}{" "}
                  {fotos.length === 1 ? "fotografia" : "fotografias"}
                </span>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                {fotos.map((foto) => (
                  <button
                    key={foto.id}
                    type="button"
                    onClick={() => setFotoAberta(foto)}
                    className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#10233F] shadow-xl transition duration-300 hover:-translate-y-1 hover:border-[#C7A14F]/80"
                  >
                    <Image
                      src={foto.url}
                      alt={`Congada de Estrela do Indaiá - ${albumAtivo.nome} de ${anoAtivo}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#06162D]/45 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* FOTO AMPLIADA */}
      {fotoAberta && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#06162D]/95 p-4 backdrop-blur-xl"
          onClick={() => setFotoAberta(null)}
        >
          <button
            type="button"
            onClick={() => setFotoAberta(null)}
            className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-[#C7A14F]/60 bg-black/30 text-3xl text-[#E7C77A] transition hover:bg-[#C7A14F] hover:text-[#06162D]"
            aria-label="Fechar fotografia"
          >
            ×
          </button>

          <div
            className="flex max-h-[90vh] max-w-full items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={fotoAberta.url}
              alt={`Congada de Estrela do Indaiá - ${albumAtivo.nome} de ${anoAtivo}`}
              width={fotoAberta.width || 1800}
              height={fotoAberta.height || 1200}
              quality={100}
              className="max-h-[90vh] w-auto max-w-full rounded-[2rem] object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </main>
  );
}