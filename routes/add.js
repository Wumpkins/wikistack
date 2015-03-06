var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('addPage');
});

router.post('/submit', function(req, res) {
  var models = require('../models/');

  var title = req.body.title;
  var body = req.body.text;
  var url_name = title;

  var p = new models.Page({ "title": title, "body":body, "url_name":url_name });
  p.save();
  res.redirect('/');
});

module.exports=router;