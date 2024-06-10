'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('pool_tables', [
    {
      table_status: 'vac',
      table_type: 'reguler',
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      table_status: 'vac',
      table_type: 'reguler',
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      table_status: 'vac',
      table_type: 'reguler',
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      table_status: 'vac',
      table_type: 'reguler',
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      table_status: 'vac',
      table_type: 'reguler',
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      table_status: 'vac',
      table_type: 'reguler',
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      table_status: 'vac',
      table_type: 'reguler',
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      table_status: 'vac',
      table_type: 'reguler',
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      table_status: 'vac',
      table_type: 'reguler',
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      table_status: 'vac',
      table_type: 'reguler',
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      table_status: 'occ',
      table_type: 'vip',
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      table_status: 'occ',
      table_type: 'vip',
      createdAt : new Date(),
      updatedAt: new Date()
    },
   ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('pool_tables', null, {});
  }
};
