
module.exports = function(sequelize, DataTypes) {
  var salespeople = sequelize.define('salespeople', {
    idsalesperson: {type: DataTypes.INTEGER, autoIncrement:true, allowNull: false, autoIncrement: true, primaryKey: true},
    sales_first_name: {type: DataTypes.STRING, allowNull: false},
    sales_last_name: {type: DataTypes.STRING, allowNull: false},
    phone_number: {type: DataTypes.INTEGER, allowNull: false},
    street_address: {type: DataTypes.STRING, allowNull: false},
    suburb: {type: DataTypes.STRING, allowNull: false},
    Emergency_person_first_name: {type: DataTypes.STRING, allowNull: false},
    Emergency_person_last_name: {type: DataTypes.STRING, allowNull: false},
    Emergency_person_phone_number: {type: DataTypes.STRING, allowNull: false},
    salesinfoIdsalesinfo: {type: DataTypes.INTEGER, allowNull: false},
    store: {type: DataTypes.INTEGER, allowNull: false},
    salesinfoidsalesinfo: {type: DataTypes.INTEGER, allowNull: false},
    storeid: {type: DataTypes.INTEGER, allowNull: false},
    store: {type: DataTypes.INTEGER, allowNull: false},
    idsales: {type: DataTypes.INTEGER, allowNull: false},
    storeBuildingid: {type: DataTypes.INTEGER, allowNull: false},
  }, {
    classMethods: {
      associate: function(models) {
       salespeople.hasMany(models.salesinfos);
        //salespeople.hasOne(models.carinfo);
      }
      }
  });
  return salespeople;
};
/*salespeopleProvider.prototype.delete = function(salespersonId, callback) {
        this.getCollection(function(error, salesperson_collection) {
                if(error) callback(error);
                else {
                        salesperson_collection.remove(
                                {_id: salesperson_collection.db.bson_serializer.ObjectID.createFromHexString(salespersonId)},
                                function(error, salesperson){
                                        if(error) callback(error);
                                        else callback(null, salesperson)
                                });
                        }
        });
};
*/
/*
  getterMethods   : {
    idsalesperson       : function()  { return this.idcsalesperson + ' ' + this.sales_first_name + ' ' + this.sales_last_name + ' ' + this.phone_number + ' ' + this.street_address + ' ' + this.surburb + ' ' + this.Emergency_person_first_name + ' ' + this.Emergency_person_last_name + ' ' + this.Emergency_person_phone_number }
  },

  setterMethods   : {
    amount       : function(value) {
        var names = value.split(' ');

        this.setDataValue('idsalesperson', names.slice(0, -1).join(' '));
        this.setDataValue('sales_first_name', names.slice(-1).join(' '));
        this.setDataValue('sales_last_name', names.slice(0, -1).join(' '));
        this.setDataValue('phone_number', names.slice(-1).join(' '));
        this.setDataValue('street_address', names.slice(0, -1).join(' '));
        this.setDataValue('suburb', names.slice(-1).join(' '));
        this.setDataValue('Emergency_person_first_name', names.slice(-1).join(' '));
        this.setDataValue('Emergency_person_last_name', names.slice(0, -1).join(' '));
        this.setDataValue('Emergency_person_phone_number', names.slice(-1).join(' '));

    },
  }
  */