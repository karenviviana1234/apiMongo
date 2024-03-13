import { Router } from "express";
import {  eliminarArticulos, listarArticulos, registarArticulos } from "../controller/controller.intereseskaren.js";
import validarToken from '../controller/autenticacionkaren.js';
import { interesesvalidacion } from "../validate/validate.intereseskaren.js";


export const rutaintereses = Router();
rutaintereses.post("/registrarCliente",interesesvalidacion,registarArticulos)
rutaintereses .delete("/eliminarcliente/:_id",validarToken, eliminarArticulos)

export default rutaintereses;



