


//GET - PANEL SUPERUSUARIO
exports.panelSuper = (req, res) => {

    res.render('superusuario/panelSuper', {
        nombrePagina: 'Super Usuario'
    })
};


//GET - CAMBIAR CONTRASEÑA
exports.cambiarPassword = (req, res) => {

    res.render('superusuario/cambiarPasswordSuper', {
        nombrePagina: 'Cambiar Password'
    })
};


//GET - VER PANEL DE PRODUCTOS
exports.productos = (req, res) => {

    res.render('superusuario/productosSuper', {
        nombrePagina: 'Productos'
    })
};

//GET - AÑADIR UN PRODUCTO
exports.nuevoProducto = (req, res) => {

    res.render('superusuario/nuevoProductoSuper', {
        nombrePagina: 'Nuevo Producto'
    })
};


//GET - VER PANEL DE CLIENTES
exports.clientes = (req, res) => {

    res.render('superusuario/clientesSuper', {
        nombrePagina: 'Clientes'
    })
};

//GET - VER PANEL DE CLIENTES
exports.ordenes = (req, res) => {

    res.render('superusuario/ordenesSuper', {
        nombrePagina: 'Ordenes de compra'
    })
};

//GET - VER PANEL DE CLIENTES
exports.detalleOrden = (req, res) => {

    res.render('superusuario/detalleOrdenSuper', {
        nombrePagina: 'Detalle Orden de Compra'
    })
};


//GET - VER PANEL DE INFORMES
exports.informes = (req, res) => {

    res.render('superusuario/informesSuper', {
        nombrePagina: 'Informes'
    })
};
