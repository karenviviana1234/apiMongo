import Articulo from "../models/articulokaren.js";

export const registrarArticulo = async (req, res) => {
    try {
        const articulo = Articulo.create(req.body)

        if(articulo){
            res.status(200).json({Message: 'Articulo creado'})
            console.log(articulo)
        }else{
            res.status(403).json({Message: 'Error al crear el articulo'})
        }
    } catch (error) {
        res.status(500).json({Message: 'Error del servidor' + error})
    }
}

export const listarArticulo = async (req, res) => {
    try {
        const articulo = Articulo.findByIdAndUpdate(req.params.id, estado="inactivo")

        if(articulo){
            res.status(200).json({ Message: 'Articulo desactivado' })
        }else{
            res.status(404).json({Message: 'Not found'})
        }
    } catch (error) {
        res.status(500).json({Message: 'Error del servidor' + error})
    }
}