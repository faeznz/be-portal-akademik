const { MataKuliah, JadwalKuliah, Nilai } = require('../models'); // Sesuaikan dengan path model Anda

// Controller untuk mendapatkan semua data mata kuliah
async function getAllMataKuliah(req, res) {
  try {
    const mataKuliahs = await MataKuliah.findAll();
    res.json(mataKuliahs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Controller untuk mendapatkan data mata kuliah berdasarkan kode mata kuliah
async function getMataKuliahByKode(req, res) {
  const { kode_mata_kuliah } = req.params;
  try {
    const mataKuliah = await MataKuliah.findByPk(kode_mata_kuliah, {
      include: [
        { model: JadwalKuliah, as: 'jadwalKuliahs' },
        { model: Nilai, as: 'nilais' }
      ]
    });
    if (!mataKuliah) {
      res.status(404).json({ message: 'Mata Kuliah not found' });
    } else {
      res.json(mataKuliah);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Controller untuk membuat data mata kuliah baru
async function createMataKuliah(req, res) {
  const { kode_mata_kuliah, nama_mata_kuliah, sks, dosen } = req.body;
  try {
    const newMataKuliah = await MataKuliah.create({ kode_mata_kuliah, nama_mata_kuliah, sks, dosen });
    res.status(201).json(newMataKuliah);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Controller untuk mengupdate data mata kuliah berdasarkan kode mata kuliah
async function updateMataKuliah(req, res) {
  const { kode_mata_kuliah } = req.params;
  const { nama_mata_kuliah, sks, dosen } = req.body;
  try {
    const updatedMataKuliah = await MataKuliah.update({ nama_mata_kuliah, sks, dosen }, {
      where: { kode_mata_kuliah },
    });
    if (updatedMataKuliah[0] === 1) {
      res.json({ message: 'Mata Kuliah updated successfully' });
    } else {
      res.status(404).json({ message: 'Mata Kuliah not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Controller untuk menghapus data mata kuliah berdasarkan kode mata kuliah
async function deleteMataKuliah(req, res) {
  const { kode_mata_kuliah } = req.params;
  try {
    const deletedMataKuliah = await MataKuliah.destroy({
      where: { kode_mata_kuliah },
    });
    if (deletedMataKuliah === 1) {
      res.json({ message: 'Mata Kuliah deleted successfully' });
    } else {
      res.status(404).json({ message: 'Mata Kuliah not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

module.exports = {
  getAllMataKuliah,
  getMataKuliahByKode,
  createMataKuliah,
  updateMataKuliah,
  deleteMataKuliah,
};
