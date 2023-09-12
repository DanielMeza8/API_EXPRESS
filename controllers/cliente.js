const Cliente = require("../models/Cliente");


const ObtenerClientes = async(req, res) => {
    const clientes = await Cliente.find({});
    res.json({
        ok: true,
        msg: "obtencion de clientes",
        clientes: clientes
    })
}


const obteneclientePorid = async(req, res) => {

    //ruta para traer un id
    //  preferentemente llevan la palabara async
    // res.json({
    //     ok: true,
    //     msg: req.params.id
    // }) testeo de ruta

    const id = req.params.id;
    try{
        const result = await Cliente.findById({_id: id});
        res.json({
            ok: true,
            msg: result
        })
    }catch (error){
        Console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Contacta al admin"
        })
    }
}

const agregarCliente = async(req, res) => {
    ///insercion a auna bd
    try{
        const cliente = new Cliente(req.body);

        await cliente.save();

        //req obtemos lo que le cliente nos pida
        res.json({
            ok: true,
            msg: "Cliente agregado con exito!!"
        })
    }catch (error){
        console.log(error);
        res.status(500).json({
            // http 404 codigo de error
            // investigar los status de http
            ok: false,
            msg: "Contacta con el ADMIN."
        })
    }
}


const eliminarClient = async(req, res) => {
    try {
        const clienteid = req.params.id; // rwcuperamosID de la BD
        const cliente = await Cliente.findById(clienteid); // encontrar Cliente

        if (!cliente) {
            return res.status(404).json({
                ok: false,
                msg: "no existe el cliente con ese id"
            });
        }

        await Cliente.findByIdAndDelete(clienteid);
        return res.json({
            ok: true,
            msg: "Cliente eliminado"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Contacta con el ADMIN."
        })
    }
}

const actualizarCliente = async(req, res) => {
    try {
        const clienteid = req.params.id; // rwcuperamosID de la BD
        const cliente = await Cliente.findById(clienteid); // encontrar Cliente

        if(!cliente){ // expresion paraver si si existe el cliente
            return res.status(404).json({
                ok: false,
                msg: "no existe el cliemte con ese id"
            });
        }
        await Cliente.findByIdAndUpdate(clienteid, req.body);
        return res.json({
            ok: true,
            msg: "Cliente actualizado."
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Contacta con el ADMIN."
        })
    }
}

module.exports = {
    ObtenerClientes,
    obteneclientePorid,
    actualizarCliente,
    agregarCliente,
    eliminarClient
}