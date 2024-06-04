/*
    ### Utility Methods
        1. mongoose.Types.ObjectId()                                                        - Creates a new ObjectId.
        2. mongoose.Schema.Types                                                            - Accesses built                                                                                                   -in schema types.
        3. mongoose.SchemaType      
*/
// ---------------------------------------------------------------------------------------------------

// Import required modules
const mongoose = require('mongoose');

// Utility Methods

// 1- Creates a new ObjectId.
const newObjectId = mongoose.Types.ObjectId();
console.log('New ObjectId:', newObjectId);

// 2- Accesses built-in schema types.
const { ObjectId, String, Number, Date, Boolean, Buffer, Mixed } = mongoose.Schema.Types;
console.log('Built-in Schema Types:');
console.log('ObjectId:', ObjectId);
console.log('String:', String);
console.log('Number:', Number);
console.log('Date:', Date);
console.log('Boolean:', Boolean);
console.log('Buffer:', Buffer);
console.log('Mixed:', Mixed);

// 3- Accesses mongoose.SchemaType (not used directly, typically used indirectly via Schema.Types)
const SchemaType = mongoose.SchemaType;
console.log('SchemaType:', SchemaType);
