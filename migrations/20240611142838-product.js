'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      table_type: {
          type: Sequelize.DataTypes.ENUM,
          values: ['reguler', 'vip'],
          allowNull: false
      },
      table_status: {
          type: Sequelize.DataTypes.ENUM,
          values: ['occupied', 'vacant'],
          allowNull: false,
          defaultValue: 'vacant'
      },
      hourly_price: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
      },
      coach_price: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.DataTypes.NOW
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.DataTypes.NOW
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('products');
  }
};
