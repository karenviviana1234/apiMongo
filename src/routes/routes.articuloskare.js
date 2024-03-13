import { Router } from "express";
import { validarToken } from "../controller/autenticacionkaren.js";
import { articulosvalidacion } from "../validate/validate.articulos.js";
import { listarArticulo, registrarArticulo } from "../controller/controllerArticuloskaren.js";

const rutaArticulo = Router()

rutaArticulo.post('/registrar',validarToken, articulosvalidacion, registrarArticulo)
rutaArticulo.get('/listar',validarToken, listarArticulo)

export default rutaArticulo