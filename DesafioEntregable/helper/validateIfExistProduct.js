const validateIfExistProduct = (productSelected) => {
    if(productSelected) {
        console.log("Producto", productSelected)
    } else {
        console.log("Error: Product not Found")
    }
}

module.exports = validateIfExistProduct