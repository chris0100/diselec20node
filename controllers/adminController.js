

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



//GET PARA CAMBIAR PASSWORD
exports.cambiarPassword = (req,res) => {

    res.render('cambiarPassword', {
        nombrePagina: 'Cambiar Password'
    });
};
