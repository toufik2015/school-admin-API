const express = require('express');
const router = express.Router();
const groupContorller = require('./../controllers/groupController');
const authContorller = require('./../controllers/authController');

router
  .route('/')
  .get(groupContorller.getAllGroups)
  .post(groupContorller.createGroup);

router.route('/:id').get(groupContorller.getGroup);

module.exports = router;
