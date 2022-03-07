const {DataTypes} = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('operation', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        ammount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        concept: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        operation_type: {
            type: DataTypes.ENUM('debit', 'credit'),
            allowNull: false
        }

    })
}