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
   await queryInterface.bulkInsert('products', [
    {
      table_type : 'reguler',
      table_status : 'vacant',
      hourly_price : 35000,
      coach_price : 75000,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      table_type : 'reguler',
      table_status : 'vacant',
      hourly_price : 35000,
      coach_price : 75000,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      table_type : 'reguler',
      table_status : 'occupied',
      hourly_price : 35000,
      coach_price : 75000,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      table_type : 'reguler',
      table_status : 'occupied',
      hourly_price : 35000,
      coach_price : 75000,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      table_type : 'vip',
      table_status : 'occupied',
      hourly_price : 35000,
      coach_price : 75000,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      table_type : 'vip',
      table_status : 'occupied',
      hourly_price : 35000,
      coach_price : 75000,
      createdAt : new Date(),
      updatedAt : new Date()
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('products', null, {});
  }
};
