const Productos = require('../models/Productos');
const Categorias = require('../models/Categorias');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const uuid = require('uuid/v4');




//****************************************************
    //*************************PANEL PRINCIPAL*******************
//*****************************************************

//GET - PANEL SUPERUSUARIO
exports.panelSuper = (req, res) => {

    res.render('superusuario/panelSuper', {
        nombrePagina: 'Super Usuario',
        nombreUsuario: 'Christian Alexis Rodriguez'
    })
};




//****************************************************
//*************************PRODUCTOS*******************
//*****************************************************

//GET - VER PANEL DE PRODUCTOS
exports.productos = async (req, res) => {
    const productos = await Productos.findAll();

    res.render('superusuario/productosSuper', {
        nombrePagina: 'Productos',
        productos
    })
};



//GET - FORMULARIO PARA AÑADIR UN PRODUCTO
exports.formNuevoProducto = async (req, res) => {
    const categorias = await Categorias.findAll();

    res.render('superusuario/nuevoProductoSuper', {
        nombrePagina: 'Nuevo Producto',
        categorias
    })
};



//POST - AÑADIR PRODUCTO
exports.addProductoPost = async (req,res) => {
    //Sanitizar los campos
    req.sanitizeBody('nombre');
    req.sanitizeBody('slug');

    //validaciones con express
    req.checkBody('categoria', 'Debes seleccionar al menos una categoria').notEmpty();

    //capturacion de errores con express
    const erroresExpress = req.validationErrors();

    if (erroresExpress.length){
        const errExp = erroresExpress.map(obj => obj.msg);
        req.flash('error',errExp);
        res.redirect('/panel-super/nuevo-producto');
    }


    const producto = req.body;

    producto.id = uuid();
    producto.categoriaId = req.body.categoria;

    //Maneja los errores, antes de guardar el producto en la BD
    try{
        await Productos.create(producto);
        req.flash('exito', 'Se ha creado el producto correctamente');
        res.redirect('/panel-super/productos')
    }
    catch(e){
        console.log(e);
        //capturar errores de sequelize
        const erroresSequelize = e.errors.map(obj => obj.message);
        req.flash('error',erroresSequelize);
        res.redirect('/panel-super/nuevo-producto');
    }

};



//GET - FORMULARIO PARA EDITAR PRODUCTO
exports.formEditarProducto = async (req,res) => {
    const consultas = [];
    consultas.push(Productos.findByPk(req.params.id));
    consultas.push(Categorias.findAll());

    //Promise con await
    const[producto,categorias] = await Promise.all(consultas);

    res.render('superusuario/editarProductoSuper', {
        nombrePagina: 'Editar Producto',
        producto,
        categorias
    });
};




//POST - EDITAR PRODUCTO
exports.editarProductoPost = async (req,res) => {
    const producto = await Productos.findOne({
        where:{
            id: req.params.id
        }
    });

    producto.codigo = req.body.codigo;
    producto.cantidad = req.body.cantidad;
    producto.nombre = req.body.nombre;
    producto.precioCompra = req.body.precioCompra;
    producto.precioVenta = req.body.precioVenta;
    producto.estado = req.body.estado;
    producto.descripcion = req.body.descripcion;
    producto.slug = req.body.slug;
    producto.categoriaId = req.body.categoria;

    await producto.save();
    res.redirect('/panel-super/productos');
};


//POST - ELIMINAR PRODUCTO
exports.eliminarProducto = async (req,res,next) => {
    //toma el id que viene desde el hidden
    const {idProducto} = req.body;

    //consultar el producto
    const producto = await Productos.findByPk(idProducto);

    await Productos.destroy({
        where:{
            id: producto.id
        }
    });

    res.status(200).send('Producto eliminado satisfactoriamente');
    return next();
};





//****************************************************
//*************************PASSWORD*******************
//*****************************************************

//GET - CAMBIAR PASSWORD
exports.cambiarPassword = (req, res) => {

    res.render('superusuario/cambiarPasswordSuper', {
        nombrePagina: 'Cambiar Password'
    })
};












//****************************************************
//*************************CLIENTES*******************
//*****************************************************

//GET - VER PANEL DE CLIENTES
exports.clientes = (req, res) => {

    res.render('superusuario/clientesSuper', {
        nombrePagina: 'Clientes'
    })
};


//GET - VER ORDENES DE CLIENTES
exports.ordenes = (req, res) => {

    res.render('superusuario/ordenesSuper', {
        nombrePagina: 'Ordenes de compra'
    })
};



//GET - VER DETALLE DE ORDENES DE CLIENTES
exports.detalleOrden = (req, res) => {

    res.render('superusuario/detalleOrdenSuper', {
        nombrePagina: 'Detalle Orden de Compra'
    })
};




//****************************************************
//*************************INFORMES*******************
//*****************************************************

//GET - VER PANEL DE INFORMES
exports.informes = (req, res) => {

    res.render('superusuario/informesSuper', {
        nombrePagina: 'Informes'
    })
};
