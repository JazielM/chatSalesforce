var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
     var temp = JSON.parse(msg);
    io.emit(temp.currentUserId+':'+temp.usuarioId, msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
/*const express     = require('express');
const path        = require('path');
const PORT        = process.env.PORT || 5000;
const bodyParser  = require('body-parser');


var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var server  = require('http').Server(app);
var io    = require('socket.io')(server, { origins: '*:*'});

var request = require('request');



app.post('/catchedMessages', function (req, res) {

  
  res.setHeader('Content-Type', 'application/json');
  //if(req.body.messages[0].author.indexOf('5581047059') < 0 || req.body.messages[0].author.indexOf('5564030776') < 0 || req.body.messages[0].senderName.indexOf('Banda') < 0 || req.body.messages[0].author.indexOf('5583492958') < 0  || req.body.messages[0].author.indexOf('2351116012') < 0  || req.body.messages[0].author.indexOf('5523371751') < 0 ){
    //io.emit('5569648556', JSON.stringify(req.body, null, 2));
    //io.emit('5569648556', JSON.parse(req.body.messages[0].body));
  //}

  io.emit('chat message', req.body);



  res.end(JSON.stringify(req.body, null, 2));
});*/
