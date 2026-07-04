export default function EvolucaoFesta() {
  return (
    <section className="bg-[#F8F7F3] py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-5xl">
          <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C7A14F]">
            Transformações
          </span>

          <h2 className="mt-5 text-4xl leading-tight md:text-6xl">
            Dos ensaios nas fazendas ao grande encontro da cidade
          </h2>

          <div className="mt-12 space-y-8 text-lg leading-9 text-gray-700">
            <p>
              Nas primeiras décadas, a Festa do Rosário possuía uma composição
              diferente da que se vê atualmente. Segundo os relatos reunidos na
              pesquisa, até a década de 1950 os ensaios eram realizados nas
              fazendas, e os ternos eram formados majoritariamente por homens
              negros. A participação de mulheres como dançantes ainda não era
              permitida.
            </p>

            <p>
              Os grupos eram menores, com menos integrantes e menos cortes. A
              festa acontecia em um contexto rural, marcada por deslocamentos,
              encontros familiares e grande esforço coletivo. Mesmo com poucos
              recursos, a devoção mantinha a celebração viva.
            </p>

            <p>
              Com o passar do tempo, a Congada cresceu. Novas famílias passaram
              a participar, os ternos aumentaram, crianças e jovens foram
              incorporados e as mulheres passaram a ocupar papel importante na
              continuidade da tradição. Essa transformação não apagou as raízes
              antigas; ao contrário, mostrou que a tradição conseguiu permanecer
              viva ao se transmitir para novas gerações.
            </p>

            <p>
              A partir da década de 1980, surgiram ternos criados pela própria
              comunidade estrelense, trazendo novos ritmos, novas formas de louvar
              e uma participação expressiva da juventude. Esse crescimento marcou
              uma fase de renovação da festa, aproximando ainda mais a Congada da
              vida cultural da cidade.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <h3 className="text-2xl text-[#1D3D73]">Tradição oral</h3>
              <p className="mt-4 leading-8 text-gray-700">
                A memória da festa foi preservada por histórias contadas pelos
                antigos e transmitidas dentro das famílias.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <h3 className="text-2xl text-[#1D3D73]">Novas gerações</h3>
              <p className="mt-4 leading-8 text-gray-700">
                Jovens, crianças e mulheres passaram a fortalecer a continuidade
                da Congada estrelense.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <h3 className="text-2xl text-[#1D3D73]">Mais ternos</h3>
              <p className="mt-4 leading-8 text-gray-700">
                Os ternos tradicionais passaram a conviver com grupos surgidos
                na própria comunidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
