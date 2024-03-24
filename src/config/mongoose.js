
const mongoose = require('mongoose');
const { mongo } = require('./vars');

mongoose.Promise = Promise;

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

exports.connect = () => {
  mongoose.connect('mongodb+srv://arthurorduh:U6aCCw7R7utYS0Pv@straitclusta.szp5l6m.mongodb.net/?retryWrites=true&w=majority&appName=Straitclusta');
  return mongoose.connection;
};
