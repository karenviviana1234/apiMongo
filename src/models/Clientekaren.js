import mongoose from 'mongoose'
const Cliente = mongoose.Schema(
    {
        Identificacion:{
          type: Number,
          require:true,
          integer:true
        },
        Nombre:{
            type: String,
            require:true
          },
          Direccion:{
            type: String,
            require:true
          },
          Telefono:{
            type:Number,
            require:true
          },
          Fecha_de_nacimiento:{
            type: Date,
            require:true
          }
    },
        
    {
      timestamps:true
     }
)
const Clientes=mongoose.model("Clientes",Cliente)
export default Clientes