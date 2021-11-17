const router = require('express').Router();
const posterController = require('../controllers/poster.controller');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, `./uploads/`);
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + file.originalname)
    }
});
const upload = multer({storage:storage})

router.get('/', posterController.readPoster);
router.post('/', upload.single('file'), posterController.createPoster);
router.patch('/:id', posterController.updatePoster);
router.delete('/:id', posterController.deletePoster);

module.exports = router;