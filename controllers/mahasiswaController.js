const { Mahasiswa, Nilai } = require('../models'); // Sesuaikan dengan path model Anda

// Controller untuk mendapatkan semua data mahasiswa
async function getAllMahasiswa(req, res) {
  try {
    const mahasiswas = await Mahasiswa.findAll();
    res.json(mahasiswas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Controller untuk mendapatkan data mahasiswa berdasarkan ID
async function getMahasiswaById(req, res) {
  const { nim } = req.params;
  try {
    const mahasiswa = await Mahasiswa.findByPk(nim, {
      include: [{ model: Nilai, as: 'nilai' }]
    });
    if (!mahasiswa) {
      res.status(404).json({ message: 'Mahasiswa not found' });
    } else {
      res.json(mahasiswa);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Controller untuk membuat data mahasiswa baru
async function createMahasiswa(req, res) {
  const { nim, nama, program_studi, fakultas, alamat, nomor_telepon, email } = req.body;
  try {
    const newMahasiswa = await Mahasiswa.create({ nim, nama, program_studi, fakultas, alamat, nomor_telepon, email });
    res.status(201).json(newMahasiswa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Controller untuk mengupdate data mahasiswa berdasarkan ID
async function updateMahasiswa(req, res) {
  const { nim } = req.params;
  const { nama, program_studi, fakultas, alamat, nomor_telepon, email } = req.body;
  try {
    const updatedMahasiswa = await Mahasiswa.update({ nama, program_studi, fakultas, alamat, nomor_telepon, email }, {
      where: { nim },
    });
    if (updatedMahasiswa[0] === 1) {
      res.json({ message: 'Mahasiswa updated successfully' });
    } else {
      res.status(404).json({ message: 'Mahasiswa not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Controller untuk menghapus data mahasiswa berdasarkan ID
async function deleteMahasiswa(req, res) {
  const { nim } = req.params;
  try {
    const deletedMahasiswa = await Mahasiswa.destroy({
      where: { nim },
    });
    if (deletedMahasiswa === 1) {
      res.json({ message: 'Mahasiswa deleted successfully' });
    } else {
      res.status(404).json({ message: 'Mahasiswa not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

module.exports = {
  getAllMahasiswa,
  getMahasiswaById,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
};
