
const getProductsController = (req, res, productManager) => {

    const limit = req.query.limit

    if (limit) {
        const productsByLimit = getProductsByLimit(limit)
        if (productsByLimit.error) {
            res.status(400).send(productsByLimit.error)
        } else {
            res.status(200).send(productsByLimit)
        }
    } else {
        const products = getProducts()
        res.status(200).send(products)
    }


}

const getProductsByIdController = (req, res, productManager) => {
    const id = req.params.id
    const product = productManager.getProductById()

    if (product.error) {
        res.status(400).send(product.error)
    } else {
        res.status(200).send(product)
    }


}

const addProductController = (req, res, productManager) => {
    const {
        id,
        title,
        description,
        code,
        price,
        status = true,
        stock,
        category,
        thumbnail
    } = req.body


    if (id == undefined || title == undefined || description == undefined || code == undefined || price == undefined || status == undefined || stock == undefined || category == undefined || thumbnail == undefined) {
        return res.status(404).json({ message: 'Todos los campos son obligatorios' })
    }

    const productValidated = {
        id,
        title,
        description,
        code,
        price,
        status,
        stock,
        category,
        thumbnail
    }

    productManager.addProduct(productValidated)

    return res.status(201).json({ message: "Producto agregado correctamente", data: productValidated })


}

const updateProductController = (req, res, productManager) => {
    const id = req.params.pid

    const {
        title,
        description,
        code,
        price,
        status = true,
        stock,
        category,
        thumbnail
    } = req.body

    if (title == undefined || description == undefined || code == undefined || price == undefined || status == undefined || stock == undefined || category == undefined || thumbnail == undefined) {
        return res.status(404).json({ message: 'Todos los campos son obligatorios' })
    }

    const productValidated = {
        title,
        description,
        code,
        price,
        status,
        stock,
        category,
        thumbnail
    }


    productManager.updateProduct(id, productValidated)

    return res.status(200).json({ message: "Producto actualizado correctamente", data: productValidated })

}

const deleteProductsController = (req, res, productManager) => {
    const id = req.params.pid

    const status = productManager.deleteProduct(id)

    if (status == false) {
        return res.status(400).json({ message: "El producto no pudo ser eliminado. Por favor revisar el id" })
    } else {
        return res.status(200).json({ message: `El producto con el id [${id}] fue eliminado satisfactoriamente` })
    }
}

module.exports = {
    getProductsController,
    getProductsByIdController,
    addProductController,
    updateProductController,
    deleteProductsController
}