var express = require('express');
var router = express.Router();
const multer  = require('multer');

var controller = require('../controllers/user.controller');

router.get('/', controller.index);
router.post('/',controller.create);

module.exports = router;