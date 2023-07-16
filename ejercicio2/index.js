const uuid = require("uuid");
const ProductManager = require("./class/ProductManager");

const productManager = new ProductManager('products.json');

const idProduct1 = "63e4df50-e3e2-4f16-98bc-97d358cc446e";
const idProduct2 = '86e5b5e5-c8c6-4c20-b756-78824ff6fa4f';
const idProduct3 = '8518794f-c58d-4632-a1a2-a4978870fe80';

console.log("#### AGREGAMOS PRODUCTOS #### ");

const newProduct = {
  title: "Producto del manager 1",
  price: "431",
  thumbnail: "thumbailexample",
  id: idProduct1,
  code: "abc12545",
  stock: "43"
};

productManager.addProduct(newProduct);

const newProduct2 = {
  title: "Producto del manager 2",
  price: "241",
  thumbnail: "thumbailexample",
  id: idProduct2,
  code: "abc12545",
  stock: "54"
};

productManager.addProduct(newProduct2);

const newProduct3 = {
  title: "Producto del manager 3",
  price: "543",
  thumbnail: "thumbailexample",
  id: idProduct3,
  code: "abc125543",
  stock: "65"
};

productManager.addProduct(newProduct3);

console.log("#### BUSCAMOS POR ID DE PRODUCTO (ERROR) #### ");
const productByIdError = productManager.getProductById("idCualquiera");
console.log(productByIdError);

console.log("#### BUSCAMOS POR ID DE PRODUCTO #### ");
const productById = productManager.getProductById(idProduct3);
console.log("ID PRODUCTO", productById);
console.log(productById);

console.log("#### LISTAMOS PRODUCTOS #### ");
const products = productManager.getProducts();
console.log(products);

console.log("#### ACTUALIZAMOS POR ID DE PRODUCTO #### ");
const updatedProduct = {
  price: "300",
  stock: "20"
};

productManager.updateProduct(idProduct1, updatedProduct);

console.log("#### ELIMINAMOS POR ID DE PRODUCTO #### ");
productManager.deleteProduct(idProduct2);
