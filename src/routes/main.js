const express = require('express');
const router = express.Router();

// controller
const mainController = require("../controllers/mainController.js");

// middleware 

//router.get()
router.get("/", mainController.index);
//definimos rutas de test (luego borrar)
router.get("/milanesa", mainController.index);
router.get("/login", mainController.index);

module.exports = router; 