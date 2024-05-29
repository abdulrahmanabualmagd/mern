"use strict";
// the ONE
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("As", {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("As");
    },
};
