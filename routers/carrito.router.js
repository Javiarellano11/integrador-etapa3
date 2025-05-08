import express from 'express'
const routerCarrito = express.Router()
import controller from '../controllers/carrito.controller.js'

routerCarrito.post('/', controller.guardarCarrito)

export default routerCarrito