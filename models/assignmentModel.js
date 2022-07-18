const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema(
  {
    teacher: { type: mongoose.Schema.ObjectId, ref: 'User' },
    group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group',
      index: true,
      unique: true,
    },
    AssignedAt: { type: Date, default: Date.now() },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false,
  }
);

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
