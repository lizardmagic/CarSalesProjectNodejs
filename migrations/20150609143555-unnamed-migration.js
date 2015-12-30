'use strict';

module.exports = {
  up: function (migration, DataTypes) {
    migration.addColumn('salespeople', 'idsales', {
      type: DataTypes.INTEGER.UNSIGNED,
      references: 'salesinfos',
      referenceKey: 'idsalesinfo',
      onUpdate: 'cascade',
      onDelete: 'restrict'
    })
  },

  down: function (migration, DataTypes) {
    migration.removeColumn('idsalespeople', 'idsales');
  }
};


