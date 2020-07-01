const express = require('express');
const router = express.Router();

//Define los controladores a utilizar
const homeController = require('../controllers/homeController');
const adminController = require('../controllers/adminController');
const superController = require('../controllers/superController');



module.exports = function(){

    //GET PAGINA INICIO
    router.get('/', homeController.home);

    //GET PAGINA SERVICIOS
    router.get('/servicios', homeController.servicios);

    //GET PAGINA CONTACTO
    router.get('/contacto', homeController.contacto);

    //GET CARRITO DE COMPRAS
    router.get('/carrito', homeController.carrito);

    //GET INFO PRODUCTO
    router.get('/info-producto', homeController.infoProducto);

    //GET CATALOGO DE PRODUCTOS
    router.get('/catalogo', homeController.catalogoProductos);

    //GET CHECKOUT
    router.get('/checkout', homeController.checkout);

    //GET LOGIN
    router.get('/login', homeController.login);

    //GET CREAR CUENTAS
    router.get('/crear-cuenta', homeController.crearCuenta);





    //**********************************************************
    //***************  ADMINISTRADOR ***************************
    router.get('/admin', adminController.adminArea);

    router.get('/editar-perfil', adminController.editarPerfil);

    router.get('/cambiar-password', adminController.cambiarPassword);

    router.get('/imagen-perfil', adminController.imagenPerfil);

    router.get('/ordenes', adminController.ordenes);

    router.get('/detalle-orden', adminController.detalleOrden);

    router.get('/direcciones', adminController.direcciones);

    router.get('/pagos', adminController.pagos);

    router.get('/nuevo-metodo-pago', adminController.nuevoMetodoPago);

    router.get('/editar-metodo-pago', adminController.nuevoMetodoPago);


    //**********************************************************
    //***************  SUPER USUARIO ***************************
    router.get('/panel-super', superController.panelSuper);


    return router;
};

