import express from 'express'
import productosController from '../controllers/productos.controller.js'
const routerProductos = express.Router()

// ! CRUD PRODUCTOS

// CRUD -> R:READ ALL -> GET ALL htpp://localhost:8080/api/v1/productos



routerProductos.get('/', productosController.getAll)
  
  // CRUD -> R:READ ONE -> GET ONE htpp://localhost:8080/api/v1/productos/id



  routerProductos.get('/:id', productosController.getOne)
  
  // CRUD -> C:CREATE -> POST htpp://localhost:8080/api/v1/productos + productoACrear


  
  routerProductos.post('/', productosController.create)
  
  // CRUD -> U:UPDATE -> PUT htpp://localhost:8080/api/v1/productos/id + productoAEditar



  routerProductos.put('/:id', productosController.update)
  
  // CRUD -> D:DELETE -> DELETE htpp://localhost:8080/api/v1/productos/id 



  routerProductos.delete('/:id', productosController.remove)

  export default routerProductos