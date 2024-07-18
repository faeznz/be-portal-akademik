const express = require('express');
const router = express.Router();
const nilaiController = require('../controllers/nilaiController');

// Endpoint untuk mendapatkan semua nilai
router.get('/', nilaiController.getAllNilai);

// Endpoint untuk mendapatkan nilai berdasarkan id_nilai
router.get('/:id_nilai', nilaiController.getNilaiById);

// Endpoint untuk membuat nilai baru
router.post('/', nilaiController.createNilai);

// Endpoint untuk mengupdate nilai berdasarkan id_nilai
router.put('/:id_nilai', nilaiController.updateNilai);

// Endpoint untuk menghapus nilai berdasarkan id_nilai
router.delete('/:id_nilai', nilaiController.deleteNilai);

module.exports = router;
