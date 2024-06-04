/*
    ### Connection
        1. mongoose.connect(uri, options)       - Connects to a MongoDB database.
        2. mongoose.disconnect()                - Disconnects from the MongoDB database.
        3. mongoose.connection                  - Provides access to the current database connection.
*/
// ---------------------------------------------------------------------------------------------------
const mongoose = require("mongoose");

// Mongoose URI (Connection String)
const mongooseUri = "mongodb://localhost:27017/myapp";

// Mongoose Options
const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true };

// Connects
async function connectDB() {
    try {
        await mongoose.connect(mongooseUri, mongooseOptions);
        console.log("connected");
    } catch (err) {
        console.log(err.message);
    }
}

// Disconnect
async function disconnectDB() {
    try {
        await mongoose.disconnect();
        console.log("Disconnected");
    } catch (err) {
        console.log(err.message);
    }
}

// Provide access to the current connection
const db = mongoose.connection;

// Provide schema methods
const Schema = mongoose.Schema;



module.exports = { connectDB, disconnectDB, db, Schema };
