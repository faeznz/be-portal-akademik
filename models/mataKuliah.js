// models/mataKuliah.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MataKuliah extends Model {
    static associate(models) {
      MataKuliah.hasMany(models.JadwalKuliah, { 
        foreignKey: 'kode_mata_kuliah',
        as: 'jadwalKuliahs'
      });
    }
  }
  MataKuliah.init({
    kode_mata_kuliah: {
      type: DataTypes.STRING(25),
      primaryKey: true
    },
    nama_mata_kuliah: DataTypes.STRING,
    sks: DataTypes.INTEGER,
    dosen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MataKuliah',
  });
  return MataKuliah;
};
