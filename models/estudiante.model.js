import { pool } from "../database/connection.js"

//1. Crear una función asíncrona para registrar un nuevo estudiante en la base de datos.
const create = async (estudiante) => {
    const querySQL =
        'INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4) RETURNING *;'
    const { rows } = await pool.query(querySQL, [estudiante.nombre, estudiante.rut, estudiante.curso, estudiante.nivel])
    return rows
}

//3. Crear una función asíncrona para obtener por consola todos los estudiantes registrados. 
const findAll = async () => {
    const { rows } = await pool.query("SELECT * FROM estudiantes")
    return rows
}

//2. Crear una función asíncrona para obtener por consola el registro de un estudiante por medio de su rut. 
const findOneById = async (rut) => {
    const querySQL = 'SELECT * FROM estudiantes WHERE rut = $1'
    const { rows } = await pool.query(querySQL, [rut])
    return rows[0]
}

//4. Crear una función asíncrona para actualizar los datos de un estudiante en la base de datos. 
const update = async (estudiante) => {
    const querySQL = 'UPDATE estudiantes SET nombre = $1, curso = $2, nivel = $3 WHERE rut = $4 RETURNING *;'
    const { rows } = await pool.query(querySQL, [estudiante.nombre, estudiante.curso, estudiante.nivel, estudiante.rut])
    return rows
}

//5. Crear una función asíncrona para eliminar el registro de un estudiante de la base de datos. 
const remove = async (rut) => {
    const querySQL = 'DELETE FROM estudiantes WHERE rut  = $1 RETURNING *;'
    const { rows } = await pool.query(querySQL, [rut])
    return rows
}

export const estudianteModel = {
    create,
    findAll,
    findOneById,
    update,
    remove
}