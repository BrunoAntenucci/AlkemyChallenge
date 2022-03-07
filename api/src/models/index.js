require('dotenv').config();
const {Sequelize} = require('sequelize');

const {DB_NAME, DB_HOST, DB_USER, DB_PASSWORD} = process.env;

const OperationMaker = require('./operations');
const UserManipulator = require('./users');

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
)

const Operations = OperationMaker(sequelize);
const Users = UserManipulator(sequelize);

Operations.belongsToMany(Users, {through: 'UsersOperations'});
Users.belongsToMany(Operations, {through: 'UsersOperations'});

module.exports = {
    conn: sequelize,
    Operations,
    Users,
}