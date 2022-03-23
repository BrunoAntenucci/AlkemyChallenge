const {Operations} = require('../models/index')
const ModelCrud = require('./index')

const operationsController = new ModelCrud(Operations)

module.exports = operationsController;