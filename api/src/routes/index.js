const {Router} = require('express');

const router = Router();

const OperationsRoute = require('./operations.js')
const UsersRoute = require('./users.js')


router.use('/operations', OperationsRoute)
router.use('/useres', UsersRoute)


module.exports = router;