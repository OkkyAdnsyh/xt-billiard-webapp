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
    await queryInterface.createTable('orders', {
      uid: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      player_name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      },
      personal_contact: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      },
      on_waiting_list: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true
      },
      is_queued: {
          type: Sequelize.DataTypes.BOOLEAN,
          defaultValue: false
      },
      is_playing: {
          type: Sequelize.DataTypes.BOOLEAN,
          defaultValue: false
      },
      table_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
          references: {
              model: 'products',
              key: 'id'
          }
      },
      is_coached: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false
      },
      is_table_open: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false
      },
      open_table_timekeep: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true
      },
      package_id: {
          type: Sequelize.DataTypes.UUID,
          allowNull: true,
          references: {
              model: 'packages',
              key: 'uid'
          }
      },
      total_price: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
      },
      payment_status: {
          type: Sequelize.DataTypes.ENUM,
          values: ['success', 'pending', 'canceled'],
          defaultValue: 'pending',
          allowNull: false
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
    await queryInterface.dropTable('orders');
  }
};
