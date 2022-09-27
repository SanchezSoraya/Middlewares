const express = require('express');
const router = express.Router();

// controller
const mainController = require("../controllers/mainController");
const adminController = require("../controllers/adminController");

//middleware 
const adminMiddleware = require('../middlewares/adminMiddleware');

//router.get()
router.get("/", mainController.index);
//definimos rutas de test (luego borrar)
router.get("/admin", adminMiddleware, adminController.admin);

module.exports = router; 
