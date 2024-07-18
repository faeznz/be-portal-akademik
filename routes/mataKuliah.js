const express = require('express');
const router = express.Router();
const mataKuliahController = require('../controllers/mataKuliahController');

// Endpoint untuk mendapatkan semua mata kuliah
router.get('/', mataKuliahController.getAllMataKuliah);

// Endpoint untuk mendapatkan mata kuliah berdasarkan kode mata kuliah
router.get('/:kode_mata_kuliah', mataKuliahController.getMataKuliahByKode);

// Endpoint untuk membuat mata kuliah baru
router.post('/', mataKuliahController.createMataKuliah);

// Endpoint untuk mengupdate mata kuliah berdasarkan kode mata kuliah
router.put('/:kode_mata_kuliah', mataKuliahController.updateMataKuliah);

// Endpoint untuk menghapus mata kuliah berdasarkan kode mata kuliah
router.delete('/:kode_mata_kuliah', mataKuliahController.deleteMataKuliah);

module.exports = router;
