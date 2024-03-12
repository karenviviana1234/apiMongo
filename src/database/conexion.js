import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/prenderia')
        console.log("conecta da base de datos")
    } catch (error) {
        console.log(error);
    }
}