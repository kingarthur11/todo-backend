const app = require('./config/express');
// const mongoose = require('./config/mongoose');

// mongoose.connect();
app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
