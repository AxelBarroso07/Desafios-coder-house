const ProductManagers = [] // creamos array

    class ProductManager { //declaramos una clase 

        constructor() {
            this.products = []; //creamos su constructor
        }

        addProduct(product) {
            this.products.push(product) //creamos los metodos.
                                        //usamos la palabra reservada (this.)
        }

        getProducts() {
            return this.products
        }

        getProductsById(id) {
            const productSelected = this.products.filter((product)=> {return product.id == id})

            if(productSelected.length === 0) {
                return undefined
            } else{
                return productSelected
            }

        }
 
        
    }


module.exports = ProductManager