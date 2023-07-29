const express = require ('express')
const routerProducts = require('./routes')
const app = express()


app.use(express.json())

app.use(routerProducts())

app.listen(8080, ()=>{
    console.log('Servidor activo')
})

