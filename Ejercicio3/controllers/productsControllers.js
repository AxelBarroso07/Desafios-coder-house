const {getProducts, getProductsByLimit, getProductById} = require('../useCases/productsUseCases')


const getProductsController =(req, res)=>{

    const limit = req.query.limit

    if(limit) {
        const productsByLimit = getProductsByLimit(limit)
        if(productsByLimit.error) {
            res.status(400).send(productsByLimit.error)
        } else {
            res.status(200).send(productsByLimit)
        }
    } else {
        const products = getProducts()
        res.status(200).send(products)
    }

   
}


const getProductsByIdController = (req, res) => {
    const id = req.params.id
    const product = getProductById(id)

    if(product.error){
        res.status(400).send(product.error)
    }else{
        res.status(200).send(product)
    }


}

module.exports={
    getProductsController,
    getProductsByIdController   
}