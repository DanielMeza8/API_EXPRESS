const mongoose = require("mongoose");

const conexion = async () => {
    try {
        await mongoose.connect(`${process.env.MONGOURI}`);
        console.log("conectado con exito a la BD");
    } catch (error) {
        throw new Error("Fallo al conectar a la BD");
    }
} 

module.exports=conexion;
