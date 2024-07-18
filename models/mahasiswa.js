// models/mahasiswa.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Mahasiswa extends Model {
    static associate(models) {
      // Define associations here
      Mahasiswa.hasMany(models.Nilai, { foreignKey: 'nim' });
    }
  }
  Mahasiswa.init({
    nim: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nama: DataTypes.STRING,
    program_studi: DataTypes.STRING,
    fakultas: DataTypes.STRING,
    alamat: DataTypes.STRING,
    nomor_telepon: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mahasiswa',
  });
  return Mahasiswa;
};
