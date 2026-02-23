import { crearCitaRepo } from '../repositories/appointments.repository.js'

export const crearCita = async (req, res) => {
  try {
    const { name, email, phone, date, time, message } = req.body

    // Validación básica
    if (!name || !email || !phone || !date || !time) {
      return res.status(400).json({
        success: false,
        message: 'Faltan campos obligatorios'
      })
    }

    const nuevaCita = await crearCitaRepo({
      cliente: name,
      correo: email,
      telefono: phone,
      fecha: date,
      hora: time,
      notas: message || ''
    })

    res.status(201).json({
      success: true,
      data: nuevaCita
    })

  } catch (error) {
  console.error('ERROR CREAR CITA:', error)

  // Error de slot duplicado
  if (error.code === '23505' && error.constraint === 'unique_slot') {
    return res.status(409).json({
      success: false,
      message: 'Ya existe una cita reservada para esa fecha y hora'
    })
  }

  res.status(500).json({
    success: false,
    message: 'Error interno del servidor'
  })
}
}
