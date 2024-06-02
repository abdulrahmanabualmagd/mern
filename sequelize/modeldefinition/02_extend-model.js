// Define the User model by extending Sequelize's Model class
class User extends Model {
  // Instance method
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Class method
  static findByLastName(lastName) {
    return this.findAll({ where: { lastName } });
  }
}

// Initialize the model attributes and options
User.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize, // Pass the Sequelize instance
    modelName: "User", // Name of the model
    tableName: "users", // Custom table name if different from model name
    timestamps: true, // Enable timestamps
  }
);

// Sync the model with the database
(async () => {
  await sequelize.sync({ force: true });

  // Example usage
  const user = await User.create({ firstName: "John", lastName: "Doe" });
  console.log(user.getFullName()); // John Doe

  const doeUsers = await User.findByLastName("Doe");
  console.log(doeUsers.length); // 1 (or more, depending on data)
})();
