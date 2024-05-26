// import both sequelize and datatyps to define the column types
const { Sequelize, DataTypes } = require("sequelize");

// Create Connection
const sequelize = new Sequelize("node", "sa", "sa123456", {
  host: "localhost",
  port: 1433,
  dialect: "mssql",
  dialectOptions: {
    // Optional
    options: {
      trustedConnection: true,
    },
  },
});

const ModelName = sequelize.define(
  "ModelName", // Model Name
  {
    // Column definitions
    columnName1: {
      // Column Attributes
      type: DataTypes.STRING,
      allowNull: false, // Not null constraint
      unique: true, // Unique constraint
      defaultValue: "default value", // Default value
      // Other column options
    },
    columnName2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      // Other column options
    },
    // Define more columns as needed
  },
  {
    // Model options
    tableName: "custom_table_name", // Custom table name
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` columns
    paranoid: true, // Adds a `deletedAt` column and does not actually delete rows
    underscored: true, // Use snake_case column names
    // Other model options
  }
);

// `sequelize.define` also returns the model
// sequalize.models stores all defined models
// this is a verification step
console.log(User === sequelize.models.User); // true
