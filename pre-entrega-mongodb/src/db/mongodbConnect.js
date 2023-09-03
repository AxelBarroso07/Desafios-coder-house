const mongoose = require('mongoose');


const mongoURI = 'mongodb://localhost:27017/ecommerce';


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