// 1. Importar las dependencias necesarias
import mongoose from 'mongoose';


// 2. Establecer la conexión con la base de datos

export async function connectionMongo() {

    // Manejo de errores
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log('Conexión exitosa con la base de datos');
        
    } catch(error) {
        console.error('Error al conectar con la base de datos', error)
    }

}



