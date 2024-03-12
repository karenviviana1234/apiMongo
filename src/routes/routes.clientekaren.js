import { Router } from "express";
import { actualizarCliente, buscarCliente, eliminarCliente, listarCliente, registarCliente } from "../controller/controller.clientekaren.js";
import validarToken from '../controller/autenticacionkaren.js';
export const rutacliente = Router();
rutacliente.post("/registrarCliente",registarCliente)
rutacliente.get("/listarcliente", validarToken,listarCliente)
rutacliente .get("/buscarcliente/:_id", validarToken,buscarCliente)
rutacliente .delete("/eliminarcliente/:_id",validarToken, eliminarCliente)
rutacliente .put("/actualizarcliente/:_id", validarToken,actualizarCliente)

export default rutacliente;



