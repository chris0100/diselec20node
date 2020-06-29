const express = require('express');
const router = express.Router();

//Define los controladores a utilizar
const homeController = require('../controllers/homeController');





module.exports = function(){

    //GET PAGINA INICIO
    router.get('/', homeController.home);

    //GET PAGINA SERVICIOS
    router.get('/servicios', homeController.servicios);

    //GET PAGINA CONTACTO
    router.get('/contacto', homeController.contacto);

    //GET CARRITO DE COMPRAS
    router.get('/carrito', homeController.carrito);


    return router;
};

