var express = require('express');
var router = express.Router();
const users_controller = require('../controllers/UserController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup', (req, res, next) => {
  res.render('signup')
})

router.get('/test', users_controller.test)


module.exports = router;
