'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('stores', {
      buildingid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      managerid: {
        type: Sequelize.INTEGER
      },
      street_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      storename: {
        allowNull: false,
        type: Sequelize.STRING
      },
      surburb: {
        allowNull: false,
        type: Sequelize.STRING
      },
      postcode: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING
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
    return queryInterface.dropTable('stores');
  }
};