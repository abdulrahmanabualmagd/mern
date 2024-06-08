("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class B extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // Many-to-Many: B belongs to many As through join table AB
            B.belongsToMany(models.A, {
                through: "junctionAB",
                foreignKey: "B_ID",
                otherKey: "A_ID",
                as: "As",
            });
        }
    }
    B.init(
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
            modelName: "B",
        }
    );

    return B;
};
