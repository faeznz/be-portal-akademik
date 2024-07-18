const { Direktur } = require('../models'); // Sesuaikan dengan path model Anda

// Controller untuk mendapatkan semua data direktur
async function getAllDirektur(req, res) {
  try {
    const direkturs = await Direktur.findAll();
    res.json(direkturs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Controller untuk membuat data direktur baru
async function createDirektur(req, res) {
  const { nama, jabatan } = req.body;
  try {
    const newDirektur = await Direktur.create({ nama, jabatan });
    res.status(201).json(newDirektur);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Controller untuk mengupdate data direktur berdasarkan ID
async function updateDirektur(req, res) {
  const { id_direktur } = req.params;
  const { nama, jabatan } = req.body;
  try {
    const updatedDirektur = await Direktur.update({ nama, jabatan }, {
      where: { id_direktur },
    });
    if (updatedDirektur[0] === 1) {
      res.json({ message: 'Direktur updated successfully' });
    } else {
      res.status(404).json({ message: 'Direktur not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Controller untuk menghapus data direktur berdasarkan ID
async function deleteDirektur(req, res) {
  const { id_direktur } = req.params;
  try {
    const deletedDirektur = await Direktur.destroy({
      where: { id_direktur },
    });
    if (deletedDirektur === 1) {
      res.json({ message: 'Direktur deleted successfully' });
    } else {
      res.status(404).json({ message: 'Direktur not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

module.exports = {
  getAllDirektur,
  createDirektur,
  updateDirektur,
  deleteDirektur,
};
