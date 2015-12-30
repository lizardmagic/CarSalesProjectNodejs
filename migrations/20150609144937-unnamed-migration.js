'use strict';

module.exports = {
  up: function (migration, DataTypes) {
    migration.addColumn('salesinfos', 'carid', {
      type: DataTypes.INTEGER.UNSIGNED,
      references: 'carinfo',
      referenceKey: 'idcarinfo',
      onUpdate: 'cascade',
      onDelete: 'restrict'
    })
  },

  down: function (migration, DataTypes) {
    migration.removeColumn('salesinfos', 'carid');
  }
};
