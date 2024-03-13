import { Router } from "express";
import { alquilervalidacion } from "../validate/validate.alquilerkaren.js";
import { validarToken } from "../controller/autenticacionkaren.js";
import { eliminarInteres, registrarInteres } from "../controller/controller.intereseskaren.js";

const rutaAlquiler = Router()

rutaAlquiler.post('/registrar',validarToken, alquilervalidacion, registrarInteres)
rutaAlquiler.put('/actualizar/:id',validarToken, alquilervalidacion, eliminarInteres)

export default rutaAlquiler