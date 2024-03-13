import { Router } from "express";
import { registarUsuarios } from "../controller/controller.usuarios.js";
import { usuariovalidacion } from "../validate/validate.usuarioskaren.js";


const rutaUsuario = Router()

rutaUser.post('/registrar',usuariovalidacion,registarUsuarios )

export default rutaUser