const express = require('express');
const router = express.Router();
const studentContorller = require('./../controllers/studentController');
const authContorller = require('./../controllers/authController');

router
  .route('/')
  .get(studentContorller.getAllStudents)
  .post(studentContorller.createStudent);

router
  .route('/:id')
  .get(authContorller.protect, studentContorller.getStudent)
  .post(studentContorller.deleteStudent)
  .patch(authContorller.protect, studentContorller.updateStudent);

module.exports = router;
