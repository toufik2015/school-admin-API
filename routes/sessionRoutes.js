const express = require('express');
const router = express.Router();
const sessionContorller = require('./../controllers/sessionController');
const authContorller = require('./../controllers/authController');

router.post('/', sessionContorller.getAllsessions);
module.exports = router;
