const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Custom username routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// NIM routes
router.post('/register-nim', authController.registerMahasiswa);
router.post('/login-nim', authController.loginMahasiswa);

module.exports = router;
