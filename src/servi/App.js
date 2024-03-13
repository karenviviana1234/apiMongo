import express from 'express'
import rutaValidacion from './routes/LAUP.route.auth.js'
import rutacliente from '../routes/routes.clientekaren.js'
import rutaAlquiler from '../routes/routes.alquileskaren.js'
import rutaArticulo from '../routes/routes.articuloskare.js'
import rutaintereses from '../routes/routes.interesekaren.js'
import rutaUsuario from '../routes/routes.usuarioskaren.js'

import { dbconnect } from './config.js'

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())

app.use( rutacliente)
app.use( rutaAlquiler)
app.use( rutaArticulo)
app.use( rutaintereses)
app.use( rutaUsuario)
app.use(rutaValidacion)

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('./public'))

app.get('/document', (req, res) => {
    res.render('document.ejs')
})

dbconnect();

export default app