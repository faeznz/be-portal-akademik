const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Users, Mahasiswa } = require('../models');
require('dotenv').config(); // Load environment variables from .env file

// Register using custom username
exports.register = async (req, res) => {
  const { nama_pengguna, kata_sandi } = req.body;
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(kata_sandi, salt);

    const user = await Users.create({
      nama_pengguna,
      kata_sandi: hashedPassword,
      peranan: 'administrator'
    });

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login using custom username
exports.login = async (req, res) => {
  const { nama_pengguna, kata_sandi } = req.body;
  try {
    const user = await Users.findOne({ where: { nama_pengguna } });
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }
    const isValidPassword = bcrypt.compare(kata_sandi, user.kata_sandi);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    const token = jwt.sign({ id: user.id_pengguna, role: user.peranan }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.registerMahasiswa = async (req, res) => {
    const { nim, kata_sandi } = req.body;
    try {
      const mahasiswa = await Mahasiswa.findOne({ where: { nim } });
      if (!mahasiswa) {
        return res.status(404).json({ error: 'Mahasiswa not found' });
      }
  
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(kata_sandi, salt);
  
      const user = await Users.create({
        kata_sandi: hashedPassword,
        peranan: 'mahasiswa',
        nim: mahasiswa.nim // Hubungan dengan tabel Mahasiswa
      });
  
      res.status(201).json({ message: 'Mahasiswa registered successfully', user });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.loginMahasiswa = async (req, res) => {
    const { nim, kata_sandi } = req.body;
    try {
      const user = await Users.findOne({
        where: { nim },
        include: [{ model: Mahasiswa }]
      });
      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }
      
      const isValidPassword = bcrypt.compare(kata_sandi, user.kata_sandi);
      if (!isValidPassword) {
        return res.status(401).json({ error: 'Incorrect password' });
      }
  
      const token = jwt.sign({ id: user.id_pengguna, role: user.peranan }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.json({ token });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
