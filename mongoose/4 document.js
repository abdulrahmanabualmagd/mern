/*
### Document
    1. doc.save([options], [callback])                - Saves the document to the database.
    2. doc.validate([callback])                       - Validates the document against the schema.
    3. doc.toObject([options])                        - Converts the document to a plain JavaScript object.
    4. doc.toJSON([options])                          - Converts the document to a JSON object.
    5. doc.populate(path, [callback])                 - Populates referenced paths in the document.
    6. doc.depopulate([path])                         - Depopulates specified paths in the document.
    7. doc.updateOne(update, [options], [callback])   - Updates the document with the specified changes.
    8. doc.remove([callback])                         - Removes the document from the database.
    9. doc.increment()                                - Increments version numbers for the document.
*/
// ---------------------------------------------------------------------------------------------------
const { User } = require("./model");

async function run() {
    try {
        // 1- Save the document to the database
        const newUser = new User({ name: "Alice", email: "alice@example.com", age: 30, country: "UK" });
        await newUser.save();

        // 2- Validate the document
        try {
            await newUser.validate();
            console.log("User validation passed");
        } catch (validationError) {
            console.error("User validation failed:", validationError);
        }

        // 3- Convert the document to a plain JavaScript object
        const userObject = newUser.toObject();

        // 4- Convert the document to a JSON object
        const userJSON = newUser.toJSON();

        // 5- Populate referenced paths in the document (assuming there are references, this is an example)
        await newUser.populate("somePath").execPopulate();

        // 6- Depopulate specified paths in the document (assuming there are populated paths, this is an example)
        newUser.depopulate("somePath");

        // 7- Update the document with the specified changes
        await newUser.updateOne({ age: 31 });

        // 8- Remove the document from the database
        await newUser.remove();

        // 9- Increment a field using $inc
        await User.updateOne({ email: "alice@example.com" }, { $inc: { age: 1 } });
    } catch (err) {
        console.error(err);
    } finally {
        await disconnectDB();
    }
}

run().catch((err) => console.error(err));
