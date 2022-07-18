const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.ObjectId, ref: 'Student' },
    group: { type: mongoose.Schema.ObjectId, ref: 'Group' },
    enrolledAt: { type: Date, default: Date.now() },
  },
  {
    versionKey: false,
  }
);

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

module.exports = Enrollment;
