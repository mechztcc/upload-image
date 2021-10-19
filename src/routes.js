const { Router } = require('express');
const multer = require('multer');

const multerConfig = require('./config/multer');
const ImageController = require('./controller/ImageController');


const router = Router();

router.get('/', (req, res) => {
    res.json({ success: 'true' });
});

router.post('/upload', multer(multerConfig).single('file'), ImageController.create);

module.exports = router;