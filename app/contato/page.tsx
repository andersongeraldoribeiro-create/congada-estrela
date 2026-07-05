import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const apoio = [
  {
    numero: "01",
    titulo: "Preservação da memória",
    texto: "Contribuições ajudam a manter vivo este portal dedicado à história da Congada de Estrela do Indaiá.",
  },
  {
    numero: "02",
    titulo: "Fotografias e documentos",
    texto: "Fotos antigas, vídeos, documentos e registros da Festa do Rosário podem ampliar o acervo histórico.",
  },
  {
    numero: "03",
    titulo: "Relatos e histórias",
    texto: "Memórias de famílias, congadeiros e devotos fortalecem a tradição e ajudam a contar essa história.",
  },
  {
    numero: "04",
    titulo: "Divulgação do portal",
    texto: "Compartilhar este site também é uma forma de valorizar a Congada e alcançar novas pessoas.",
  },
];

const page = {
  background: "#F7F1E6",
  color: "#071D3A",
  paddingTop: "132px",
};

const wrap = {
  width: "100%",
  maxWidth: "1080px",
  margin: "0 auto",
  padding: "0 24px",
  boxSizing: "border-box" as const,
};

const section = {
  padding: "34px 0",
};

const eyebrow = {
  margin: 0,
  fontFamily: "Arial, sans-serif",
  fontSize: "12px",
  lineHeight: "1.4",
  fontWeight: 800,
  letterSpacing: "0.24em",
  textTransform: "uppercase" as const,
  color: "#B67C23",
};

const title = {
  margin: "10px 0 0",
  fontFamily: "Georgia, serif",
  fontSize: "clamp(28px, 4vw, 48px)",
  lineHeight: "1.08",
  fontWeight: 700,
  color: "#061A34",
  overflowWrap: "break-word" as const,
};

const subtitle = {
  margin: "18px auto 0",
  maxWidth: "760px",
  fontFamily: "Arial, sans-serif",
  fontSize: "17px",
  lineHeight: "1.8",
  color: "#314158",
  overflowWrap: "break-word" as const,
};

const card = {
  boxSizing: "border-box" as const,
  border: "1px solid #D8C28A",
  borderRadius: "24px",
  background: "#FFFFFF",
  padding: "24px",
  minWidth: 0,
  overflow: "hidden",
};

const cardTitle = {
  margin: "10px 0 0",
  fontFamily: "Georgia, serif",
  fontSize: "24px",
  lineHeight: "1.22",
  fontWeight: 700,
  color: "#061A34",
  overflowWrap: "break-word" as const,
  wordBreak: "normal" as const,
};

const text = {
  margin: "14px 0 0",
  fontFamily: "Arial, sans-serif",
  fontSize: "16px",
  lineHeight: "1.75",
  color: "#314158",
  overflowWrap: "break-word" as const,
};

const button = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "100%",
  boxSizing: "border-box" as const,
  borderRadius: "999px",
  background: "#C99736",
  color: "#061A34",
  padding: "12px 20px",
  fontFamily: "Arial, sans-serif",
  fontSize: "14px",
  fontWeight: 800,
  textDecoration: "none",
  overflowWrap: "anywhere" as const,
};

export default function ContatoPage() {
  return (
    <>
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "92px",
          background: "#EAF0F7",
          borderBottom: "1px solid rgba(6, 26, 52, 0.12)",
          boxShadow: "0 8px 22px rgba(6, 26, 52, 0.08)",
          zIndex: 20,
        }}
      />
      <Header />


      <style
        dangerouslySetInnerHTML={{
          __html: `
            header, header > div, header nav {
              background-color: #EAF0F7 !important;
            }
            header {
              border-bottom: 1px solid rgba(6, 26, 52, 0.12) !important;
              box-shadow: 0 8px 22px rgba(6, 26, 52, 0.08) !important;
            }
            header a, header button, header nav a, header span, header p {
              color: #183A66 !important;
            }
          `,
        }}
      />

      <main style={page}>
        <section style={section}>
          <div style={wrap}>
            <div
              style={{
                ...card,
                padding: "42px 28px",
                textAlign: "center",
                boxShadow: "0 18px 40px rgba(6, 26, 52, 0.08)",
              }}
            >
              <p style={eyebrow}>Contato e colaboração</p>
              <h1 style={title}>Ajude a preservar a memória da Congada</h1>
              <p style={subtitle}>
                Este portal reúne registros, histórias e referências sobre a Congada de Estrela do Indaiá. Sua colaboração pode ajudar a guardar fotografias, documentos e relatos ligados à Festa do Rosário e à tradição congadeira.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  justifyContent: "center",
                  marginTop: "26px",
                }}
              >
                <a href="mailto:100anosrosario@gmail.com" style={button}>
                  Enviar material por e-mail
                </a>
                <Link
                  href="https://www.instagram.com/festadorosario_estrela/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ ...button, background: "#FFFFFF", border: "1px solid #C99736" }}
                >
                  Abrir Instagram oficial
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section style={section}>
          <div style={wrap}>
            <p style={eyebrow}>Como apoiar</p>
            <h2 style={{ ...title, maxWidth: "780px", fontSize: "clamp(26px, 3vw, 38px)" }}>
              Toda colaboração ajuda a manter esta história viva
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "20px",
                marginTop: "28px",
              }}
            >
              {apoio.map((item) => (
                <article key={item.numero} style={{ ...card, minHeight: "240px" }}>
                  <p style={{ ...eyebrow, letterSpacing: "0.12em" }}>{item.numero}</p>
                  <h3 style={cardTitle}>{item.titulo}</h3>
                  <p style={text}>{item.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section style={section}>
          <div style={wrap}>
            <div
              style={{
                ...card,
                background: "#061A34",
                borderColor: "#061A34",
                padding: "34px 28px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "24px",
                alignItems: "center",
              }}
            >
              <div style={{ minWidth: 0 }}>
                <p style={{ ...eyebrow, color: "#D9AD58" }}>Apoie este projeto</p>
                <h2 style={{ ...title, color: "#FFFFFF", fontSize: "clamp(28px, 3.8vw, 44px)" }}>
                  Sua ajuda mantém esta história viva
                </h2>
                <p style={{ ...text, color: "rgba(255,255,255,0.88)", maxWidth: "640px" }}>
                  A contribuição da comunidade ajuda na manutenção do portal, na organização de registros, na preservação de fotografias e na divulgação da história da Congada de Estrela do Indaiá.
                </p>
              </div>

              <div
                style={{
                  ...card,
                  background: "rgba(255,255,255,0.08)",
                  borderColor: "rgba(255,255,255,0.18)",
                }}
              >
                <p style={{ ...text, marginTop: 0, color: "rgba(255,255,255,0.9)" }}>
                  Para colaborar com materiais, relatos ou informações, entre em contato pelo e-mail do projeto ou acompanhe as publicações no Instagram oficial da Festa do Rosário.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={section}>
          <div
            style={{
              ...wrap,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            <article style={card}>
              <p style={eyebrow}>Envio de fotos</p>
              <h2 style={cardTitle}>Envie fotografias, documentos e histórias</h2>
              <p style={text}>
                Possui fotografias antigas, vídeos, documentos ou relatos sobre a Congada de Estrela do Indaiá? Sua colaboração pode ajudar a ampliar o acervo histórico deste portal.
              </p>
              <div style={{ marginTop: "22px" }}>
                <a href="mailto:100anosrosario@gmail.com" style={button}>
                  100anosrosario@gmail.com
                </a>
              </div>
            </article>

            <article style={{ ...card, background: "#EEF4FB", borderColor: "#CAD5E2" }}>
              <p style={eyebrow}>Instagram oficial</p>
              <h2 style={cardTitle}>Acompanhe a Festa do Rosário</h2>
              <p style={text}>
                Siga o perfil oficial para acompanhar fotografias, novidades, registros da festa e conteúdos ligados à Congada de Estrela do Indaiá.
              </p>
              <div style={{ marginTop: "22px" }}>
                <Link
                  href="https://www.instagram.com/festadorosario_estrela/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={button}
                >
                  Abrir Instagram
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section style={{ ...section, paddingBottom: "56px" }}>
          <div style={wrap}>
            <div style={{ ...card, textAlign: "center", padding: "34px 24px" }}>
              <p style={eyebrow}>Obrigado pelo apoio</p>
              <h2 style={{ ...title, fontSize: "clamp(26px, 3.4vw, 40px)" }}>
                Preservar a Congada é valorizar a história de Estrela do Indaiá
              </h2>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
