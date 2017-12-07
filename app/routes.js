//require express
var express = require('express')

//create router object
var router = express.Router();

//export our router
module.exports = router; 

//route our app homepage
router.get('/', function(req, res){
  res.send('hello world again');
});
//route for about page
router.get('/about', function(req, res){
  res.send('I am your about page');
});

router.get('/contact');
router.post('/contact');
