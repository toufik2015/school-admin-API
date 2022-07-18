const express = require('express');
const assignmentController = require('./../controllers/assignmentController');
const authContorller = require('./../controllers/authController');
const router = express.Router();

router
  .route('/')
  .get(assignmentController.getAllAssignment)
  .post(assignmentController.createAssignment);

router.route('/:id').get(assignmentController.getAssignment);
module.exports = router;
