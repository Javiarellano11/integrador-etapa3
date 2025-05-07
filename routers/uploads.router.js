import express from 'express'
const routerUpload = express.Router()
import controllers from '../controllers/uploads.controller.js'
import uploadsMiddleware from '../middlewares/uploads.middleware.js'


routerUpload.post('/', uploadsMiddleware.single('imagen'), controllers.uploadImagen)

export default routerUpload
