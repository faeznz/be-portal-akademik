// models/nilai.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Nilai extends Model {
    static associate(models) {
      Nilai.belongsTo(models.Mahasiswa, { foreignKey: 'nim' });
      Nilai.belongsTo(models.MataKuliah, { foreignKey: 'kode_mata_kuliah' });
    }
  }
  Nilai.init({
    id_nilai: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    nim: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Mahasiswas',
        key: 'nim'
      }
    },
    kode_mata_kuliah: {
      type: DataTypes.STRING(25),
      references: {
        model: 'MataKuliahs',
        key: 'kode_mata_kuliah'
      }
    },
    nilai_ujian: DataTypes.INTEGER,
    nilai_tugas: DataTypes.INTEGER,
    nilai_akhir: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Nilai',
  });
  return Nilai;
};
