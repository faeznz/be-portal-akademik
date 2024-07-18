const express = require('express');
const router = express.Router();
const jadwalKuliahController = require('../controllers/jadwalKuliahController');

// Endpoint untuk mendapatkan semua jadwal kuliah
router.get('/', jadwalKuliahController.getAllJadwalKuliah);

// Endpoint untuk mendapatkan jadwal kuliah berdasarkan ID
router.get('/:id_jadwal', jadwalKuliahController.getJadwalKuliahById);

// Endpoint untuk membuat jadwal kuliah baru
router.post('/', jadwalKuliahController.createJadwalKuliah);

// Endpoint untuk mengupdate jadwal kuliah berdasarkan ID
router.put('/:id_jadwal', jadwalKuliahController.updateJadwalKuliah);

// Endpoint untuk menghapus jadwal kuliah berdasarkan ID
router.delete('/:id_jadwal', jadwalKuliahController.deleteJadwalKuliah);

module.exports = router;
