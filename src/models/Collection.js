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
}   

module.exports = Collection;