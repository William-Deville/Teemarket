const router = require('express').Router();
const posterController = require('../controllers/poster.controller');

router.get('/', posterController.readPoster);
router.post('/', posterController.createPoster);
router.patch('/:id', posterController.updatePoster);
router.delete('/:id', posterController.deletePoster);

module.exports = router;