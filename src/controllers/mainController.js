// un objeto literal con las acciones para cada ruta
const mainController = {
  index: function (req, res) {
    res.render("index");
  }
}

module.exports = mainController; 