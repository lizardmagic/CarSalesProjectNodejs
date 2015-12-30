module.exports = function(sequelize, DataTypes) {
  var carinfo = sequelize.define('carinfo', {
    idcarinfo: {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
    cartype: {type: DataTypes.STRING, allowNull: false},
    carcolour: {type: DataTypes.STRING, allowNull: false},
    car_price: {type: DataTypes.STRING, allowNull: false},
    car_purchased_price: {type: DataTypes.STRING, allowNull: false},
    date_entered: {type: DataTypes.DATE, allowNull: false},
    car_name: {type: DataTypes.STRING, allowNull: false},
    car_year: {type: DataTypes.INTEGER, allowNull: false},
    engine_number: {type: DataTypes.INTEGER,  allowNull: false}
  });
  return carinfo;
};

// {
//   getterMethods   : {
//     idcarinfo       : function()  { return this.idcarinfo + ' ' + this.cartype + ' ' + this.carcolour + ' ' + this.car_price + ' ' + this.car_purchased_price + ' ' + this.date_entered + ' ' + this.engine_number + ' ' + this.engine_number }
//   },

//   setterMethods   : {
//     fullName       : function(value) {
//         var names = value.split(' ');

//         this.setDataValue('idcarinfo', names.slice(0, -1).join(' '));
//         this.setDataValue('cartype', names.slice(-1).join(' '));
//         this.setDataValue('carcolour', names.slice(0, -1).join(' '));
//         this.setDataValue('car_price', names.slice(-1).join(' '));
//         this.setDataValue('car_purchased_price', names.slice(0, -1).join(' '));
//         this.setDataValue('date_entered', names.slice(-1).join(' '));
//         this.setDataValue('car_name', names.slice(-1).join(' '));
//         this.setDataValue('car_year', names.slice(0, -1).join(' '));
//         this.setDataValue('engine_number', names.slice(-1).join(' '));
//     },
//   }
// });