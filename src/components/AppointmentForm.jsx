import { useEffect, useState } from "react";

export default function AppointmentForm({ onClose }) {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    area: "",
    message: "",
    date: "",
    time: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    setLoading(true);

    try {
      console.log("Enviando a:", "http://localhost:4000/api/appointments");
      const response = await fetch("http://localhost:4000/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          date: formData.date,
          time: formData.time,
          message: formData.message + " | Área: " + formData.area
        })
      });

      const text = await response.text();

let data;

try {
  data = JSON.parse(text);
} catch (err) {
  console.error("Respuesta no es JSON:", text);
  throw new Error("El servidor no respondió correctamente");
}

      if (!response.ok) {
        throw new Error(data.message || "Error al crear cita");
      }

      setSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        area: "",
        message: "",
        date: "",
        time: ""
      });

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>

        <button style={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <h2 style={styles.title}>Agendar Consulta Jurídica</h2>

        <form onSubmit={handleSubmit} style={styles.form}>

          <input name="name" value={formData.name} onChange={handleChange} placeholder="Nombre completo" style={styles.input} required />

          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Teléfono" style={styles.input} required />

          <input name="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico" style={styles.input} required />

          <input type="date" name="date" value={formData.date} onChange={handleChange} style={styles.input} required />

          <input type="time" name="time" value={formData.time} onChange={handleChange} style={styles.input} required />

          <select name="area" value={formData.area} onChange={handleChange} style={styles.input} required>
            <option value="">Seleccione área</option>
            <option>Civil</option>
            <option>Laboral</option>
            <option>Penal</option>
            <option>Familia</option>
            <option>Ejecutivos</option>
          </select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe tu caso"
            style={styles.textarea}
            required
          />

          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>Cita agendada correctamente</p>}

          <button type="submit" style={styles.submitBtn} disabled={loading}>
            {loading ? "Enviando..." : "Agendar cita"}
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