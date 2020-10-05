var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
	  title: 'Express',
	  blogName : 'Hazel Blog',
	  greeting: 'Welcome'
  });
});

module.exports = router;
