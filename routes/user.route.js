var express = require('express');
var router = express.Router();
const multer  = require('multer');


var controller = require('../controllers/user.controllers');
var validate = require('../validate/user.validate');

const upload = multer({ dest: './public/uploads/' });
router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.post('/create', 
	upload.single('file'), 
	validate.postCreate, 
	controller.postCreate);

router.get('/:id', controller.view);


module.exports = router;