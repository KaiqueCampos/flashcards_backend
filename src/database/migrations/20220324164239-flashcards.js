'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('flashcards', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      collection_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'collection', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      front_information : {
        type: Sequelize.STRING,
        allowNull: false
      },
      back_information : {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('flashcards')
  }
};
