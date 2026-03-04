import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { areas } from "../data/areasData"

function Navbar() {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    setOpen(prev => !prev)
  }

  // Cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>
          Sentido Jurídico Asesores
        </Link>
      </div>

      <ul style={styles.menu}>
        <li>
          <Link to="/" style={styles.link}>
            Inicio
          </Link>
        </li>

        <li style={{ position: "relative" }} ref={dropdownRef}>
          <span
            style={styles.link}
            onClick={toggleDropdown}
          >
            Áreas
          </span>

          {open && (
            <div style={styles.dropdown}>
              {areas.map(area => (
                <Link
                  key={area.slug}
                  to={`/areas/${area.slug}`}
                  style={styles.dropdownItem}
                  onClick={() => setOpen(false)}
                >
                  {area.title}
                </Link>
              ))}
            </div>
          )}
        </li>

        <li style={styles.link}>Equipo</li>
        <li style={styles.link}>Contacto</li>
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
    position: "sticky",
    top: 0,
    zIndex: 1000
  },
  logo: {
    fontWeight: "bold",
    fontSize: "18px"
  },
  logoLink: {
    textDecoration: "none",
    color: "white"
  },
  menu: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    alignItems: "center"
  },
  link: {
    textDecoration: "none",
    color: "white",
    cursor: "pointer"
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "white",
    color: "#0A1F44",
    borderRadius: "6px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    overflow: "hidden",
    minWidth: "220px",
    marginTop: "10px"
  },
  dropdownItem: {
    display: "block",
    padding: "12px 20px",
    textDecoration: "none",
    color: "#0A1F44",
    borderBottom: "1px solid #eee",
    cursor: "pointer"
  }
}

export default Navbar