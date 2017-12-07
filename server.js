// //import http module
// var http = require('http');
// //handle sending requests and returning responses
// function handleRequests(req, res){
//   //return string
//   res.end('Hello world!');
// }
// //create server
// var server = http.createServer(handleRequests);
// //start server and listen on port
// server.listen(3000, function(){
//   console.log('Listening on port 8080')
// });

var express = require('express');
var app = express();
var port = 3000;

var router = require('./app/routes');
//middleware function, responding by using the router file
app.use('/', router);

//start server
app.listen(port,function(){
  console.log('app started');
});
