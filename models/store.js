
module.exports = function(sequelize, DataTypes) {
  var store = sequelize.define('store', {
    buildingid: {type: DataTypes.INTEGER,  allowNull: false, autoIncrement: true, primaryKey: true},
    managerid:  {type: DataTypes.INTEGER, allowNull: true},
    street_name: {type: DataTypes.STRING, allowNull: false},
    storename: {type: DataTypes.STRING, allowNull: false},
    surburb: {type: DataTypes.STRING, allowNull: false},
    postcode: {type: DataTypes.INTEGER, allowNull: false},
    state: {type: DataTypes.STRING, allowNull: false},
  }, {
    classMethods: {
      associate: function(models) {
        store.hasMany(models.salespeople);
        store.hasMany(models.carinfo);
      }
     }
  });
  return store;
};
/*
getterMethods   : {
    buildingid       : function()  { return this.buildingid + ' ' + this.mangerid + ' ' + this.street_name + ' ' + this.storename + ' ' + this.suburb + ' ' + this.postcode + ' ' + this.state }
  },

  setterMethods   : {
    amount       : function(value) {
        var names = value.split(' ');

        this.setDataValue('buildingid', names.slice(0, -1).join(' '));
        this.setDataValue('managerid', names.slice(-1).join(' '));
        this.setDataValue('street_name', names.slice(-1).join(' '));
        this.setDataValue('storename', names.slice(-1).join(' '));
        this.setDataValue('suburb', names.slice(-1).join(' '));
        this.setDataValue('postcode', names.slice(-1).join(' '));
        this.setDataValue('state', names.slice(-1).join(' '));

    },
  }
  */