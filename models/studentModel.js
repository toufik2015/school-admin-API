const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, 'A student must have a First name'],
    },

    lastName: {
      type: String,
      trim: true,
      required: [true, 'A student must have a last name'],
    },

    phone: [{ type: String, trim: true, required: true }],
    email: {
      type: String,
      trim: true,
      unique: [true, 'This email is already used by a student'],
      required: [true, 'A student must have an Email'],
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },

    birthdate: { type: Date, required: true },
    registrationDate: { type: Date, default: Date.now() },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false,
  }
);
studentSchema.virtual('enrollments', {
  ref: 'Enrollment',
  foreignField: 'student',
  localField: '_id',
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
