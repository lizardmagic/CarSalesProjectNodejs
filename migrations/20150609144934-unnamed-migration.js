'use strict';

module.exports = {
  up: function (migration, DataTypes) {
    migration.addColumn('salesinfos', 'customerid', {
      type: DataTypes.INTEGER.UNSIGNED,
      references: 'customers',
      referenceKey: 'idcustomers',
      onUpdate: 'cascade',
      onDelete: 'restrict'
    })
  },

  down: function (migration, DataTypes) {
    migration.removeColumn('salesinfos', 'customerid');
  }
};
