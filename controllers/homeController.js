

//GET - PAGINA PRINCIPAL HOME
exports.home = (req,res) =>{

    res.render('home', {
        nombrePagina: 'Inicio'
    })
};



//GET - PAGINA SERVICIOS
exports.servicios = (req,res) => {

    res.render('servicios', {
        nombrePagina: 'Servicios'
        })

};



//GET - PAGINA DE CONTACTO
exports.contacto = (req,res) => {

    res.render('contacto', {
        nombrePagina: 'Contacto'
    })

};


//GET CARRITO COMPRAS
exports.carrito = (req,res) => {

    res.render('carrito', {
        nombrePagina: 'Carrito de Compras'
    })
};


//GET INFORMACION PRODUCTO
exports.infoProducto = (req,res) => {

    res.render('infoProducto', {
        nombrePagina: 'Informacion de Producto'
    })
};



//GET CATALOGO DE PRODUCTOS
exports.catalogoProductos = (req,res) => {

    res.render('catalogo', {
        nombrePagina: 'Catalogo de Productos'
    })
};



//GET CHEKOUT DE PRODUCTOS
exports.checkout = (req,res) => {

    res.render('checkout', {
        nombrePagina: 'Finalizar Compra'
    })
};


//GET LOGIN DE USUARIO
exports.login = (req,res) => {

    res.render('login', {
        nombrePagina: 'Iniciar Sesion'
    })
};


//GET CREAR CUENTA
exports.crearCuenta = (req, res) => {

    res.render('crearCuenta', {
        nombrePagina: 'Crear Cuenta'
    })
}
