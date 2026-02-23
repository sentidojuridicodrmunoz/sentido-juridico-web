import nodemailer from 'nodemailer'
import { ENV } from '../config/env.js'

// 🔌 Configuración del transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: ENV.EMAIL_USER,
    pass: ENV.EMAIL_PASS
  }
})


// 📩 Email al cliente
export const enviarConfirmacionCliente = async (cita) => {
  const mailOptions = {
    from: `"Sentido Jurídico" <${ENV.EMAIL_USER}>`,
    to: cita.correo,
    subject: 'Confirmación de cita - Sentido Jurídico',
    html: `
      <h2>Tu cita ha sido agendada</h2>
      <p><strong>Nombre:</strong> ${cita.cliente}</p>
      <p><strong>Fecha:</strong> ${cita.fecha}</p>
      <p><strong>Hora:</strong> ${cita.hora}</p>
      <p>Nos pondremos en contacto contigo si es necesario.</p>
    `
  }

  await transporter.sendMail(mailOptions)
}


// 📩 Email al abogado
export const enviarNotificacionAdmin = async (cita) => {
  const mailOptions = {
    from: `"Sistema Citas" <${ENV.EMAIL_USER}>`,
    to: ENV.EMAIL_USER,
    subject: 'Nueva cita agendada',
    html: `
      <h2>Nueva cita registrada</h2>
      <p><strong>Cliente:</strong> ${cita.cliente}</p>
      <p><strong>Email:</strong> ${cita.correo}</p>
      <p><strong>Teléfono:</strong> ${cita.telefono}</p>
      <p><strong>Fecha:</strong> ${cita.fecha}</p>
      <p><strong>Hora:</strong> ${cita.hora}</p>
      <p><strong>Notas:</strong> ${cita.notas}</p>
    `
  }

  await transporter.sendMail(mailOptions)
}