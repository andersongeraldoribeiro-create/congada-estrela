export default function CongadaHoje() {
  return (
    <section className="bg-[#F8F7F3] py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-5xl">
          <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
            Atualidade
          </span>

          <h2 className="mt-5 text-4xl leading-tight md:text-6xl">
            A Congada nos dias atuais
          </h2>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8 text-lg leading-9 text-gray-700">
              <p>
                Atualmente, a Festa do Rosário reúne ternos com integrantes de
                diferentes idades, cores e famílias, demonstrando a força de uma
                tradição que soube atravessar o tempo. A Congada continua
                marcada pela mistura entre ternos de linhagem e ternos criados
                pela própria comunidade estrelense.
              </p>

              <p>
                Cada terno possui sua história, seus capitães, instrumentos,
                ritmos, fardas e formas de louvar. Mesmo com diferenças de
                estilo, todos compartilham a mesma devoção a Nossa Senhora do
                Rosário, São Benedito e Santa Efigênia.
              </p>

              <p>
                A continuidade da festa depende da transmissão entre gerações. Os
                jovens aprendem com os mais velhos, acompanham os ensaios,
                observam os rituais, assumem funções e passam a fazer parte da
                responsabilidade coletiva de manter viva a Congada.
              </p>

              <p>
                Por isso, a Congada de Estrela do Indaiá é mais do que uma
                manifestação do passado. Ela é uma tradição em movimento, vivida
                no presente e renovada a cada ano pela fé dos Filhos do Rosário.
              </p>
            </div>

            <aside className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h3 className="text-3xl text-[#1D3D73]">Uma família chamada Congada</h3>

              <p className="mt-5 text-lg leading-8 text-gray-700">
                Nos relatos dos congadeiros, a festa aparece como espaço de
                união, amizade, fé e continuidade familiar. A tradição permanece
                porque muitas famílias assumiram a Congada como parte de sua
                própria história.
              </p>

              <div className="mt-8 rounded-2xl bg-[#10233F] p-6 text-white">
                <p className="text-lg leading-8 text-white/85">
                  A cada edição, a cidade se transforma em um grande encontro de
                  devoção, memória e pertencimento.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
