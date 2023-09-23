const mongoose = require('mongoose');


const mongoURI = 'mongodb+srv://coderUser:42469628@cluster0.r4kenkh.mongodb.net/ecommerce';


mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

.then(() => {
  console.log('Conexión exitosa a MongoDB');
})

.catch(error => {
  console.error('Error al conectar a MongoDB:', error);
});

// Exporta la instancia de Mongoose para reutilizarla en otros archivos
module.exports = mongoose;