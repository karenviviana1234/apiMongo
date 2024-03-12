import express  from 'express' ;
import { connectDB } from './src/database/conexion.js';
import rutacliente from './src/routes/routes.clientekaren.js';
import  rutavalidacion from './src/controller/autenticacionkaren.js'



const servidor = express();
servidor.use(express.json());

servidor.use(rutacliente);
servidor.use(rutavalidacion);

servidor.listen(3000, () =>{
    console.log("esta funcionando")
})

connectDB();