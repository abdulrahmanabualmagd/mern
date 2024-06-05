"use strict";
// The MANY
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Bs", {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            // We include the id of the parent and make reference to it
            A_ID: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: "As", // name of the target model
                    key: "id", // key in the target model
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Bs");
    },
};
