// un objeto literal con las acciones para cada ruta
const adminController = {
  admin: function (req, res) {
    res.render(' Hola Admin: ' + req.query.user);
  }
};

module.exports = adminController; 