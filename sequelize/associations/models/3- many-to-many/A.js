("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class A extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // Many-to-Many: A belongs to many Bs through join table AB
            A.belongsToMany(models.B, {
                through: "junctionAB",
                foreignKey: "A_ID",
                otherKey: "B_ID",
                as: "Bs",
            });
        }
    }
    A.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
            },
        },
        {
            // Other Options
            sequelize,
            modelName: "A", 
        }
    );

    return A;
};
