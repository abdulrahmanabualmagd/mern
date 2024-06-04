/*
    ### Query
        1. query.exec([callback])                   - Executes the query.
        2. query.then(onFulfilled, onRejected)      - Attaches fulfillment and rejection handlers to the query.
        3. query.catch(onRejected)                  - Attaches a rejection handler to the query.
        4. query.where(path, [val])                 - Specifies conditions for the query.
        5. query.equals(val)                        - Specifies an equality condition.
        6. query.or(array)                          - Specifies an OR condition for multiple queries.
        7. query.and(array)                         - Specifies an AND condition for multiple queries.
        8. query.lt(val)                            - Specifies a less                                                                                                   -than condition.
        9. query.lte(val)                           - Specifies a less                                                                                                   -than                                                                                                   -or                                                                                                   -equal condition.
        10. query.gt(val)                           - Specifies a greater                                                                                                   -than condition.
        11. query.gte(val)                          - Specifies a greater                                                                                                   -than                                                                                                   -or                                                                                                   -equal condition.
        12. query.ne(val)                           - Specifies a not                                                                                                   -equal condition.
        13. query.in(array)                         - Specifies an IN condition.
        14. query.nin(array)                        - Specifies a NOT IN condition.
        15. query.exists([val])                     - Specifies an exists condition.
        16. query.regex(val)                        - Specifies a regular expression condition.
        17. query.limit(val)                        - Limits the number of documents returned.
        18. query.skip(val)                         - Skips the specified number of documents.
        19. query.sort(arg)                         - Sorts the documents by the specified fields.
        20. query.select(fields)                    - Specifies fields to include or exclude in the results.
        21. query.populate(path, [select], [model], [match], [options], [callback]) - Populates referenced paths.
*/
// ---------------------------------------------------------------------------------------------------

// Import the required libraries
const mongoose = require("mongoose");

// Connect to the MongoDB database
mongoose
    .connect("mongodb://localhost:27017/mydatabase", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("Connection error", err));

// Define a Mongoose schema and model
const schema = new mongoose.Schema({
    fieldName: String,
    field1: String,
    field2: String,
    field3: String,
});

const Model = mongoose.model("Model", schema);

// Example query usage
let query = Model.find(); // Initialize a query

// 1. Executes the query.
query.exec((err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
});

// 2. Attaches fulfillment and rejection handlers to the query.
query.then(
    (result) => {
        console.log(result);
    },
    (error) => {
        console.error(error);
    }
);

// 3. Attaches a rejection handler to the query.
query.catch((error) => {
    console.error(error);
});

// 4. Specifies conditions for the query.
query.where("fieldName", value);

// 5. Specifies an equality condition.
query.equals(value);

// 6. Specifies an OR condition for multiple queries.
query.or([{ fieldName1: value1 }, { fieldName2: value2 }]);

// 7. Specifies an AND condition for multiple queries.
query.and([{ fieldName1: value1 }, { fieldName2: value2 }]);

// 8. Specifies a less-than condition.
query.lt(value);

// 9. Specifies a less-than-or-equal condition.
query.lte(value);

// 10. Specifies a greater-than condition.
query.gt(value);

// 11. Specifies a greater-than-or-equal condition.
query.gte(value);

// 12. Specifies a not-equal condition.
query.ne(value);

// 13. Specifies an IN condition.
query.in([value1, value2, value3]);

// 14. Specifies a NOT IN condition.
query.nin([value1, value2, value3]);

// 15. Specifies an exists condition.
query.exists(value);

// 16. Specifies a regular expression condition.
query.regex(/pattern/);

// 17. Limits the number of documents returned.
query.limit(number);

// 18. Skips the specified number of documents.
query.skip(number);

// 19. Sorts the documents by the specified fields.
query.sort({ fieldName: 1 }); // 1 for ascending, -1 for descending

// 20. Specifies fields to include or exclude in the results.
query.select("field1 field2 -field3"); // include field1, field2, exclude field3

// 21. Populates referenced paths.
query.populate("fieldName");
query.populate({
    path: "fieldName",
    select: "field1 field2",
    model: "ModelName",
    match: { field: value },
    options: { sort: { field: 1 } },
    callback: (err, result) => {
        if (err) {
            console.error(err);
        } else {
            console.log(result);
        }
    },
});

// Execute the query
query.exec((err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
});
