const express = require('express'),
      signController = require('../controllers/singup');

const router = express.Router();

router.get('/signup', signController.signGet);

router.post('/signup', signController.signPost);

module.exports = router;