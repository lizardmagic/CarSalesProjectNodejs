'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('salesinfos', {
      idsalesinfo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      amount: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sales_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      salesinfocol: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      idsalesperson: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      idcustomers: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      idcarinfo: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('salesinfos');
  }
};