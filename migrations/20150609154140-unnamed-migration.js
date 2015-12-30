'use strict';

module.exports = {
  up: function (migration, DataTypes) {
    migration.addColumn('salespeople', 'storeBuildingid', {
      type: DataTypes.INTEGER.UNSIGNED,
      references: 'stores',
      referenceKey: 'buildingid',
      onUpdate: 'cascade',
      onDelete: 'restrict'
    })
  },

  down: function (migration, DataTypes) {
    migration.removeColumn('salespeople', 'storeBuildingid');
  }
};