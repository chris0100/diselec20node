const express = require('express');
const router = require('./routes');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/db');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');


//Manejo BASE DE DATOS
db.sync().then(() => console.log('DB CONECTADA')).catch(error => console.log(error));

//Modelo a utilizar
require('./models/Productos');


//Variable de desarrollo
require('dotenv').config({path:'variables.env'});


//Declaracion de express
const app = express();

//body parser, para que lea datos de formularios
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//valida las funciones
app.use(expressValidator());

//motor de vista
app.use(expressLayouts);
app.set('view engine', 'ejs');

//ubicacion de las vistas
app.set('views', path.join(__dirname, './views'));

//ubicacion de los archivos estaticos
app.use(express.static('public'));

//habilitacion del cookie parser(cookie en el servidor)
app.use(cookieParser());

//habilitar flash message
app.use(flash());

//Ruta de raiz
app.use('/', router());

//Lee el puerto de variables.env para conectar
const port = process.env.PORT || 80;

app.listen(port, () => {
    console.log('el servidor esta funcionando');
});
