"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class junctionAB extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    junctionAB.init(
        {
            A_ID: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: "A",
                    key: "id",
                },
            },
            B_ID: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: "B",
                    key: "id",
                },
            },
        },
        {
            sequelize,
            modelName: "junctionAB",
            primaryKey: ["A_ID", "B_ID"],
        }
    );

    return RolePermission;
};
