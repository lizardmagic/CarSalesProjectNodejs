'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('salespeople', {
   
      idsalesperson: {
        type: Sequelize.INTEGER
         allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      sales_first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sales_last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      street_address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      suburb: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Emergency_person_first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Emergency_person_last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Emergency_person_phone_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('salespeople');
  }
};