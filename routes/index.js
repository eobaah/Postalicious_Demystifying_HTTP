var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/request/build', function(req, res) {
  let getData;
  console.log("do we get here?")
  request(req.body.host, function(error, res, body) {
    getData = textBody
  })
  res.render('index', { textBody: JSON.stringify(getData) })
  res.redirect('/')
})

module.exports = router;
