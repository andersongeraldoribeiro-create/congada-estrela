import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Transparência e Documentos | Congada de Estrela do Indaiá",
  description:
    "Documentos institucionais e informações de transparência da Associação da Congada de Nossa Senhora do Rosário da Paróquia São Sebastião de Estrela do Indaiá.",
};

const transportes = [
  {
    data: "16/09/2026",
    destino: "São Gotardo / MG",
    ternos: "Moçambique, Congo Real Penacho e Penachinho",
    pessoas: "57",
    valor: "R$ 8.856,00",
    nota: "000.000.133",
  },
  {
    data: "16/09/2026",
    destino: "Luz / MG",
    ternos: "Congo Marujo",
    pessoas: "19",
    valor: "R$ 2.902,80",
    nota: "000.000.132",
  },
  {
    data: "22/09/2026",
    destino: "Santa Rosa da Serra / MG",
    ternos: "Congo Sereno, Pena Verde, Congo Marujo e Estrela de Ouro",
    pessoas: "152",
    valor: "R$ 18.245,00",
    nota: "000.000.134",
  },
];

const documentos = [
  {
    categoria: "Prestação de contas",
    titulo: "Termo de Fomento nº 977525/2025",
    descricao:
      "Documento de prestação de contas apresentado pela Associação, com registros de despesas e documentação relacionada à execução do Termo de Fomento.",
    formato: "DOCX",
    href: "/documentos/transparencia/prestacao-contas-termo-fomento-977525-2025.docx",
    download: true,
  },
  {
    categoria: "Documento institucional",
    titulo: "Estatuto da Associação",
    descricao:
      "Estatuto da Associação da Congada de Nossa Senhora do Rosário da Paróquia São Sebastião de Estrela do Indaiá, aprovado em 27 de março de 2017.",
    formato: "PDF",
    href: "/documentos/transparencia/estatuto-associacao-congada-2017.pdf",
    download: false,
  },
  {
    categoria: "Documento institucional",
    titulo: "Ata da Assembleia Geral Ordinária de 2025",
    descricao:
      "Ata registrada em cartório referente à Assembleia Geral Ordinária realizada em 5 de abril de 2025, com eleição do Conselho Diretor e do Conselho Fiscal.",
    formato: "PDF",
    href: "/documentos/transparencia/ata-assembleia-geral-2025.pdf",
    download: false,
  },
  {
    categoria: "Patrimônio cultural",
    titulo: "Registro da Festa do Rosário como Patrimônio Imaterial",
    descricao:
      "Processo de Registro da Festa de Nossa Senhora do Rosário como Patrimônio Imaterial de Estrela do Indaiá, elaborado em 2018.",
    formato: "PDF",
    href: "/documentos/transparencia/patrimonio-imaterial-festa-rosario-2018.pdf",
    download: false,
  },
];

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="24" height="24">
      <path
        d="M7 3.75h6.5L18.25 8.5V20A1.25 1.25 0 0 1 17 21.25H7A1.25 1.25 0 0 1 5.75 20V5A1.25 1.25 0 0 1 7 3.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M13.25 3.75V8.5h5M8.75 12h6.5M8.75 15.5h6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="16" height="16">
      <path
        d="M5 12h14M14 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const pageCss = `
  .tr-page { background:#f8f7f3; color:#10233f; overflow-x:hidden; }
  .tr-container { width:min(1180px, calc(100% - 48px)); margin:0 auto; }
  .tr-hero { background:#06162d; color:white; padding:172px 0 84px; }
  .tr-eyebrow { display:inline-flex; align-items:center; border:1px solid rgba(199,161,79,.65); border-radius:999px; background:rgba(0,0,0,.18); color:#e7c77a; padding:9px 16px; font-size:12px; font-weight:800; letter-spacing:.22em; text-transform:uppercase; }
  .tr-title { margin:24px 0 0; max-width:900px; color:white; font-size:clamp(42px,6vw,72px); line-height:1.03; letter-spacing:-.025em; }
  .tr-goldline { width:92px; height:4px; border-radius:999px; background:#c7a14f; margin-top:24px; }
  .tr-lead { max-width:820px; margin-top:24px; color:rgba(255,255,255,.78); font-size:20px; line-height:1.65; }

  .tr-summary { background:#f8f7f3; padding:78px 0 86px; }
  .tr-grid3 { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:24px; align-items:stretch; }
  .tr-card { position:relative; display:flex; flex-direction:column; width:100%; min-width:0; min-height:220px; padding:30px; border:1px solid #d9d4c8; border-radius:24px; background:white; box-shadow:0 14px 36px rgba(16,35,63,.07); overflow:hidden; }
  .tr-label { margin:0; color:#9b722a; font-size:12px; font-weight:800; line-height:1.4; letter-spacing:.19em; text-transform:uppercase; }
  .tr-card-title { margin:12px 0 0; color:#10233f; font-size:30px; line-height:1.15; overflow-wrap:anywhere; }
  .tr-card-copy { margin:16px 0 0; color:#5a6472; font-size:16px; line-height:1.75; overflow-wrap:anywhere; }

  .tr-dark { background:#10233f; color:white; padding:82px 0; }
  .tr-dark-grid { display:grid; grid-template-columns:.82fr 1.18fr; gap:44px; align-items:start; }
  .tr-section-kicker { color:#c7a14f; font-size:13px; font-weight:800; letter-spacing:.22em; text-transform:uppercase; }
  .tr-section-title { margin:14px 0 0; color:inherit; font-size:clamp(34px,4vw,48px); line-height:1.12; }
  .tr-section-copy { margin:20px 0 0; max-width:620px; color:rgba(255,255,255,.7); font-size:18px; line-height:1.75; }
  .tr-total { margin-top:30px; padding:28px; border:1px solid rgba(255,255,255,.12); border-radius:24px; background:rgba(255,255,255,.05); overflow:hidden; }
  .tr-total-value { margin-top:8px; color:white; font-size:40px; line-height:1.1; font-weight:800; }
  .tr-total-note { margin-top:10px; color:rgba(255,255,255,.55); font-size:14px; line-height:1.65; }
  .tr-transport-list { display:grid; gap:18px; }
  .tr-transport-card { width:100%; min-width:0; padding:28px; border:1px solid rgba(255,255,255,.1); border-radius:24px; background:#081b35; box-shadow:0 12px 34px rgba(0,0,0,.16); overflow:hidden; }
  .tr-transport-row { display:grid; grid-template-columns:minmax(0,1fr) auto; gap:24px; align-items:start; }
  .tr-number-date { display:flex; align-items:center; gap:12px; min-width:0; }
  .tr-number { flex:0 0 auto; width:36px; height:36px; display:grid; place-items:center; border-radius:50%; background:rgba(199,161,79,.14); color:#e7c77a; font-weight:800; }
  .tr-date { color:#e7c77a; font-size:12px; line-height:1.45; font-weight:800; letter-spacing:.16em; text-transform:uppercase; }
  .tr-destination { margin:16px 0 0; color:white; font-size:26px; line-height:1.2; overflow-wrap:anywhere; }
  .tr-ternos { margin:8px 0 0; color:rgba(255,255,255,.65); font-size:16px; line-height:1.65; overflow-wrap:anywhere; }
  .tr-meta { display:flex; flex-wrap:wrap; gap:8px 22px; margin-top:16px; color:rgba(255,255,255,.55); font-size:14px; }
  .tr-meta strong { color:white; }
  .tr-value { min-width:160px; text-align:right; }
  .tr-value-label { color:rgba(255,255,255,.4); font-size:11px; letter-spacing:.17em; text-transform:uppercase; }
  .tr-value-number { margin-top:6px; color:#e7c77a; font-size:25px; line-height:1.2; font-weight:800; white-space:nowrap; }

  .tr-docs { background:#f8f7f3; padding:86px 0; }
  .tr-docs-head { max-width:760px; }
  .tr-light-kicker { color:#9b722a; font-size:13px; font-weight:800; letter-spacing:.22em; text-transform:uppercase; }
  .tr-light-title { margin:14px 0 0; color:#10233f; font-size:clamp(34px,4vw,48px); line-height:1.12; }
  .tr-light-copy { margin:20px 0 0; color:#5a6472; font-size:18px; line-height:1.75; }
  .tr-doc-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:24px; margin-top:38px; }
  .tr-doc-card { display:flex; flex-direction:column; min-width:0; min-height:330px; padding:30px; border:1px solid #d9d4c8; border-radius:24px; background:white; box-shadow:0 14px 36px rgba(16,35,63,.07); overflow:hidden; }
  .tr-doc-top { display:flex; align-items:flex-start; justify-content:space-between; gap:18px; }
  .tr-doc-icon { width:48px; height:48px; flex:0 0 auto; display:grid; place-items:center; border-radius:16px; background:#edf3fb; color:#1d3d73; }
  .tr-format { flex:0 0 auto; border:1px solid #d9d4c8; border-radius:999px; background:#f8f7f3; color:#6b7280; padding:6px 10px; font-size:11px; line-height:1; font-weight:800; letter-spacing:.13em; text-transform:uppercase; }
  .tr-doc-category { margin:24px 0 0; color:#9b722a; font-size:11px; font-weight:800; letter-spacing:.16em; text-transform:uppercase; }
  .tr-doc-title { margin:11px 0 0; color:#10233f; font-size:27px; line-height:1.22; overflow-wrap:anywhere; }
  .tr-doc-copy { margin:15px 0 0; color:#5a6472; font-size:16px; line-height:1.7; overflow-wrap:anywhere; }
  .tr-button { display:inline-flex; align-items:center; justify-content:center; gap:8px; align-self:flex-start; margin-top:auto; padding:12px 18px; border-radius:999px; background:#1d3d73; color:white; font-size:14px; font-weight:800; transition:.2s ease; }
  .tr-button:hover { background:#c7a14f; color:#10233f; }

  .tr-office { background:#eaf0f7; padding:86px 0; }
  .tr-office-grid { display:grid; grid-template-columns:.9fr 1.1fr; gap:44px; align-items:start; }
  .tr-office-cards { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:20px; }
  .tr-office-card { display:block; min-width:0; min-height:280px; padding:28px; border:1px solid #c9d4e2; border-radius:24px; background:white; box-shadow:0 14px 34px rgba(16,35,63,.07); overflow:hidden; transition:.2s ease; }
  .tr-office-card:hover { transform:translateY(-3px); border-color:#c7a14f; }
  .tr-office-title { margin:10px 0 0; color:#10233f; font-size:27px; line-height:1.2; }
  .tr-office-copy { margin:12px 0 0; color:#5a6472; font-size:14px; line-height:1.7; overflow-wrap:anywhere; }
  .tr-office-link { display:inline-flex; align-items:center; gap:8px; margin-top:18px; color:#1d3d73; font-size:14px; font-weight:800; }

  .tr-final { background:#f8f7f3; padding:78px 0 92px; }
  .tr-final-card { padding:40px; border-radius:28px; background:#06162d; color:white; box-shadow:0 24px 60px rgba(16,35,63,.18); overflow:hidden; }
  .tr-final-copy { margin:18px 0 0; max-width:900px; color:rgba(255,255,255,.7); font-size:18px; line-height:1.75; }

  @media (max-width: 980px) {
    .tr-grid3 { grid-template-columns:1fr; }
    .tr-card { min-height:0; }
    .tr-dark-grid, .tr-office-grid { grid-template-columns:1fr; }
    .tr-doc-grid { grid-template-columns:1fr; }
    .tr-office-cards { grid-template-columns:1fr 1fr; }
  }

  @media (max-width: 720px) {
    .tr-container { width:min(100% - 32px,1180px); }
    .tr-hero { padding:150px 0 62px; }
    .tr-summary, .tr-dark, .tr-docs, .tr-office, .tr-final { padding-top:58px; padding-bottom:58px; }
    .tr-title { font-size:42px; }
    .tr-lead, .tr-section-copy, .tr-light-copy, .tr-final-copy { font-size:16px; }
    .tr-card, .tr-doc-card, .tr-transport-card, .tr-office-card { padding:22px; }
    .tr-card-title { font-size:25px; }
    .tr-transport-row { grid-template-columns:1fr; }
    .tr-value { min-width:0; text-align:left; }
    .tr-value-number { white-space:normal; }
    .tr-office-cards { grid-template-columns:1fr; }
    .tr-final-card { padding:28px 22px; }
  }
`;

export default function TransparenciaPage() {
  return (
    <>
      <Header />
      <style>{pageCss}</style>

      <main className="tr-page">
        <section className="tr-hero">
          <div className="tr-container">
            <span className="tr-eyebrow">Transparência</span>
            <h1 className="tr-title">Transparência e Documentos</h1>
            <div className="tr-goldline" />
            <p className="tr-lead">
              Acesso aos documentos institucionais da Associação e às informações apresentadas sobre o Termo de Fomento nº 977525/2025.
            </p>
          </div>
        </section>

        <section className="tr-summary">
          <div className="tr-container">
            <div className="tr-grid3">
              <article className="tr-card">
                <p className="tr-label">Parceria</p>
                <h2 className="tr-card-title">Termo nº 977525/2025</h2>
                <p className="tr-card-copy">
                  Termo de Fomento do Ministério da Cultura, por meio da Plataforma Transferegov.br.
                </p>
              </article>

              <article className="tr-card">
                <p className="tr-label">Transportes registrados</p>
                <h2 className="tr-card-title">R$ 30.003,80</h2>
                <p className="tr-card-copy">
                  Subtotal das três despesas de transporte listadas no documento de prestação de contas enviado.
                </p>
              </article>

              <article className="tr-card">
                <p className="tr-label">Prorrogação</p>
                <h2 className="tr-card-title">Ofício nº 021/2026</h2>
                <p className="tr-card-copy">
                  Solicitação de extensão da vigência por mais 356 dias, com referência à realização da Festa do Rosário de 2027.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="tr-dark">
          <div className="tr-container tr-dark-grid">
            <div>
              <span className="tr-section-kicker">Aplicação dos recursos</span>
              <h2 className="tr-section-title">Transportes registrados</h2>
              <p className="tr-section-copy">
                Relação das despesas de transporte que constam na versão da prestação de contas encaminhada para publicação.
              </p>

              <div className="tr-total">
                <p className="tr-label" style={{ color: "#e7c77a" }}>Subtotal listado</p>
                <div className="tr-total-value">R$ 30.003,80</div>
                <p className="tr-total-note">Refere-se apenas às três despesas de transporte apresentadas abaixo.</p>
              </div>
            </div>

            <div className="tr-transport-list">
              {transportes.map((item, index) => (
                <article key={item.nota} className="tr-transport-card">
                  <div className="tr-transport-row">
                    <div style={{ minWidth: 0 }}>
                      <div className="tr-number-date">
                        <span className="tr-number">{index + 1}</span>
                        <span className="tr-date">{item.data}</span>
                      </div>
                      <h3 className="tr-destination">{item.destino}</h3>
                      <p className="tr-ternos">{item.ternos}</p>
                      <div className="tr-meta">
                        <span><strong>{item.pessoas}</strong> pessoas</span>
                        <span>NF <strong>{item.nota}</strong></span>
                      </div>
                    </div>
                    <div className="tr-value">
                      <div className="tr-value-label">Valor</div>
                      <div className="tr-value-number">{item.valor}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="documentos" className="tr-docs">
          <div className="tr-container">
            <div className="tr-docs-head">
              <span className="tr-light-kicker">Documentação</span>
              <h2 className="tr-light-title">Documentos disponíveis</h2>
              <p className="tr-light-copy">
                Arquivos institucionais e documentos encaminhados para publicação nesta área de transparência.
              </p>
            </div>

            <div className="tr-doc-grid">
              {documentos.map((documento) => (
                <article key={documento.href} className="tr-doc-card">
                  <div className="tr-doc-top">
                    <div className="tr-doc-icon"><DocumentIcon /></div>
                    <span className="tr-format">{documento.formato}</span>
                  </div>
                  <p className="tr-doc-category">{documento.categoria}</p>
                  <h3 className="tr-doc-title">{documento.titulo}</h3>
                  <p className="tr-doc-copy">{documento.descricao}</p>
                  <a
                    className="tr-button"
                    href={documento.href}
                    target={documento.download ? undefined : "_blank"}
                    rel={documento.download ? undefined : "noopener noreferrer"}
                    download={documento.download ? true : undefined}
                  >
                    {documento.download ? "Baixar documento" : "Visualizar documento"}
                    <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="tr-office">
          <div className="tr-container tr-office-grid">
            <div>
              <span className="tr-light-kicker">Ofício nº 021/2026</span>
              <h2 className="tr-light-title">Solicitação de prorrogação de prazo</h2>
              <p className="tr-light-copy">
                O documento, datado de 31 de agosto de 2026, solicita a prorrogação da vigência do Termo de Fomento nº 977525/2025 por mais 356 dias. A justificativa apresentada relaciona a extensão ao planejamento e à aplicação dos recursos na tradicional Festa de Nossa Senhora do Rosário de 2027.
              </p>
            </div>

            <div className="tr-office-cards">
              <a className="tr-office-card" href="/documentos/transparencia/oficio-021-2026-pagina-1.jpg" target="_blank" rel="noopener noreferrer">
                <div className="tr-doc-icon"><DocumentIcon /></div>
                <p className="tr-doc-category">Ofício nº 021/2026</p>
                <h3 className="tr-office-title">Página 1</h3>
                <p className="tr-office-copy">Abertura, identificação do Termo de Fomento, pedido e justificativa.</p>
                <span className="tr-office-link">Abrir imagem <ArrowIcon /></span>
              </a>

              <a className="tr-office-card" href="/documentos/transparencia/oficio-021-2026-pagina-2.jpg" target="_blank" rel="noopener noreferrer">
                <div className="tr-doc-icon"><DocumentIcon /></div>
                <p className="tr-doc-category">Ofício nº 021/2026</p>
                <h3 className="tr-office-title">Página 2</h3>
                <p className="tr-office-copy">Encerramento, assinatura e data do documento.</p>
                <span className="tr-office-link">Abrir imagem <ArrowIcon /></span>
              </a>
            </div>
          </div>
        </section>

        <section className="tr-final">
          <div className="tr-container">
            <div className="tr-final-card">
              <span className="tr-section-kicker">Compromisso institucional</span>
              <h2 className="tr-section-title">Acesso público aos documentos da Associação</h2>
              <p className="tr-final-copy">
                Esta área reúne documentos institucionais e informações referentes ao Termo de Fomento nº 977525/2025, facilitando a consulta pública em um único espaço.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
