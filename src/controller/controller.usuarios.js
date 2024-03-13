import Usuario from "../models/usuarioskaren.js";

export const registarUsuarios = async (req, res) => {
    try {
        const user = Usuario.create(req.body)

        if(user){
            res.status(200).json({Message: 'User registrado'})
        }else{
            res.status(403).json({Message: 'Usuario no registrado'})
        }
    } catch (error) {
        res.status(500).json({Message: 'Error del servidor' + error})
    }
}