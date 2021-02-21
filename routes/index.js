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

    router.get('/editar-metodo-pago', adminController.editarMetodoPago);






    //**********************************************************
    //***************  SUPER USUARIO ***************************
    //**********************************************************


    //VER PANEL DE SUPER USUARIO
    router.get('/panel-super', superController.panelSuper);


    //VER PANEL DE CAMBIAR CONTRASEÑA
    router.get('/panel-super/cambiar-password', superController.cambiarPassword);




    //**********************************************************
    //VER PANEL DE PRODUCTOS
    router.get('/panel-super/productos', superController.productos);

    //VER PANEL NUEVO PRODUCTO
    router.get('/panel-super/nuevo-producto', superController.formNuevoProducto);

    //POST GUARDAR PRODUCTO
    router.post('/panel-super/nuevo-producto', superController.addProductoPost);

    //VER PANEL EDITAR PRODUCTO
    router.get('/panel-super/editar-producto/:id',superController.formEditarProducto);

    //POST EDITAR PRODUCTO
    router.post('/panel-super/editar-producto/:id', superController.editarProductoPost);

    //POST ELIMINAR PRODUCTO
    router.post('/panel-super/eliminar-producto', superController.eliminarProducto);





    //**********************************************************
    //VER PANEL DE CLIENTES
    router.get('/panel-super/clientes', superController.clientes);

    //VER ORDENES DE CLIENTES
    router.get('/panel-super/clientes/ordenes', superController.ordenes);

    //VER DETALLE DE ORDENES DE CLIENTE
    router.get('/panel-super/clientes/detalle-orden', superController.detalleOrden);




    
    //**********************************************************
    //VER PANEL DE INFORMES
    router.get('/panel-super/informes', superController.informes);


    return router;
};

