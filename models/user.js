const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.belongsTo(models.Mahasiswa, { foreignKey: 'nim', targetKey: 'nim' }); // Menghubungkan dengan Mahasiswa berdasarkan nim
    }
    
    // Method untuk membandingkan kata sandi dengan hash
    validPassword(password) {
      return bcrypt.compareSync(password, this.kata_sandi);
    }
  }
  
  Users.init({
    id_pengguna: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nama_pengguna: DataTypes.STRING,
    kata_sandi: {
      type: DataTypes.STRING,
      set(value) {
        // Hash the password before saving it to the database
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(value, salt);
        this.setDataValue('kata_sandi', hashedPassword);
      }
    },
    peranan: DataTypes.STRING,
    nim: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Mahasiswas', // Nama model Mahasiswa
        key: 'nim' // Kolom yang digunakan sebagai kunci
      }
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  
  return Users;
};
