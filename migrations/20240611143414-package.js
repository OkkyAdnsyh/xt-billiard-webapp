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
    await queryInterface.createTable('packages', {
      uid: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      },
      price: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
      },
      package_for: {
          type: Sequelize.DataTypes.ENUM,
          values: ['reguler', 'vip room', 'coaching'],
          allowNull: false
      },
      is_upsell: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
      },
      sale_start_date: {
          type: Sequelize.DataTypes.DATEONLY,
          allowNull: true,
      },
      sale_end_date: {
          type: Sequelize.DataTypes.DATEONLY,
          allowNull: true
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.DataTypes.NOW
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.DataTypes.NOW
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('packages');
  }
};
