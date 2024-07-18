const express = require('express');
const router = express.Router();
const direkturController = require('../controllers/direkturController');

// Endpoint untuk mendapatkan semua direktur
router.get('/', direkturController.getAllDirektur);

// Endpoint untuk membuat direktur baru
router.post('/', direkturController.createDirektur);

// Endpoint untuk mengupdate direktur berdasarkan ID
router.put('/:id_direktur', direkturController.updateDirektur);

// Endpoint untuk menghapus direktur berdasarkan ID
router.delete('/:id_direktur', direkturController.deleteDirektur);

module.exports = router;
