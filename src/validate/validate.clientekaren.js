import { validacion } from "express-validator"

export const validationResult =(req,res, next) => {

    const error = validacion(req)
    if (!error.isEmpty()) {
        return res.status(200).json({error:error.array()})
    }

    next()
}

