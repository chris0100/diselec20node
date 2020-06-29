

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
