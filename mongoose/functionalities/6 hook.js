/*
    ### Middleware (Hooks)
        1. schema.pre(event, [options], function(next))                                     - Defines a pre                                                                                                   -hook for a schema event.
        2. schema.post(event, function(doc, next))     
*/
// ---------------------------------------------------------------------------------------------------

const { userSchema } = require("./2 schema");

// Define a pre-hook for the 'save' event
userSchema.pre("save", function (next) {
    console.log("Before saving...");
    // Perform pre-save logic here
    // For example, you can modify the document before saving
    // Make sure to call 'next()' to proceed to the next middleware or to save the document
    next();
});

// Define a post-hook for the 'save' event
userSchema.post("save", function (doc, next) {
    console.log("After saving...");
    // Perform post-save logic here
    // For example, you can log the saved document
    console.log(doc);
    next(); // Call next to proceed to the next middleware
});
