import { useEffect } from "react";

export default function AppointmentForm({ onClose }) {

  useEffect(() => {
    // bloquear scroll del fondo
    document.body.style.overflow = "hidden";

    // permitir cerrar con ESC
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    alert("Intentando enviar cita...");

    // Aquí va tu fetch al backend
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>

        <button style={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <h2 style={styles.title}>Agendar Consulta Jurídica</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input placeholder="Nombre completo" style={styles.input} required />
          <input placeholder="Teléfono" style={styles.input} required />
          <input placeholder="Correo electrónico" style={styles.input} required />

          <select style={styles.input} required>
            <option value="">Seleccione área</option>
            <option>Civil</option>
            <option>Laboral</option>
            <option>Penal</option>
            <option>Familia</option>
          </select>

          <textarea
            placeholder="Describe tu caso"
            style={styles.textarea}
            required
          />

          <button type="submit" style={styles.submitBtn}>
            Agendar cita
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    width: "90%",
    maxWidth: "500px",
    position: "relative",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    animation: "fadeIn 0.3s ease",
  },
  closeBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    border: "none",
    background: "transparent",
    fontSize: "20px",
    cursor: "pointer",
  },
  title: {
    marginBottom: "20px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    minHeight: "80px",
  },
  submitBtn: {
    marginTop: "10px",
    padding: "12px",
    backgroundColor: "#0d3b66",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};