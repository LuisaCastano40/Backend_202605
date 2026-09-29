// 1. Importar las dependencias necesarias
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectionMongo } from './src/config/dataBase.js';
import { userRouter } from './src/routes/users.routes.js';
import { productsRouter } from './src/routes/products.routes.js';

// 2. Crear las configuraciones necesarias
const app = express(); //llamar a express para crear la app
dotenv.config(); // permite llamar las variables de entorno de .env
let port = process.env.PORT;
connectionMongo(); //LLAMAR a la función para conectar con la base de datos

app.use(cors());// permite peticiones desde cualquier origen (el front)
app.use(express.json()); // permite recibir datos en formato JSON


// 3. Rutas
app.get('/', (req, res) => {
  res.send('Holaaa, nuestro back funciona')
})

app.use("/usuarios", userRouter);
app.use("/productos", productsRouter);



// 4. Iniciar el servidor
// alt gr + } para abrir ``
app.listen(port, () => {
  console.log('El servidor se está ejecutando en http://localhost:' + port)
})

