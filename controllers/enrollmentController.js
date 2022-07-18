const Enrollment = require('./../models/enrollmentModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllenrollments = catchAsync(async (req, res) => {
  const enrollments = await Enrollment.find();

  res.status(200).json({
    status: 'success',
    enrollments,
  });
});

exports.createEnrollment = catchAsync(async (req, res) => {
  const enrollment = await Enrollment.create(req.body);
  res.status(200).json({
    status: 'success',
    enrollment,
  });
});
