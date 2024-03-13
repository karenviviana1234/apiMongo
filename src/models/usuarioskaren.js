import mongoose from "mongoose";

const usuarios = mongoose.Schema({
    identificacion: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const Usuario = mongoose.model('Usuario', usuarios)
export default Usuario