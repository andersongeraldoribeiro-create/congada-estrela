export default function LinhaTempo() {
  const eventos = [
    {
      ano: "1900",
      titulo: "Formação do povoado",
      descricao:
        "A história de Estrela do Indaiá começa a se organizar em torno de um pequeno núcleo rural, capela, cemitério e famílias das redondezas.",
    },
    {
      ano: "Década de 1910",
      titulo: "A devoção de Joaquim Simão",
      descricao:
        "Segundo a tradição oral, Joaquim Simão deslocava-se de Estrela para Dores do Indaiá para dançar na Festa do Rosário.",
    },
    {
      ano: "Década de 1920",
      titulo: "Início da Festa em Estrela",
      descricao:
        "A Festa do Rosário começa a ser organizada em Estrela do Indaiá, quando a localidade ainda era vila e distrito de Dores do Indaiá.",
    },
    {
      ano: "Até a década de 1950",
      titulo: "Ensaios nas fazendas",
      descricao:
        "Os ensaios aconteciam nas fazendas e os ternos eram menores, formados majoritariamente por homens negros.",
    },
    {
      ano: "Até 1989",
      titulo: "Celebrações próximas à Matriz",
      descricao:
        "A Festa era realizada nas proximidades da Igreja Matriz de São Sebastião.",
    },
    {
      ano: "1990",
      titulo: "Igreja do Rosário",
      descricao:
        "Após a conclusão da Igreja de Nossa Senhora do Rosário, a festa passa a acontecer em seu entorno.",
    },
    {
      ano: "Centenário",
      titulo: "100 anos de tradição",
      descricao:
        "A festa celebra seu primeiro século com registros, homenagens e material organizado pela Comissão do Centenário.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
            Linha do tempo
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl">
            Marcos da história
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Alguns acontecimentos que ajudam a compreender a trajetória da
            Congada de Estrela do Indaiá, desde a formação do povoado até a
            celebração do Centenário.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="relative border-l-2 border-[#C7A14F]/50 pl-8 md:pl-12">
            {eventos.map((evento) => (
              <article
                key={evento.ano}
                className="relative mb-10 rounded-3xl bg-[#F8F7F3] p-8 shadow-sm"
              >
                <div className="absolute -left-[43px] top-8 h-5 w-5 rounded-full border-4 border-white bg-[#C7A14F] md:-left-[59px]" />

                <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#C7A14F]">
                  {evento.ano}
                </span>

                <h3 className="mt-3 text-2xl text-[#1D3D73]">
                  {evento.titulo}
                </h3>

                <p className="mt-4 text-lg leading-8 text-gray-700">
                  {evento.descricao}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
