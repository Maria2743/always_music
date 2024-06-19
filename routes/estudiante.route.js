import { Router } from "express";
import {estudianteController} from "../controllers/estudiante.controller.js";

const router = Router()

router.post('/', estudianteController.createEstudiante)
router.get('/', estudianteController.getEstudiantes)
router.get('/:rut', estudianteController.getEstudiante)
router.put('/:rut', estudianteController.updateEstudiante)
router.delete('/:rut', estudianteController.removeEstudiante)

export default router;