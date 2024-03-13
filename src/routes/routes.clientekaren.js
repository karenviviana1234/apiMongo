import { Router } from "express";
import { actualizarCliente, eliminarCliente, listarCliente, registarCliente } from "../controller/controller.clientekaren.js";
import validarToken from '../controller/autenticacionkaren.js';
import { clientevalidacion } from "../validate/validate.articulos.js";


export const rutacliente = Router();

rutacliente.post("/registrarCliente",clientevalidacion,registarCliente)
rutacliente.get("/listarcliente", validarToken,listarCliente)
rutacliente .delete("/eliminarcliente/:_id",validarToken, eliminarCliente)
rutacliente .put("/actualizarcliente/:_id", validarToken,clientevalidacion,actualizarCliente)

export default rutacliente;



