// 1. Importamos las depencia
import mongoose from 'mongoose';


// 2. plantilla de los datos se define como SCHEMA -> 
// esquema de datos que vamos a solicitar para guardar en la base de datos
const productSchema = new mongoose.Schema({

    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    isAvailable: {
        type: Boolean
    }, //true o false -> buleano

});

export const productModel = mongoose.model('Product', productSchema);