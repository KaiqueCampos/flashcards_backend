'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('collection', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name : {
        type: Sequelize.STRING(75),
        allowNull: false
      },
      created_at : {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at : {
        type: Sequelize.DATE,
        allowNull: false
      }
    })  
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('collection')
  }
};
