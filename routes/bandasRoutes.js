// primero tenemos que traer express
let express = require("express");
let router = express.Router();
let bandasController = require("../controllers/bandasController")

router.get("/", bandasController.index)
router.get("/id/:id", bandasController.id)
router.get("/genero/:genero", bandasController.genero)


module.exports = router