// models/jadwalKuliah.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class JadwalKuliah extends Model {
    static associate(models) {
      JadwalKuliah.belongsTo(models.MataKuliah, { 
        foreignKey: 'kode_mata_kuliah',
        as: 'mataKuliah'
      });
    }
  }
  JadwalKuliah.init({
    id_jadwal: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    kode_mata_kuliah: {
      type: DataTypes.STRING(25),
      references: {
        model: 'MataKuliahs',
        key: 'kode_mata_kuliah'
      }
    },
    waktu: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    ruangan: DataTypes.STRING,
    dosen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'JadwalKuliah',
  });

  JadwalKuliah.beforeCreate(jadwalKuliah => {
    jadwalKuliah.waktu = new Date();
  });

  return JadwalKuliah;
};
