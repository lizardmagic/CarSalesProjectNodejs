'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('carinfos', {
      
      idcarinfo: {
         allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cartype: {
        type: Sequelize.STRING, allowNull: false,
      },
      carcolour: {
        type: Sequelize.STRING, allowNull: false,
      },
      car_price: {
        type: Sequelize.STRING, allowNull: false,
      },
      car_purchased_price: {
        type: Sequelize.STRING, allowNull: false,
      },
      date_entered: {
        type: Sequelize.DATE, allowNull: false,
      },
      car_name: {
        type: Sequelize.STRING, allowNull: false,
      },
      car_year: {
        type: Sequelize.INTEGER, allowNull: false,
      },
      engine_number: {
        type: Sequelize.INTEGER, allowNull: false,
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
    return queryInterface.dropTable('carinfos');
  }
};