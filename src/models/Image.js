const { Model, DataTypes } = require("sequelize");


class Image extends Model {
    static init(connection) {
        super.init({
            key: DataTypes.STRING,
            name: DataTypes.STRING,
            size: DataTypes.INTEGER,
            buffer: DataTypes.BLOB
        }, {
            sequelize: connection
        })
    }
}

module.exports = Image;