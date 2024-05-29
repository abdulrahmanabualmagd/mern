// The MANY
("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class B extends Model {
        static associate(models) {
            B.belongsTo(models.A, {
                foreignKey: "A_ID",
                as: "A",
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
            A_ID: {
                type: DataTypes.INTEGER,
            },
        },
        {
            sequelize,
            modelName: "B",
        }
    );
    return RolePermission;
};
