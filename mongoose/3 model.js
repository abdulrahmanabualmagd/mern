/*
### Model
    1. mongoose.model(name, schema, collection)                           - Compiles a model from a schema and binds it to a collection.
    2. Model.create(docs, [callback])                                     - Creates and saves one or more documents.
    3. Model.find(conditions, [projection], [options], [callback])        - Finds documents that match the conditions.
    4. Model.findById(id, [projection], [options], [callback])            - Finds a document by its ID.
    5. Model.findOne(conditions, [projection], [options], [callback])     - Finds one document that matches the conditions.
    6. Model.updateOne(conditions, update, [options], [callback])         - Updates a single document that matches the conditions.
    7. Model.updateMany(conditions, update, [options], [callback])        - Updates multiple documents that match the conditions.
    8. Model.deleteOne(conditions, [options], [callback])                 - Deletes a single document that matches the conditions.
    9. Model.deleteMany(conditions, [options], [callback])                - Deletes multiple documents that match the conditions.
    10. Model.findByIdAndUpdate(id, update, [options], [callback])        - Finds a document by ID and updates it.
    11. Model.findByIdAndDelete(id, [options], [callback])                - Finds a document by ID and deletes it.
    12. Model.findOneAndUpdate(conditions, update, [options], [callback]) - Finds one document and updates it.
    13. Model.findOneAndDelete(conditions, [options], [callback])         - Finds one document and deletes it.
    14. Model.countDocuments(conditions, [callback])                      - Counts documents that match the conditions.
    15. Model.distinct(field, [conditions], [callback])                   - Finds distinct values for a specified field.
    16. Model.aggregate(pipeline, [options], [callback])                  - Performs aggregation operations on the documents.
*/
// ---------------------------------------------------------------------------------------------------

const { model } = require("mongoose");
const { connectDB, disconnectDB, model } = require("./1_connection");
const { userSchema } = require("./2_schema");

// 1- Compile a Model from a schema
const User = model("User", userSchema, "userCollection");

async function run() {
    // Connect Database
    await connectDB();

    try {
        // 2- Create and save documents
        await User.create([
            { name: "John Doe", email: "john@example.com", age: 25, country: "USA" },
            { name: "Jane Doe", email: "jane@example.com", age: 28, country: "Canada" },
        ]);

        // 3-  Find documents
        const users = await User.find({ age: { $gte: 18 } }, "name email");

        // 4- Find a document by ID
        const userById = await User.findById(users[0]._id);

        // 5- Find one document
        const userByEmail = await User.findOne({ email: "john@example.com" });

        // 6- Update one document
        await User.updateOne({ email: "john@example.com" }, { age: 26 });

        // 7- Update multiple documents
        await User.updateMany({ country: "USA" }, { country: "United States" });

        // 8- Delete one document
        await User.deleteOne({ email: "john@example.com" });

        // 9- Delete multiple documents
        await User.deleteMany({ country: "United States" });

        // 10- Find by ID and update
        const updatedUser = await User.findByIdAndUpdate(userById._id, { age: 27 }, { new: true });

        // 11- Find by ID and delete
        await User.findByIdAndDelete(userById._id);

        // 12- Find one and update
        const updatedUserByEmail = await User.findOneAndUpdate(
            { email: "jane@example.com" },
            { age: 29 },
            { new: true }
        );

        // 13- Find one and delete
        await User.findOneAndDelete({ email: "jane@example.com" });

        // 14- Count documents
        const userCount = await User.countDocuments({ country: "Canada" });

        // 15- Find distinct values for a field
        const distinctCountries = await User.distinct("country");

        // 16- Perform aggregation
        const aggregationResult = await User.aggregate([
            { $match: { age: { $gte: 18 } } },
            { $group: { _id: "$country", total: { $sum: 1 } } },
        ]);
    } catch (err) {
        console.error(err);
    } finally {
        await disconnectDB();
    }
}

run().catch((err) => console.error(err));

module.exports = { User };
