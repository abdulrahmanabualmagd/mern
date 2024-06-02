// Install mongoose package
// $ npm install mongoose

// import mongoose
const mongoose = require("mongoose");

// Get URI from mongodb
const mongoUri = "mongodb://localhost:27017/DatabaseName";

// Connect to mongodb
mongoose.connect(mongoUri, {
    /*options*/
});

// Disconnect from mongodb
mongoose.disconnect();

// Provide accesss to the current connection [mongoose.connection]
const db = mongoose.connection;
