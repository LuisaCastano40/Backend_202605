// 1. Importar las dependencias
import mongoose from 'mongoose';

// 2. Crear el esquema de usuario
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
}); 

// 3. Crear el modelo de usuario: Es el que nos permite definir 
// las acciones que crearemos con los controladores
export const userModel = mongoose.model('User', userSchema);