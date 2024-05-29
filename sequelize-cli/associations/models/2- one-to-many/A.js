// The ONE
("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class A extends Model {
        static associate(models) {
            A.hasMany(models.B, {
                foreignKey: "A_ID",
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
            sequelize,
            modelName: "A",
        }
    );

    return RolePermission;
};
