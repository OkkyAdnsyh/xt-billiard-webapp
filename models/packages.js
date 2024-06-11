const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Packages = sequelize.define('Package', {
    uid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    package_for: {
        type: DataTypes.ENUM,
        values: ['reguler', 'vip room', 'coaching'],
        allowNull: false
    },
    is_upsell: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    sale_start_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    sale_end_date: {
        type: DataTypes.DATEONLY,
        allowNull: true
    }
}, {timestamps: true});

module.exports = Packages;