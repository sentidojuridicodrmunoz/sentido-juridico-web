import { useParams, Link } from "react-router-dom"
import { areas } from "../data/areasData"

function AreaPage({ onOpenForm }) {
  const { slug } = useParams()
  const area = areas.find(a => a.slug === slug)

  if (!area) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h2>Área no encontrada</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    )
  }

  return (
    <>
      <section
        style={{
          height: "70vh",
          backgroundImage: `linear-gradient(rgba(10,31,68,0.7), rgba(10,31,68,0.7)), url(${area.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center"
        }}
      >
        <div>
          <h1 style={{ fontSize: "40px", color: "#C9A227" }}>{area.title}</h1>
          <p style={{ maxWidth: "700px", margin: "20px auto" }}>
            {area.description}
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 20px", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ marginBottom: "40px", color: "#0A1F44" }}>
          Servicios que ofrecemos
        </h2>

        <ul style={{ lineHeight: "2", fontSize: "18px" }}>
          {area.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>

        <div style={{ marginTop: "60px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link to="/" style={buttonStyleSecondary}>
            Volver al Inicio
          </Link>

          <button onClick={onOpenForm} style={buttonStylePrimary}>
            Agendar Consulta
          </button>

          <a
            href="https://wa.me/573127944196?text=Hola,%20quisiera%20recibir%20asesoría%20jurídica."
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyleSecondary}
          >
            Contactar por WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}

const buttonStylePrimary = {
  backgroundColor: "#C9A227",
  color: "#0A1F44",
  padding: "12px 25px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "600"
}

const buttonStyleSecondary = {
  backgroundColor: "transparent",
  color: "#0A1F44",
  padding: "12px 25px",
  border: "2px solid #0A1F44",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "600",
  textDecoration: "none"
}

export default AreaPage