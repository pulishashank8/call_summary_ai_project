
const express = require('express');
const multer = require('multer');
const { uploadCall } = require('../controllers/callController');

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post('/upload-call', upload.single('audio'), uploadCall);

module.exports = router;
