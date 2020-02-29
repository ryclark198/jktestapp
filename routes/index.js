var express = require('express');
var router = express.Router();
var logger = require('../logger');
var math = require('./math');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Ryan\'s Web App' });
});

router.get('/another', function(req, res, next) {
  res.render('another', { title: 'Because he was dead!' });
});
// /api/add?n1=xn2=
router.get('/api/add', function(req,res, next) {
  var n1 =parseInt(req.query.n1);
  var n2 =parseInt(req.query.n2);
  logger.info('api/add Used to add ' +n1+ 'and' +n2);
  res.json(math.add(n1,n2));
});

module.exports = router;
