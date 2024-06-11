const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Packages = require('./packages');
const Products = require('./products');

const Orders = sequelize.define('Order', {
    uid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    player_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    personal_contact: {
        type: DataTypes.STRING,
        allowNull: false
    },
    on_waiting_list: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    is_queued: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    is_playing: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    table_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Products,
            key: 'id'
        }
    },
    is_coached: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    is_table_open: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    open_table_timekeep: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    package_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: Packages,
            key: 'uid'
        }
    },
    total_price: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    payment_status: {
        type: DataTypes.ENUM,
        values: ['success', 'pending', 'canceled'],
        defaultValue: 'pending',
        allowNull: false
    }
}, {timestamps: true});

Orders.hasMany(Products, {
    foreignKey : 'table_id'
});
Orders.hasMany(Packages, {
    foreignKey: 'package_id'
});
Products.belongsTo(Orders);
Packages.belongsTo(Orders);

module.exports = Orders;