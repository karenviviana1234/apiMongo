import Clientes from '../models/Clientekaren.js'

export const registarCliente = async(req, res)=>{

try {
    const create = await Clientes.create(req.body)
if (create) {
    res.status(200).json({
        "mensaje":create
    }) 
}else{
    res.status(404).json({
        "mensaje":"algo salio mal"
    })
}
 
} catch (error) {
    res.status(500).json({
        "mensaje":error.message
    })
}
}
export const listarCliente = async(req, res)=>{
    try {
        
        const show = await Clientes.find({})
        if (show) {
            res.status(200).json(show)
        }else{
            res.status(404).json({
                "mensaje":"Algo salio mal"
            })
        }
    } catch (error) {
        res.status(500).json({
            "mensaje":error.message
        })
    }
}
export const buscarCliente = async (req, res) => {
    try {
        const {_id}=req.params
        const show = await Clientes.findById(_id);
        if (show) {
            res.status(200).json(show); 
        } else {
            res.status(404).json({
                "mensaje": "no se encontró el cliente"
            });
        }

    } catch (error) {
        res.status(500).json({
            "mensaje": error.message
        });
    }
};
export const eliminarCliente = async (req, res) => {
    try {
        const { _id } = req.params;
        const cliente = await Clientes.findByIdAndDelete(_id);

        if (!cliente) {
            return res.status(404).json({
                "mensaje": "no se encontró un cliente para eliminar"
            });
        }
        res.status(200).json({
            "mensaje": "Cliente eliminado exitosamente",
            "interes": cliente  
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const actualizarCliente = async (req, res) => {
    try {
        const { _id } = req.params;
        const consulta = await Clientes.findByIdAndUpdate(_id, req.body, { new: true });

        if (!consulta) {
            // Si no se encontró el interés para eliminar, envía un mensaje de error
            return res.status(404).json({
                "mensaje": "no se encontró un cliente para actualizar"
            });
        }
        // Si el interés fue encontrado y eliminado exitosamente, envía un mensaje de éxito
        res.status(200).json({
            "mensaje": "cliente actualizado exitosamente",
        });
    } catch (error) {
        // Si hay un error, captúralo y envía un mensaje de error
        res.status(500).json({ message: error.message });
    }
};