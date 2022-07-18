const express = require('express');
const router = express.Router();
const userContorller = require('./../controllers/userController');
const authContorller = require('./../controllers/authController');

router.post('/signup', authContorller.sginup);
router.post('/login', authContorller.login);
router.post('/forgotPassword', authContorller.forgotPassword);
router.post('/resetPassword/:token', authContorller.resetPassword);

router.patch(
  '/updatePassword',
  authContorller.protect,
  authContorller.updatePassword
);
router.patch('/updateMe', authContorller.protect, userContorller.updateMe);

router.route('/').get(userContorller.getAllUsers);

router.route('/:id').get(userContorller.getUser);
module.exports = router;
