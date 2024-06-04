/*
    ### Schema
        1. new mongoose.Schema(definition, options) - Creates a new schema with a given definition and options.
        2. schema.add(obj)                          - Adds paths or properties to the existing schema.
        3. schema.methods                           - Defines instance methods for documents.
        4. schema.statics                           - Defines static methods for the model.
        5. schema.virtual(name)                     - Creates a virtual property on the schema.
        6. schema.index(fields, options)            - Defines indexes on the schema.
        7. schema.path(path)                        - Gets/sets schema paths. retrieve and inspect the details of a particular property
*/
// ---------------------------------------------------------------------------------------------------

// Database Connection
const { Schema } = require("./1_connection");

// 1- Create Schema
const userSchema = new Schema({
    name: { type: String },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: { type: Number },
});

// 2- Add Path or property to the existing schema
userSchema.add({
    country: {
        type: String,
    },
});

// 3- Define instance method for the schema
userSchema.methods.getInfo = function () {
    return `Name: ${this.name}, Email: ${this.email}, Age: ${this.age}, Country: ${this.country}`;
};

// 4- Define static method for the schema
userSchema.statics.findByEmail = function (email) {
    return this.findOne({ email });
};

// 5- Create a virtual property on the schema
userSchema.virtual("isAdult").get(function () {
    return this.age >= 18;
});

// 6- Define Index on the schema
userSchema.index({ name: 1, email: 1 });

// 7- Get / Set Schema Path
const emailPath = userSchema.path("email");
userSchema.path("username", { type: String, required: true, unique: true });

module.exports = { userSchema };
