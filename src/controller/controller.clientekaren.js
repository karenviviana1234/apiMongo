import Clientes from '../models/Clientekaren.js'

export const registarCliente = async(req, res)=>{

try {
    const create = await Clientes.create(req.body)
if (create) {
    res.status(200).json({
        message:"Registrado con exito",create
    }) 
}else{
    res.status(404).json({
        message:"No se puedo regsitrar"
    })
}
 
} catch (error) {
    res.status(500).json({
        message:"Error en el sistema"+error
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
                message:"No se encontraron Clientes"
            })
        }
    } catch (error) {
        res.status(500).json({
            message:"Error en el sistema"+ error
        })
    }
}

export const eliminarCliente = async (req, res) => {
    try {
        const { _id } = req.params;
        const cliente = await Clientes.findByIdAndDelete(_id);

        if (!cliente) {
            return res.status(404).json({
                message: "no se encontró un cliente para eliminar"
            });
        }
        res.status(200).json({
            message: "Cliente eliminado exitosamente",
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
            return res.status(404).json({
                message: "no se encontró un cliente para actualizar"
            });
        }
        res.status(200).json({
            message: "cliente actualizado exitosamente",
        });
    } catch (error) {        res.status(500).json({ message: error.message });
    }
};