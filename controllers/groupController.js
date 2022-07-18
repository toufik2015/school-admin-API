const Group = require('./../models/groupModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllGroups = catchAsync(async (req, res) => {
  const groups = await Group.find().populate({ path: 'teacher' });

  res.status(200).json({
    status: 'success',
    groups,
  });
});

exports.getGroup = catchAsync(async (req, res, next) => {
  const group = await Group.findById(req.params.id)
    .populate({
      path: 'enrollments',
      select: '-__v',
    })
    .populate({
      path: 'teacher',
      populate: { path: 'teacher', select: 'firstName lastName' },
    });

  if (!group) {
    return next(new AppError('There is no group with this ID', 404));
  }

  res.status(200).json({
    status: 'success',
    group,
  });
});

exports.createGroup = catchAsync(async (req, res) => {
  const group = await Group.create(req.body);
  res.status(201).json({
    status: 'success',
    group,
  });
});
