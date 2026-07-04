export default function Centenario() {
  return (
    <section className="bg-white py-28">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
            Um século de fé
          </span>

          <h2 className="mt-5 text-4xl leading-tight md:text-6xl">
            O Centenário da Festa do Rosário
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-700">
            O Centenário da Festa de Nossa Senhora do Rosário, São Benedito e
            Santa Efigênia representa um dos momentos mais importantes da
            história da Congada em Estrela do Indaiá. Celebrar cem anos é
            reconhecer o caminho percorrido pelos antigos e reafirmar o
            compromisso de preservar essa tradição para as futuras gerações.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-[2rem] bg-[#F5EFE4] shadow-xl">
          <div className="grid lg:grid-cols-[300px_1fr]">
            <div className="flex min-h-[280px] flex-col items-center justify-center bg-[#10233F] p-10 text-center">
              <span className="text-7xl font-bold leading-none text-[#C7A14F]">
                100
              </span>

              <span className="mt-4 text-2xl font-bold uppercase tracking-widest text-white">
                anos
              </span>

              <div className="my-6 h-px w-24 bg-[#C7A14F]" />

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
                de história e devoção
              </p>
            </div>

            <div className="p-10 md:p-14">
              <h3 className="text-3xl leading-tight text-[#1D3D73] md:text-4xl">
                Uma memória preservada pela Comissão do Centenário
              </h3>

              <div className="mt-6 space-y-6 text-lg leading-9 text-gray-700">
                <p>
                  O material comemorativo do Centenário reúne registros, imagens,
                  relatos e histórias dos ternos, ajudando a guardar parte da
                  trajetória da Congada estrelense. Ele complementa a pesquisa
                  acadêmica e atualiza informações importantes sobre a festa.
                </p>

                <p>
                  Esse marco homenageia capitães, reis, rainhas, festeiros,
                  músicos, dançantes, cozinheiras, voluntários e famílias que
                  dedicaram tempo, trabalho e fé para que a festa chegasse ao seu
                  primeiro século.
                </p>

                <p>
                  O Centenário não encerra uma história: ele abre um novo tempo.
                  A tradição continua sendo escrita todos os anos, quando os
                  ternos saem às ruas e renovam a devoção aos santos do Rosário.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
