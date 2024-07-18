const { Nilai, Mahasiswa, MataKuliah } = require('../models'); // Sesuaikan dengan path model Anda

// Controller untuk mendapatkan semua data nilai
async function getAllNilai(req, res) {
  try {
    const nilais = await Nilai.findAll();
    res.json(nilais);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Controller untuk mendapatkan nilai berdasarkan ID
async function getNilaiById(req, res) {
  const { id_nilai } = req.params;
  try {
    const nilai = await Nilai.findByPk(id_nilai, {
      include: [
        { model: Mahasiswa, as: 'mahasiswa' },
        { model: MataKuliah, as: 'mataKuliah' }
      ]
    });
    if (!nilai) {
      res.status(404).json({ message: 'Nilai not found' });
    } else {
      res.json(nilai);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Controller untuk membuat data nilai baru
async function createNilai(req, res) {
  const { nim, kode_mata_kuliah, nilai_ujian, nilai_tugas, nilai_akhir } = req.body;
  try {
    const newNilai = await Nilai.create({ nim, kode_mata_kuliah, nilai_ujian, nilai_tugas, nilai_akhir });
    res.status(201).json(newNilai);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Controller untuk mengupdate data nilai berdasarkan ID
async function updateNilai(req, res) {
  const { id_nilai } = req.params;
  const { nilai_ujian, nilai_tugas, nilai_akhir } = req.body;
  try {
    const updatedNilai = await Nilai.update({ nilai_ujian, nilai_tugas, nilai_akhir }, {
      where: { id_nilai },
    });
    if (updatedNilai[0] === 1) {
      res.json({ message: 'Nilai updated successfully' });
    } else {
      res.status(404).json({ message: 'Nilai not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Controller untuk menghapus data nilai berdasarkan ID
async function deleteNilai(req, res) {
  const { id_nilai } = req.params;
  try {
    const deletedNilai = await Nilai.destroy({
      where: { id_nilai },
    });
    if (deletedNilai === 1) {
      res.json({ message: 'Nilai deleted successfully' });
    } else {
      res.status(404).json({ message: 'Nilai not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

module.exports = {
  getAllNilai,
  getNilaiById,
  createNilai,
  updateNilai,
  deleteNilai,
};
