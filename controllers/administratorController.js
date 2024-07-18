const { Administrator } = require('../models'); // Sesuaikan dengan path model Anda

// Controller untuk mendapatkan semua data administrator
async function getAllAdministrators(req, res) {
  try {
    const administrators = await Administrator.findAll();
    res.json(administrators);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Controller untuk membuat data administrator baru
async function createAdministrator(req, res) {
  const { nama, jabatan } = req.body;
  try {
    const newAdministrator = await Administrator.create({ nama, jabatan });
    res.status(201).json(newAdministrator);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Controller untuk mengupdate data administrator berdasarkan ID
async function updateAdministrator(req, res) {
  const { id_administrator } = req.params;
  const { nama, jabatan } = req.body;
  try {
    const updatedAdministrator = await Administrator.update({ nama, jabatan }, {
      where: { id_administrator },
    });
    if (updatedAdministrator[0] === 1) {
      res.json({ message: 'Administrator updated successfully' });
    } else {
      res.status(404).json({ message: 'Administrator not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Controller untuk menghapus data administrator berdasarkan ID
async function deleteAdministrator(req, res) {
  const { id_administrator } = req.params;
  try {
    const deletedAdministrator = await Administrator.destroy({
      where: { id_administrator },
    });
    if (deletedAdministrator === 1) {
      res.json({ message: 'Administrator deleted successfully' });
    } else {
      res.status(404).json({ message: 'Administrator not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

module.exports = {
  getAllAdministrators,
  createAdministrator,
  updateAdministrator,
  deleteAdministrator,
};
