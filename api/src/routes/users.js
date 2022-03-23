const {Router} = require('express');
const router = Router();

const usersController = require('../controllers/users')


router.get('/', usersController.getAllElements);
router.get('/:id', usersController.getById);
router.post('/', usersController.addElement);
router.put('/:id', usersController.modifyElement);
router.delete('/:id', usersController.deleteElement);

module.exports = router;