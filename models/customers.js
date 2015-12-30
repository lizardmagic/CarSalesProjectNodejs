
module.exports = function(sequelize, DataTypes) {
  var customers = sequelize.define('customers', {
    idcustomers: {type: DataTypes.INTEGER,  allowNull: false, autoIncrement: true, primaryKey: true},
    first_name: {type: DataTypes.STRING, allowNull: false},
    last_name: {type: DataTypes.STRING, allowNull: false},
    phone_number: {type: DataTypes.INTEGER, allowNull: false},
    address: {type: DataTypes.STRING, allowNull: false},

  }, {
    classMethods: {
      associate: function(models) {
        customers.hasMany(models.salesinfos)
      }
    }
  });
  return customers;
};
/*
  getterMethods   : {
    idcustomers       : function()  { return this.idcarinfo + ' ' + this.first_name + ' ' + this.last_name + ' ' + this.phone_number + ' ' + this.address }
  },

  setterMethods   : {
    customers       : function(value) {
        var names = value.split(' ');

        this.setDataValue('idcustomers', names.slice(0, -1).join(' '));
        this.setDataValue('first_name', names.slice(-1).join(' '));
        this.setDataValue('last_name', names.slice(0, -1).join(' '));
        this.setDataValue('phone_number', names.slice(-1).join(' '));
        this.setDataValue('address', names.slice(0, -1).join(' '));
      
    },
  }
});
*/