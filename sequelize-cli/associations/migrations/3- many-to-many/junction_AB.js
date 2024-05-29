"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("AB", {
            A_ID: {
                type: Sequelize.UUID,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: "A",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            B_ID: {
                type: Sequelize.UUID,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: "B",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("AB");
    },
};
