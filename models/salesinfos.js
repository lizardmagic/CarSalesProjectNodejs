
module.exports = function(sequelize, DataTypes) {
  var salesinfos = sequelize.define('salesinfos', {
    idsalesinfo: {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
    amount: {type: DataTypes.STRING, allowNull: false},
    sales_date: {type: DataTypes.DATE, allowNull: false},
    salesinfocol: {type: DataTypes.INTEGER, allowNull: false},
    idsalesperson: {type: DataTypes.INTEGER, allowNull: false},
    idcustomers: {type: DataTypes.INTEGER, allowNull: false},
    idcarinfo: {type: DataTypes.INTEGER, allowNull: false},
    customerid: {type: DataTypes.INTEGER, allowNull: false},
    carid: {type: DataTypes.INTEGER, allowNull: false},
  }, {
    classMethods: {
      associate: function(models) {
       salesinfos.hasOne(models.salespeople);
       salesinfos.hasOne(models.customers);
       salesinfos.hasOne(models.carinfo);

      }
     
    }
  });
  return salesinfos;
};
/*
  getterMethods   : {
    idsaleinfo       : function()  { return this.idcarinfo + ' ' + this.amount + ' ' + this.sales_date + ' ' + this.salesinfocol + ' ' + this.idsalesperson + ' ' + this.idcustomers + ' ' + this.idcarinfo }
  },

  setterMethods   : {
    amount       : function(value) {
        var names = value.split(' ');

        this.setDataValue('idsaleinfo', names.slice(0, -1).join(' '));
        this.setDataValue('amount', names.slice(-1).join(' '));
        this.setDataValue('sales_date', names.slice(0, -1).join(' '));
        this.setDataValue('salesinfocol', names.slice(-1).join(' '));
        this.setDataValue('idsalesperson', names.slice(0, -1).join(' '));
        this.setDataValue('idcustomers', names.slice(-1).join(' '));
        this.setDataValue('idcarinfo', names.slice(0, -1).join(' '));
    },
  }
  */