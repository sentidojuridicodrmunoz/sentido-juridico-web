import { crearCitaRepo, obtenerHorasOcupadas } from '../repositories/appointments.repository.js'
import { 
  enviarConfirmacionCliente,
  enviarNotificacionAdmin
} from '../services/email.service.js'

// GET disponibilidad
export const obtenerDisponibilidad = async (req, res) => {
  try {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({
        success: false,
        message: "Fecha requerida"
      });
    }

    const horasOcupadas = await obtenerHorasOcupadas(date);

    return res.json({
      success: true,
      data: horasOcupadas
    });

  } catch (error) {
    console.error("ERROR DISPONIBILIDAD:", error);

    res.status(500).json({
      success: false,
      message: "Error consultando disponibilidad"
    });
  }
};

// POST crear cita
export const crearCita = async (req, res) => {
  try {
    const { name, email, phone, date, time, message } = req.body;

    if (!name || !email || !phone || !date || !time) {
      return res.status(400).json({
        success: false,
        message: 'Faltan campos obligatorios'
      });
    }

    const nuevaCita = await crearCitaRepo({
      cliente: name,
      correo: email,
      telefono: phone,
      fecha: date,
      hora: time,
      notas: message || ''
    });

    await enviarConfirmacionCliente(nuevaCita);
    await enviarNotificacionAdmin(nuevaCita);

    return res.status(201).json({
      success: true,
      data: nuevaCita
    });

  } catch (error) {
    console.error('ERROR CREAR CITA:', error);

    if (error.code === '23505' && error.constraint === 'unique_slot') {
      return res.status(409).json({
        success: false,
        message: 'Ya existe una cita reservada para esa fecha y hora'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
};