'use strict';

module.exports = {
  up: function (migration, DataTypes) {
    migration.addColumn('customers', 'salesid', {
      type: DataTypes.INTEGER.UNSIGNED,
      references: 'salesinfos',
      referenceKey: 'idsalesinfos',
      onUpdate: 'cascade',
      onDelete: 'restrict'
    })
  },

  down: function (migration, DataTypes) {
    migration.removeColumn('customers', 'salesinfoIdsalesinfo');
  }
};

'use strict';
