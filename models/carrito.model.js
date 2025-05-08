
const carritoSchema = mongoose.Schema ({
    carrito: Array
})

const CarritoModel = mongoose.model('carritos', carritoSchema)

// -------------------------------------------------
/* metodos que nos sirven de interfaz para interactuar con la db */

const crearCarrito = async (carrito) => {
    try {
        const carritoCreado = new CarritoModel( { carrito } )
        const carritoGuardado = await carritoCreado.save()

        return carritoGuardado
        
    } catch (error) {
        console.log('No se pudo crear el carrito', error)
        throw error
    }
}

export default {
    crearCarrito
}