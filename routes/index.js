var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Ryan\'s Web App' });
});

router.get('/another', function(req, res, next) {
  res.render('another', { title: 'Because he was dead!' });
});

module.exports = router;
