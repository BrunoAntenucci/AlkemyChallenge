const {Router} = require('express');
const router = Router();

const operationsController = require('../controllers/operations')


router.get('/', operationsController.getAllElements);
router.get('/:id', operationsController.getById);
router.post('/', operationsController.addElement);
router.put('/:id', operationsController.modifyElement);
router.delete('/:id', operationsController.deleteElement);

module.exports = router;