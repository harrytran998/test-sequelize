module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(() =>
        queryInterface.createTable("users", {
          id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.literal("uuid_generate_v4()")
          },
          full_name: {
            type: Sequelize.STRING,
            allowNull: false
          }
        })
      );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};
