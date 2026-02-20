import pool from '../config/db.js'

export const crearCitaRepo = async (cita) => {
  const query = `
    INSERT INTO appointments
    (cliente, correo, telefono, fecha, hora, notas, estado)
    VALUES ($1, $2, $3, $4, $5, $6, 'pendiente')
    RETURNING *
  `

  const values = [
    cita.cliente,
    cita.correo,
    cita.telefono,
    cita.fecha,
    cita.hora,
    cita.notas
  ]

  const result = await pool.query(query, values)

  return result.rows[0]
}
