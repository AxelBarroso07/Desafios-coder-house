const ProductManager = require("./class/ProductManager")
const uuid = require("uuid")
const validateIfExistProduct = require("./helper/validateIfExistProduct")
const productManager1 = new ProductManager()// Instanciamos la clase

/**
 * Generas los id
 */
const idProduct1 = uuid.v4()
const idProduct2 = uuid.v4()
const idProduct3 = uuid.v4()


/**
 * Agregas los productos
 */
productManager1.addProduct({
    title: "Producto del manager 1",
    price: "240",
    thumbnail: "",
    id: idProduct1,
    code: "abc12545",
    stock: "54"
})


productManager1.addProduct({
    title: "Producto del manager 2",
    price: "500",
    thumbnail: "",
    id: idProduct2,
    code: "abc12545",
    stock: "9"
})

productManager1.addProduct({
    title: "Producto del manager 3",
    price: "300",
    thumbnail: "",
    id: idProduct3,
    code: "abc12545",
    stock: "5"
})

/**
 * Buscamos producto por id (Caso de fallo )
 */
const productSelected = productManager1.getProductsById("cualquierid")
validateIfExistProduct(productSelected)


/**
 * Buscamos producto por id (Caso de exito)
 */
const productSelected2 = productManager1.getProductsById(idProduct3)
validateIfExistProduct(productSelected2)


/**
 * Listamos todos los productos
 */
console.log("#### LISTA DE TODOS LOS PRODUCTOS #### ")
const productList = productManager1.getProducts()
console.log(productList)




