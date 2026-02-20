import express from 'express'
import { crearCita } from '../controllers/appointments.controller.js'

const router = express.Router()

router.post('/appointments', crearCita)

export default router
