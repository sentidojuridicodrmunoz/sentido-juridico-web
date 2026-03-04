import "../styles/styles.css"

function Home({ onOpenForm }) {

  const areas = [
    {
      title: "Civil",
      description: "Asesoría en obligaciones, contratos, responsabilidad civil y conflictos patrimoniales."
    },
    {
      title: "Laboral",
      description: "Representación en despidos, reclamaciones laborales y asesoría empresarial."
    },
    {
      title: "Penal",
      description: "Defensa técnica en procesos penales y acompañamiento jurídico estratégico."
    },
    {
      title: "Familia",
      description: "Procesos de divorcio, custodia, alimentos, sucesiones y asesoría integral en conflictos familiares."
    },
    {
      title: "Ejecutivos",
      description: "Recuperación de cartera y ejecución judicial de obligaciones en Colombia."
    }
  ]

  return (
    <>
      <section style={styles.hero}>
        <div style={styles.overlay}>
          <h1 style={styles.title}>
            Solidez Jurídica para Decisiones Firmes.
          </h1>

          <p style={styles.subtitle}>
            Asesoría y representación legal integral en Colombia.
          </p>

          <div style={styles.buttons}>
            <button
              style={styles.primaryButton}
              onClick={onOpenForm}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#b8911f"
                e.target.style.transform = "scale(1.05)"
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#C9A227"
                e.target.style.transform = "scale(1)"
              }}
            >
              Agendar Consulta
            </button>

            <a
              href="https://wa.me/573127944196?text=Hola,%20quisiera%20recibir%20asesoría%20jurídica."
              target="_blank"
              rel="noopener noreferrer"
              className="btnSecondary"
              style={styles.secondaryButton}
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section style={styles.areasSection}>
        <h2 style={styles.sectionTitle}>Áreas de Práctica</h2>

        <div className="cardContainer">
          {areas.map((area, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)"
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)"
                e.currentTarget.querySelector(".gold-line").style.width = "100%"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.05)"
                e.currentTarget.querySelector(".gold-line").style.width = "0%"
              }}
            >
              <h3 style={{ textAlign: "center", marginBottom: "15px", color: "#0A1F44" }}>
                {area.title}
              </h3>

              <p>{area.description}</p>

              <div className="gold-line" style={styles.goldLine}></div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          ...styles.aboutSection,
          opacity: 1,
          transform: "translateY(0)",
          transition: "all 0.8s ease"
        }}
      >
        <div style={styles.aboutContainer}>
          <div style={styles.aboutText}>
            <h2 style={styles.aboutTitle}>Quiénes Somos</h2>

            <p style={styles.aboutParagraph}>
              Somos una firma jurídica comprometida con la excelencia, la ética profesional
              y la defensa estratégica de los intereses de nuestros clientes.
            </p>

            <p style={styles.aboutParagraph}>
              Nuestra práctica se fundamenta en el estudio riguroso del derecho,
              la experiencia procesal y un enfoque personalizado que garantiza
              soluciones jurídicas sólidas y efectivas.
            </p>

            <div style={styles.aboutDivider}></div>

            <p style={styles.aboutSignature}>
              Compromiso • Ética • Rigor Jurídico
            </p>
          </div>

          <div style={styles.aboutImage}></div>
        </div>
      </section>

      <section style={styles.valuesSection}>
        <div style={styles.valuesContainer}>
          <h2 style={styles.valuesTitle}>Nuestros Valores</h2>

          <div className="valuesGrid">
            <div style={styles.valueCard}>
              <h3 style={styles.valueHeading}>Ética Profesional</h3>
              <p style={styles.valueText}>
                Actuamos con integridad, transparencia y respeto absoluto por la ley y nuestros clientes.
              </p>
            </div>

            <div style={styles.valueCard}>
              <h3 style={styles.valueHeading}>Rigor Jurídico</h3>
              <p style={styles.valueText}>
                Cada caso es analizado con profundidad técnica y estrategia procesal sólida.
              </p>
            </div>

            <div style={styles.valueCard}>
              <h3 style={styles.valueHeading}>Compromiso</h3>
              <p style={styles.valueText}>
                Acompañamos a nuestros clientes en cada etapa del proceso con responsabilidad y dedicación.
              </p>
            </div>

            <div style={styles.valueCard}>
              <h3 style={styles.valueHeading}>Confianza</h3>
              <p style={styles.valueText}>
                Construimos relaciones basadas en resultados, confidencialidad y seguridad jurídica.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.whySection}>
        <div style={styles.whyContainer}>
          <h2 style={styles.whyTitle}>¿Por qué elegirnos?</h2>

          <div className="whyContent">
            <div style={styles.whyItem}>
              <h3 style={styles.whyHeading}>Experiencia Procesal</h3>
              <p style={styles.whyText}>
                Conocimiento sólido del sistema judicial colombiano y experiencia en litigios estratégicos.
              </p>
            </div>

            <div style={styles.whyItem}>
              <h3 style={styles.whyHeading}>Atención Personalizada</h3>
              <p style={styles.whyText}>
                Cada caso recibe un análisis individual y un acompañamiento cercano en todas sus etapas.
              </p>
            </div>

            <div style={styles.whyItem}>
              <h3 style={styles.whyHeading}>Estrategia Jurídica Clara</h3>
              <p style={styles.whyText}>
                Diseñamos soluciones jurídicas con enfoque preventivo y procesal para minimizar riesgos.
              </p>
            </div>

            <div style={styles.whyItem}>
              <h3 style={styles.whyHeading}>Compromiso con Resultados</h3>
              <p style={styles.whyText}>
                Trabajamos con responsabilidad y determinación para proteger los intereses de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.ctaSection}>
        <div style={styles.ctaContainer}>
          <h2 style={styles.ctaTitle}>
            Proteja sus derechos con respaldo jurídico sólido
          </h2>

          <p style={styles.ctaText}>
            Estamos preparados para brindarle asesoría estratégica y representación
            legal con compromiso, ética y experiencia.
          </p>

          <div style={styles.ctaButtons}>
            <button
              style={styles.ctaPrimary}
              onClick={onOpenForm}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#b8911f"
                e.target.style.transform = "scale(1.05)"
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#C9A227"
                e.target.style.transform = "scale(1)"
              }}
            >
              Agendar Consulta
            </button>

            <a
              href="https://wa.me/573127944196?text=Hola,%20quiero%20agendar%20una%20consulta%20jurídica."
              target="_blank"
              rel="noopener noreferrer"
              className="btnCtaSecondary"
              style={styles.ctaSecondary}
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <div className="footerContainer">
          <div style={styles.footerColumn}>
            <h3 style={styles.footerTitle}>Firma Jurídica</h3>
            <p style={styles.footerText}>
              Asesoría y representación legal integral en Colombia.
            </p>
          </div>

          <div style={styles.footerColumn}>
            <h4 style={styles.footerSubtitle}>Contacto</h4>
            <p style={styles.footerText}>📞 +57 312 794 4196</p>
            <p style={styles.footerText}>✉ contacto@firmajuridica.com</p>
            <p style={styles.footerText}>
              📍 Carrera 8 #21-43 Oficina 210 Edificio Gaitán<br />
              Bogotá, Colombia
            </p>
          </div>

          <div style={styles.footerColumn}>
            <h4 style={styles.footerSubtitle}>Horarios</h4>
            <p style={styles.footerText}>Lunes a Viernes</p>
            <p style={styles.footerText}>8:00 a.m. – 6:00 p.m.</p>
          </div>
        </div>

        <div style={styles.footerBottom}>
          © {new Date().getFullYear()} Firma Jurídica. Todos los derechos reservados.
        </div>
      </footer>
    </>
  )
}

const styles = {
  hero: {
    height: "90vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  overlay: {
    backgroundColor: "rgba(10, 31, 68, 0.88)",
    padding: "60px 40px",
    textAlign: "center",
    color: "white",
    maxWidth: "900px",
    borderRadius: "10px",
    backdropFilter: "blur(2px)"
  },

  title: {
    marginBottom: "25px",
    lineHeight: "1.2",
    letterSpacing: "1px"
  },

  subtitle: {
    fontSize: "20px",
    marginBottom: "40px",
    opacity: "0.9"
  },

  buttons: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap"
  },

  primaryButton: {
    backgroundColor: "#C9A227",
    color: "#0A1F44",
    padding: "14px 30px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    borderRadius: "6px",
    transition: "all 0.3s ease",
  },

  secondaryButton: {
    backgroundColor: "transparent",
    color: "white",
    padding: "14px 30px",
    border: "1.5px solid white",
    cursor: "pointer",
    borderRadius: "6px",
    transition: "all 0.3s ease",
  },

  areasSection: {
    padding: "100px 20px",
    backgroundColor: "white",
    textAlign: "center",
    marginTop: "-5px"
  },

  sectionTitle: {
    fontSize: "36px",
    marginBottom: "50px",
    color: "#0A1F44"
  },

  card: {
    backgroundColor: "#f4f6f9",
    padding: "35px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    textAlign: "left"
  },

  goldLine: {
    height: "3px",
    width: "0%",
    backgroundColor: "#C9A227",
    marginTop: "20px",
    transition: "width 0.3s ease"
  },

  aboutSection: {
    padding: "100px 20px",
    backgroundColor: "#0A1F44",
    color: "white"
  },

  aboutContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    maxWidth: "1200px",
    margin: "0 auto",
    alignItems: "center"
  },

  aboutText: {
    textAlign: "left"
  },

  aboutTitle: {
    fontSize: "36px",
    marginBottom: "25px",
    color: "#C9A227"
  },

  aboutParagraph: {
    fontSize: "18px",
    lineHeight: "1.8",
    marginBottom: "20px",
    opacity: "0.95"
  },

  aboutDivider: {
    width: "80px",
    height: "4px",
    backgroundColor: "#C9A227",
    marginTop: "30px"
  },

  aboutSignature: {
    marginTop: "25px",
    fontSize: "14px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#C9A227",
    fontWeight: "600"
  },

  valuesSection: {
    padding: "100px 20px",
    backgroundColor: "#f4f6f9",
    textAlign: "center"
  },

  valuesContainer: {
    maxWidth: "1200px",
    margin: "0 auto"
  },

  valuesTitle: {
    fontSize: "36px",
    marginBottom: "60px",
    color: "#0A1F44"
  },

  valueCard: {
    backgroundColor: "white",
    padding: "40px 30px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    transition: "all 0.3s ease",
    cursor: "default"
  },

  valueHeading: {
    color: "#C9A227",
    marginBottom: "20px",
    fontSize: "20px"
  },

  valueText: {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#333"
  },

  whySection: {
    padding: "110px 20px",
    backgroundColor: "#0A1F44",
    color: "white",
    textAlign: "center"
  },

  whyContainer: {
    maxWidth: "1100px",
    margin: "0 auto"
  },

  whyTitle: {
    fontSize: "36px",
    marginBottom: "70px",
    color: "#C9A227"
  },

  whyItem: {
    textAlign: "left"
  },

  whyHeading: {
    fontSize: "20px",
    marginBottom: "15px",
    color: "#ffffff"
  },

  whyText: {
    fontSize: "16px",
    lineHeight: "1.8",
    opacity: "0.9"
  },

  ctaSection: {
    padding: "120px 20px",
    backgroundColor: "#C9A227",
    textAlign: "center"
  },

  ctaContainer: {
    maxWidth: "900px",
    margin: "0 auto"
  },

  ctaTitle: {
    fontSize: "38px",
    marginBottom: "25px",
    color: "#0A1F44"
  },

  ctaText: {
    fontSize: "18px",
    marginBottom: "45px",
    lineHeight: "1.8",
    color: "#0A1F44"
  },

  ctaButtons: {
    display: "flex",
    gap: "25px",
    justifyContent: "center",
    flexWrap: "wrap"
  },

  ctaPrimary: {
    backgroundColor: "#0A1F44",
    color: "#ffffff",
    padding: "15px 35px",
    border: "none",
    borderRadius: "6px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease"
  },

  ctaSecondary: {
    backgroundColor: "transparent",
    color: "#ffffff",
    padding: "15px 35px",
    border: "2px solid #ffffff",
    borderRadius: "6px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease"
  },

  aboutImage: {
    flex: "1",
    minWidth: "320px",
    height: "450px",
    position: "relative",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
    backgroundImage:
      "linear-gradient(rgba(10,31,68,0.35), rgba(10,31,68,0.35)), url('https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1400&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },

  footer: {
    backgroundColor: "#0A1F44",
    color: "white",
    paddingTop: "70px"
  },

  footerColumn: {
    textAlign: "left"
  },

  footerTitle: {
    color: "#C9A227",
    marginBottom: "20px"
  },

  footerSubtitle: {
    color: "#C9A227",
    marginBottom: "15px"
  },

  footerText: {
    marginBottom: "10px",
    opacity: "0.85",
    fontSize: "15px"
  },

  footerBottom: {
    borderTop: "1px solid rgba(255,255,255,0.2)",
    padding: "20px",
    textAlign: "center",
    fontSize: "14px",
    opacity: "0.7"
  }
}


export default Home