// models/administrator.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Administrator extends Model {
    static associate(models) {
      // Define associations here
    }
  }
  Administrator.init({
    id_administrator: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    nama: DataTypes.STRING,
    jabatan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Administrator',
  });
  return Administrator;
};
