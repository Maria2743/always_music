import { estudianteModel } from "../models/estudiante.model.js"

const createEstudiante = async(req, res) => {
    try{
        const {nombre, rut, curso, nivel} = req.body
        const newEstudiante = {
            nombre,
            rut,
            curso,
            nivel
        }
        const estudiante = await estudianteModel.create(newEstudiante)
        return res.json(estudiante)
    }catch(error){
        console.log(error)
        return res.status(500).json({ok: false})
    }
}

const getEstudiantes = async (req, res) => {
    try{
        const estudiantes = await estudianteModel.all()
        return res.json(estudiantes)
    }catch(error){
        console.log(error)
        return res.status(500).json({ok: false})
    }
}

const getEstudiante = async (req, res) => {
    try{
        const {rut} = req.params
        const estudiante = await estudianteModel.one(rut)
        if (estudiante) {
            return res.json(estudiante)
        }else{
            return res.status(404).json({ok: false, message: 'Estudiante no encontrado'})
        }
    }catch(error){
        console.log(error)
        return res.status(500).json({ok: false})
    }
}
const updateEstudiante = async(req, res) => {
    try{
        const {nombre, curso, nivel} = req.body
        const {rut} = req.params
        const updateEstudiante = { rut, nombre, curso, nivel}
        const estudiante = await estudianteModel.update(updateEstudiante)
        return res.json(estudiante)
    }catch(error){
        console.log(error)
        return res.status(500).json({ok: false})
    }
}

const removeEstudiante = async(req, res) => {
    try{
        const {rut} = req.params
        const estudiante = await estudianteModel.remove(rut)
        return res.json(estudiante)
    }catch(error){
        console.log(error)
        return res.status(500).json({ok: false})
    }
}

export const estudianteController = {
    createEstudiante,
    getEstudiantes,
    getEstudiante,
    updateEstudiante,
    removeEstudiante
}