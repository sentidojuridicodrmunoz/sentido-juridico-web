import { Router } from 'express'
import { crearCita, obtenerDisponibilidad } from '../controllers/appointments.controller.js'

const router = Router()

router.get('/appointments', obtenerDisponibilidad)
router.post('/appointments', crearCita)

export default router