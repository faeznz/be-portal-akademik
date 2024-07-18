// models/direktur.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Direktur extends Model {
    static associate(models) {
      // Define associations here
    }
  }
  Direktur.init({
    id_direktur: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    nama: DataTypes.STRING,
    jabatan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Direktur',
  });
  return Direktur;
};
