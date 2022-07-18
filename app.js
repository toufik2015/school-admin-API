const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const studentRouter = require('./routes/studentRoutes');
const groupRouter = require('./routes/groupRoutes');
const enrollmentRouter = require('./routes/enrollmentRoutes');
const sessionRouter = require('./routes/sessionRoutes');
const assignmentRouter = require('./routes/assignmentRoutes');
const userRouter = require('./routes/userRoutes');
const globalErrorHandler = require('./controllers/errorController');
const morgan = require('morgan');

const app = express();
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use(helmet());
app.use(express.json());

const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);
app.use('/api/v1/students', studentRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/groups', groupRouter);
app.use('/api/v1/sessions', sessionRouter);
app.use('/api/v1/enrollments', enrollmentRouter);
app.use('/api/v1/assignments', assignmentRouter);

app.use(globalErrorHandler);
module.exports = app;
