const { Model, DataTypes } = require("sequelize");

class Collection extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING(75),
        }, {
            sequelize,
            tableName: 'collection',
        })
    }

    static associate(models) {
        this.hasMany(models.Flashcards, { foreignKey: 'collection_id', as: 'flashcards' })
    }
}

module.exports = Collection;