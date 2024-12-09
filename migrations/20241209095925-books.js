'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable('books', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
       
      },
         bookname: {
          type: Sequelize.STRING,
          allowNull: false
        },
        Authorname: {
          type: Sequelize.STRING,
          allowNull: false
        },
        Price: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        Description: {
          type: Sequelize.STRING,
          allowNull: false
        }

      }
     );
    
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.dropTable('books');
     
  }
};
