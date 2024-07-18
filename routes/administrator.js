const express = require('express');
const router = express.Router();
const administratorController = require('../controllers/administratorController');

// Endpoint untuk mendapatkan semua administrator
router.get('/', administratorController.getAllAdministrators);

// Endpoint untuk membuat administrator baru
router.post('/', administratorController.createAdministrator);

// Endpoint untuk mengupdate administrator berdasarkan ID
router.put('/:id_administrator', administratorController.updateAdministrator);

// Endpoint untuk menghapus administrator berdasarkan ID
router.delete('/:id_administrator', administratorController.deleteAdministrator);

module.exports = router;
