

//GET PARA ZONA DE ADMINISTRACION
exports.adminArea = (req,res) => {

    res.render('admin', {
        nombrePagina: 'Administracion'
    });
};


//GET PARA ZONA DE ADMINISTRACION
exports.editarPerfil = (req,res) => {

    res.render('editarPerfil', {
        nombrePagina: 'Editar Perfil'
    });
};



//GET CAMBIAR PASSWORD
exports.cambiarPassword = (req,res) => {

    res.render('cambiarPassword', {
        nombrePagina: 'Cambiar Password'
    });
};



//GET IMAGEN PERFIL
exports.imagenPerfil = (req,res) => {

    res.render('imagenPerfil', {
        nombrePagina: 'Cambiar Imagen de Perfil'
    })
};


//GET ORDENES DE COMPRA
exports.ordenes = (req,res) => {

    res.render('ordenes', {
        nombrePagina: 'Ordenes de Compra'
    })
};

//GET VER DETALLE ORDENES DE COMPRA
exports.detalleOrden = (req,res) => {

    res.render('detalleOrden', {
        nombrePagina: 'Detalle Orden de Compra'
    })
};


//GET DIRECCIONES USUARIO
exports.direcciones = (req,res) => {

    res.render('direcciones',{
        nombrePagina: 'Direcciones de Envio'
    })
};


//GET METODOS DE PAGO
exports.pagos = (req,res) => {

    res.render('pagos', {
        nombrePagina: 'Metodos de pago'
    })
};


//NUEVO METODO DE PAGO
exports.nuevoMetodoPago = (req,res) => {

    res.render('nuevoMetodoPago', {
        nombrePagina: 'Nuevo Metodo de Pago'
    })
};


//EDITAR METODO DE PAGO
exports.nuevoMetodoPago = (req,res) => {

    res.render('editarMetodoPago', {
        nombrePagina: 'Editar Metodo de Pago'
    })
};
