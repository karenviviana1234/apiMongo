import { Router } from "express";
import usuarios from '../models/atenticaUsuariokaren.js';
import jwt from 'jsonwebtoken';
export const  secreto ='../database/config.js';
export const rutavalidacion = Router();

rutavalidacion.post('/validacion', (req, res) => {
    const { identificacion, password } = req.body;
    const usuario = new usuarios({
        identificacion: identificacion,
        password: password
    });
    console.log(usuario);

    if (usuario && usuario._id) {
        const token = jwt.sign({ id: usuario._id }, secreto.secreto, {
            expiresIn: 60 * 60 * 24
        });

        res.json({ auth: true, token });
    } else {
        console.error('Error: usuario o usuario._id es undefined.');
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});


export const validarToken = async (req, res, next) => {
    try {
        let tokenClient = req.headers['token'];

        if (!tokenClient) {
            return res.status(403).json({ 
                auth:false ,
                message: 'Token es requerido' });
        } else {
            const token = jwt.verify(tokenClient, secreto.secreto, (error,decoded) => {
                if (error) {
                    return res.status(403).json({ message: 'Token inválido' });
                } else {
                    next();
                }
            });
        }
    } catch (error) {
        return res.status(500).json({ status: 500, message: 'Error del servidor' + error });
    }
};


export default rutavalidacion ;
