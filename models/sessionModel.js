const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema(
  {
    students: [{ type: mongoose.Schema.ObjectId, ref: 'Student' }],
    group: { type: mongoose.Schema.ObjectId, ref: 'Group' },
    createdAt: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
