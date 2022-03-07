const {DataTypes} = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('user', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        email: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        password: { 
            type: DataTypes.STRING,
            allowNull: false
        },
    })
}