const {Users} = require('../models/index')
const ModelCrud = require('./index')

const usersController = new ModelCrud(Users)

module.exports = usersController;