const { Model, DataTypes } = require("sequelize");

class Flashcards extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING(75), 
        }, {
            sequelize,
        })
    }

    static associate(models) {
        this.belongsTo(models.Collection, {
            foreignKey: 'collection_id',
            as: 'collection'
        })
    }       
}   

module.exports = Flashcards;