'use strict';

module.exports = {
  up: function (migration, DataTypes) {
    migration.addColumn('salesinfos', 'salespersonid', {
      type: DataTypes.INTEGER.UNSIGNED,
      references: 'salespeople',
      referenceKey: 'idsalesperson',
      onUpdate: 'cascade',
      onDelete: 'restrict'
    })
  },

  down: function (migration, DataTypes) {
    migration.removeColumn('salesinfos', 'salespersonid');
  }
};



