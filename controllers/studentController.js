const Student = require('./../models/studentModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllStudents = catchAsync(async (req, res) => {
  const students = await Student.find();
  res.status(200).json({
    status: 'success',
    students,
  });
});

exports.getStudent = catchAsync(async (req, res, next) => {
  const student = await Student.findById(req.params.id).populate({
    path: 'enrollments',
    populate: { path: 'group', select: 'name' },
  });

  if (!student) {
    return next(new AppError('No student found with this ID', 404));
  }
  res.status(200).json({
    status: 'success',
    student,
  });
});

exports.deleteStudent = catchAsync(async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: 'success',
  });
});
exports.updateStudent = catchAsync(async (req, res, next) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!student) {
    return next(new AppError('No student found with this ID', 404));
  }

  res.status(200).json({
    status: 'success',
    students,
  });
});

exports.createStudent = catchAsync(async (req, res) => {
  const newStudent = await Student.create(req.body);
  res.status(201).json({
    status: 'success',
    data: newStudent,
  });
});
