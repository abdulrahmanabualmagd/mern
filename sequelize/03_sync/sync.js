// import both sequelize and datatyps to define the column types
const { Sequelize } = require("sequelize");


sequelize.sync();
    // Create Table if not exist 
    // Do nothing if table exists

sequelize.sync({ force: true })
    // Drops it first if it already exists
    // Create new table

sequelize.sync({ alter: true })
    // Checks the current state of database (columns it has, their data types, etc)
    // Performs necessary changes in the table to make it match the model