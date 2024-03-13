import { Router } from "express";
import { validarCliente} from "../controller/autenticacionkaren.js";

const rutaValidacion = Router()

rutaValidacion.post('/validacion', validarCliente)

export default rutaValidacion