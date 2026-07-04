export default function IgrejaRosario() {
  return (
    <section className="bg-[#10233F] py-24 text-white">
      <div className="container-custom">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
              Marco histórico
            </span>

            <h2 className="mt-5 text-4xl leading-tight text-white md:text-6xl">
              A Igreja de Nossa Senhora do Rosário
            </h2>

            <div className="mt-10 space-y-8 text-lg leading-9 text-white/82">
              <p>
                Até o ano de 1989, a Festa do Rosário era realizada nas
                proximidades da Igreja Matriz de São Sebastião. A mudança de
                espaço aconteceu após a conclusão da Igreja de Nossa Senhora do
                Rosário, construída com o empenho da Associação dos Congadeiros
                de Estrela do Indaiá.
              </p>

              <p>
                A partir de 1990, a festa passou a ser realizada no entorno da
                nova igreja. Essa mudança marcou uma nova fase da Congada, pois
                o templo dedicado à santa tornou-se o ponto central das
                celebrações, reunindo ternos, capitães, reis, rainhas,
                festeiros, devotos e visitantes.
              </p>

              <p>
                A Igreja do Rosário representa a força da organização comunitária
                e o reconhecimento da importância da Congada para a cidade. Mais
                que um espaço religioso, ela tornou-se símbolo de pertencimento e
                de memória para os Filhos do Rosário.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-9 shadow-2xl backdrop-blur-md">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#C7A14F]">
              mudança de lugar
            </span>

            <strong className="mt-5 block text-7xl leading-none text-[#C7A14F]">
              1990
            </strong>

            <p className="mt-6 text-lg leading-8 text-white/80">
              Ano em que a Festa passou a acontecer nos arredores da Igreja de
              Nossa Senhora do Rosário, após a conclusão de sua construção.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
