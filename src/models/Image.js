const { Model, DataTypes } = require("sequelize");


class Image extends Model {
    static init(connection) {
        super.init({
            key: DataTypes.STRING,
            name: DataTypes.STRING,
            size: DataTypes.INTEGER,
            url: DataTypes.STRING
        }, {
            sequelize: connection
        })
    }
}

module.exports = Image;