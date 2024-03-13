import mongoose from "mongoose"

export const dbconnect = async () => {
   
    try {
        await mongoose.connect('mongodb://localhost/prenderia')
        console.log('Conexion exitosa')
    } catch (error) {
        console.log('Error de conexion' + error)
    }
}

export const SECRET_TOKEN = 'misecreto'

