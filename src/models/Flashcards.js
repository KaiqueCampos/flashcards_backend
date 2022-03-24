const { Model, DataTypes } = require("sequelize");

class Flashcards extends Model {
    static init(sequelize) {
        super.init({
            front_information: DataTypes.STRING, 
            back_information: DataTypes.STRING, 
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