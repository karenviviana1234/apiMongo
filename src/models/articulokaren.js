import mongoose from 'mongoose'

const Articulo = mongoose.Schema(
    {
        NombreArticulo:{
            type: String,
            require:true
          },
          TipoArticulo:{
            type: String,
            enum: ["Vehiculo", "Oro", "Electrodomesticos", "Maquinaria", "Herramienta"],
            required: true
        },
        estado: {
            type: String,
            enum: ["activo", "inactivo"],
            required: true
        }
    },
        
    {
      timestamps:true
     }
)
const Articulos=mongoose.model("Articulos",Articulo)
export default Articulos
