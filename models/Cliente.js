/* informacion que maneja un cliente */

const { Schema, model } = require("mongoose");

const ClienteSchema = new Schema({
    nombres: {
        type: String, 
        required: true,
    },
    apellidos: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }

});


module.exports = model("Cliente", ClienteSchema);