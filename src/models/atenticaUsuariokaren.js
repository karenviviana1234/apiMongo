import mongoose from 'mongoose'

const Usuario = mongoose.Schema(
    {
        Identificacion:{
          type: Number,
          require:true,
          integer:true
        },
        password:{
            type: String,
            require:true
          }
    },
        
    
)
const Usuarios=mongoose.model("Usuario",Usuario)
export default Usuarios