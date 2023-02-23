const express = require('express');
const router = express.Router();

const controllers = require('../controllers/order');

router.get('/:userId', controllers.getOrder);
router.post('/', controllers.addOrder);
router.patch('/', controllers.updateOrder);
router.delete('/', controllers.deleteOrder);

module.exports = router;
