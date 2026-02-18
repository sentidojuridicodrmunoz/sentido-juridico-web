function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        Sentido Jurídico Asesores
      </div>

      <ul style={styles.menu}>
        <li>Inicio</li>
        <li>Áreas</li>
        <li>Equipo</li>
        <li>Contacto</li>
      </ul>
    </nav>
  )
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    backgroundColor: "#0A1F44",
    color: "white",
    flexWrap: "wrap"
  },
  logo: {
    fontWeight: "bold",
    fontSize: "18px"
  },
  menu: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    cursor: "pointer"
  }
}

export default Navbar
