const path = require('path');

const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT,
  mongo: {
    uri: process.env.MONGO_URI,
    options: {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  },
};