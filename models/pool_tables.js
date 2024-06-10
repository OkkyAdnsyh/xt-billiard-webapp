const sequelize = require('../config/connection');
const { DataTypes } = require('sequelize');

const PoolTable = sequelize.define('Pool_Table', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    table_status: {
        type: DataTypes.ENUM,
        values: ['occ', 'vac'],
        defaultValue: 'vac',
        allowNull: false
    },
    table_type: {
        type: DataTypes.ENUM,
        values: ['reguler', 'vip'],
        allowNull: false
    }
}, {timestamps: true})

module.exports = PoolTable;