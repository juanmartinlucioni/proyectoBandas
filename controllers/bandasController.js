
 let listadoBandas = require("../modules/bandas");
 let bandasController = {
    index: function (req, res) {
        return res.render("listado", {
            listaBandas: listadoBandas.lista
        })
    },
    id: function (req, res) {
        let idBanda = req.params.id;
        let detallesBanda = listadoBandas.pullId(idBanda)
        return res.render("detalleBanda", {
            detallesBanda: detallesBanda,
        })
    },
    genero: function (req, res) {
        let genreBanda = req.params.genero;
        let bandasGenero = listadoBandas.pullGenre(genreBanda)
        return res.render("porGenero", {
            bandasGenero: bandasGenero,
        })
    }
}

module.exports = bandasController;