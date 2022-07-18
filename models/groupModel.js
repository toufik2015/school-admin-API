const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name for the group!'],
    },

    createdAt: { type: Date, default: Date.now() },
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false,
  }
);

groupSchema.virtual('teacher', {
  ref: 'Assignment',
  localField: '_id',
  foreignField: 'group',
});
groupSchema.virtual('enrollments', {
  ref: 'Enrollment',
  localField: '_id',
  foreignField: 'group',
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
