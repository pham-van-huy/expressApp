var express = require('express');
var router = express.Router();
const postController = require('../controllers/PostController')

/* GET users listing. */
router.get('/', postController.create);
router.post('/', postController.store);
router.get('/index', postController.index);

module.exports = router;