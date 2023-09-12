const { Router } = require("express");
const { ObtenerClientes, obteneclientePorid, agregarCliente, actualizarCliente, eliminarClient } = require("../controllers/cliente");
const Cliente = require("../models/Cliente");

const router = Router();

/*req
res */

router.get("/", ObtenerClientes); ///middlewares son peticiones http validadas para ahorrar costos estos son intermediarios entre el cliente y el programa, su trabajo es validar la data


router.get("/buscar/id/:id", obteneclientePorid);
router.get("/buscar/nombre/:nombres", async(req, res) => {
    try {
        const clientenombre = req.params.nombres; // rwcuperamosID de la BD
        const cliente = await Cliente.find(clientenombre);
        if (!cliente) {
            return res.status(404).json({
                ok: false,
                msg: "no existe el cliente con ese id"
            });
        }
        await Cliente.find(clientenombre);
        res.json({
            ok: true,
            msg: clientes
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Contacta con el ADMIN."
        })
    }
});


router.post("/", agregarCliente);


router.put("/:id", actualizarCliente);

router.delete("/:id", eliminarClient);

module.exports = router;