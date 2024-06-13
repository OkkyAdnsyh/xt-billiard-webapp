const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const mongoose = require('mongoose');

const Products = mongoose.Schema

// const Products = sequelize.define('Product', {
//     id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     table_type: {
//         type: DataTypes.ENUM,
//         values: ['reguler', 'vip'],
//         allowNull: false
//     },
//     table_status: {
//         type: DataTypes.ENUM,
//         values: ['occupied', 'vacant'],
//         allowNull: false,
//         defaultValue: 'vacant'
//     },
//     hourly_price: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//     },
//     coach_price: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     }
// }, {timestamps: true});

module.exports = Products;