var express = require('express');
var router = express.Router();
var requestMethod = require('request');

/* GET home page. */
// router.get('/', function(request, response, next) {
//   response.render('index', { title: 'Express' });
// });

router.get('/', function(request, response, next) {
  response.render('index');
});

router.get('/request/build', function(request, response) {
  let getData;
  console.log("do we get here?")
  requestMethod(request.body.host, function(error, response, body) {
    getData = textBody
  })
  response.render('index', { textBody: JSON.stringify(getData) })
  response.redirect('/')
})

module.exports = router;
