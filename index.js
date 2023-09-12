// console.log("hola mundo desde node Levantando un servicio con Express");
require("dotenv").config();
const express = require("express");
const conexion = require("./database/config");
const app = express();

conexion();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hola mundo desde servidor http");
}); /// headers = req && footer = res eslo visible

/**Creacion una ruta get */

app.use("/api/clientes", require("./routes/clientes"));//construccion de la ruta anterios


app.listen(process.env.PORT ,() => {
    console.log(`APP escuchando en: http://localhost:${process.env.PORT}`);
}); // calback es una funcion que se recib en los parmetro de otra
// API es un backend URL que nos regresa una informacion
/** Ocupan los servicion http 
 * 
 * El puesrto es de preferencia ocultarlo
 * yarn dev 
 * levantamos el servicio de EXPRESS comaando anterior
 * 
 * yarn add mongoose
 * npm i .g nodemon
 * yarn start
 * yarn add express
 * yarn add dotenv mongoose express-validator jsonwebtoken cors
*/ 