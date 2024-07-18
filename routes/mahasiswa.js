const express = require('express');
const router = express.Router();
const mahasiswaController = require('../controllers/mahasiswaController');

// Endpoint untuk mendapatkan semua mahasiswa
router.get('/', mahasiswaController.getAllMahasiswa);

// Endpoint untuk mendapatkan mahasiswa berdasarkan NIM
router.get('/:nim', mahasiswaController.getMahasiswaById);

// Endpoint untuk membuat mahasiswa baru
router.post('', mahasiswaController.createMahasiswa);

// Endpoint untuk mengupdate mahasiswa berdasarkan NIM
router.put('/:nim', mahasiswaController.updateMahasiswa);

// Endpoint untuk menghapus mahasiswa berdasarkan NIM
router.delete('/:nim', mahasiswaController.deleteMahasiswa);

module.exports = router;
