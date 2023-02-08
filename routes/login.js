const express = require('express'),
      loginController = require('../controllers/login');

const router = express.Router();

router.get('/login', loginController.loginGet);

router.post('/login', loginController.loginPost);

// router.get('/logout');

module.exports = router;