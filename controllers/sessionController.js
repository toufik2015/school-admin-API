const Session = require('./../models/sessionModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllsessions = catchAsync(async (req, res) => {
  const sessions = await Session.find();

  res.status(200).json({
    status: 'success',
    sessions,
  });
});
