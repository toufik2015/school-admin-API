const Assignment = require('../models/assignmentModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllAssignment = catchAsync(async (req, res) => {
  const assignments = await Assignment.find();

  res.status(200).json({
    status: 'success',
    assignments,
  });
});

exports.getAssignment = catchAsync(async (req, res) => {
  const assignment = await Assignment.find({ _id: req.params.id });
  console.log('hey');
  if (!assignment) {
    return next(new AppError('No assignment found with this ID', 404));
  }
  res.status(200).json({
    status: 'success',
    assignment,
  });
});

exports.createAssignment = catchAsync(async (req, res) => {
  const assignment = await Assignment.create(req.body);
  res.status(201).json({
    status: 'success',
    assignment,
  });
});
