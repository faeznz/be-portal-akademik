const { JadwalKuliah, MataKuliah } = require('../models');

// Controller untuk mendapatkan semua data jadwal kuliah
async function getAllJadwalKuliah(req, res) {
  try {
    const jadwalKuliahs = await JadwalKuliah.findAll({
      include: [{ model: MataKuliah, as: 'mataKuliah' }] // Gunakan alias yang sesuai
    });
    res.json(jadwalKuliahs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Controller untuk mendapatkan data jadwal kuliah berdasarkan ID
async function getJadwalKuliahById(req, res) {
  const { id_jadwal } = req.params;
  try {
    const jadwalKuliah = await JadwalKuliah.findByPk(id_jadwal, {
      include: [{ model: MataKuliah, as: 'mataKuliah' }] // Gunakan alias yang sesuai
    });
    if (!jadwalKuliah) {
      res.status(404).json({ message: 'Jadwal Kuliah not found' });
    } else {
      res.json(jadwalKuliah);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Controller untuk membuat data jadwal kuliah baru
async function createJadwalKuliah(req, res) {
  const { kode_mata_kuliah, waktu, ruangan, dosen } = req.body;
  try {
    const newJadwalKuliah = await JadwalKuliah.create({ kode_mata_kuliah, waktu, ruangan, dosen });
    res.status(201).json(newJadwalKuliah);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Controller untuk mengupdate data jadwal kuliah berdasarkan ID
async function updateJadwalKuliah(req, res) {
  const { id_jadwal } = req.params;
  const { kode_mata_kuliah, waktu, ruangan, dosen } = req.body;
  try {
    const updatedJadwalKuliah = await JadwalKuliah.update({ kode_mata_kuliah, waktu, ruangan, dosen }, {
      where: { id_jadwal },
    });
    if (updatedJadwalKuliah[0] === 1) {
      res.json({ message: 'Jadwal Kuliah updated successfully' });
    } else {
      res.status(404).json({ message: 'Jadwal Kuliah not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Controller untuk menghapus data jadwal kuliah berdasarkan ID
async function deleteJadwalKuliah(req, res) {
  const { id_jadwal } = req.params;
  try {
    const deletedJadwalKuliah = await JadwalKuliah.destroy({
      where: { id_jadwal },
    });
    if (deletedJadwalKuliah === 1) {
      res.json({ message: 'Jadwal Kuliah deleted successfully' });
    } else {
      res.status(404).json({ message: 'Jadwal Kuliah not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

module.exports = {
  getAllJadwalKuliah,
  getJadwalKuliahById,
  createJadwalKuliah,
  updateJadwalKuliah,
  deleteJadwalKuliah,
};
