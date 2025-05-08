import express from 'express'
import 'dotenv/config'
import path from 'node:path'
import cors from 'cors'
import connection from './utils/connection.js'
import routerProductos from './routers/productos.router.js'
import routerUploads from './routers/uploads.router.js'
import routerCarrito from './routers/carrito.router.js'

// ! CONSTANTES
const app = express()
const PORT = process.env.PORT
const URI_DB = process.env.URI_REMOTA
const URL_FRONT = process.env.URL_FRONTEND_CORS
// console.log(URI_DB)

// ! CONFIGURACIONES
const corsConfig = {
  origin: URL_FRONT //http:// de NETLIFY
}

// ! MIDDLEWARES
app.use(express.json()) // Le traduce a Express el objeto que llega por el body
app.use(express.static(path.join('public')))
app.use(cors(corsConfig)) // cors () -> todos los origenes pueden acceder



// ! RUTAS

app.use('/api/v1/productos', routerProductos)
app.use('/api/v1/uploads', routerUploads)
app.use('/api/v1/carrito', routerCarrito)


app.get('/', (req, res) => {
  res.send('Hello World!')
})



/* app.all('*', (req, res) => {
  res.status(404).json({
    ruta: `${req.url}`,
    method: `${req.method}`,
    mensaje: "No se encontró el recurso al que estás queriendo acceder"
  })
}) */

// ! ARRANQUE DEL SERVIDOR
app.listen(PORT, (err) => {
    if (err) throw new Error('No se pudo levantar el servidor')
    console.log(`Servidor funcionando en: http://localhost:${PORT}`)
    connection(URI_DB)
})