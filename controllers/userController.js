const { User } = require('../models/user');

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getUsers,
};
