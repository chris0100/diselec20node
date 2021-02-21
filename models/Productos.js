const Sequelize = require('sequelize');
const db = require('../config/db');
const uuid = require('uuid/v4');
const slug = require('slug');
const shortid = require('shortid');
const Categorias = require('./Categorias');


const Productos = db.define('productos', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: false
        },
        codigo: {
            type: Sequelize.TEXT(6),
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'El codigo debe tener 6 caracteres'
                }
            }
        },
        cantidad: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            validate: {
                min: 0,
                isInt: {
                    msg: 'Debes ingresar valores numericos enteros mayores a cero'
                }
            }
        },
        nombre: {
            type: Sequelize.TEXT(50),
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Debe colocar un nombre al producto'
                }
            }
        },
        precioCompra: {
            type: Sequelize.FLOAT,
            allowNull: false,
            validate: {
                min: 0,
                isFloat: {
                    msg: 'Debes ingresar valores numericos mayores a cero'
                }
            }
        },
        precioVenta: {
            type: Sequelize.FLOAT,
            allowNull: false,
            validate: {
                min: 0,
                isFloat: {
                    msg: 'Debes ingresar valores numericos mayores a cero'
                }
            }
        },
        estado: Sequelize.STRING,
        imagen: Sequelize.TEXT,
        descripcion: {
            type: Sequelize.TEXT,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Debes ingresar una descripcion'
                }
            }
        },
        slug: {
            type: Sequelize.STRING
        }
    },
    {
        hooks: {
            async beforeCreate(productos) {
                const url = slug(productos.nombre).toLowerCase();
                productos.slug = `${url}-${shortid.generate()}`;
            },
            async beforeUpdate(productos){
                const url = slug(productos.nombre).toLowerCase();
                productos.slug = `${url}-${shortid.generate()}`;
            }
        }
    });



//relacion de que cada producto tendra por lo menos una categoria
Productos.belongsTo(Categorias);


module.exports = Productos;
