import Interes from "../models/intereseskaren.js";

export const registrarInteres = async (req, res) => {
    try {
        const interes = await Interes.create(req.body)

        if(interes){
            res.status(200).json({Message: 'Interes registrado'})
        }else{
            res.status(403).json({Message: 'Interes no fue registrado'})
        }
    } catch (error) {
        res.status(500).json({Message: 'Error del servidor ' + error})
    }
}

export const eliminarInteres = async (req, res) => {
    try {
        const interes = await Interes.findByIdAndUpdate(req.params.id, estado="pagado");

        if(interes){
            res.status(200).json({Message: 'Se pago el interes'})
        }else{
            res.status(404).json({Message: 'Interes no fue pagado'})
        }
    } catch (error) {
        res.status(500).json({Message: 'Error del servidor' + error})
    }
}