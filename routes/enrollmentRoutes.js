const express = require('express');
const router = express.Router();
const enrollmentContorller = require('./../controllers/enrollmentController');
const authContorller = require('./../controllers/authController');

router
  .route('/')
  .get(enrollmentContorller.getAllenrollments)
  .post(enrollmentContorller.createEnrollment);
module.exports = router;
