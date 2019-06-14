var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var fs = require('fs');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//var conversation_json = {"id_conversation" : "0051U000002CgnKQAS:0051U000005ujBxQAI"};
io.on('connection', function(socket){
  socket.on('chat message', function(return_data){

    var data = JSON.parse(return_data);
    fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

    fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
    /* Aquí :: Verificar si existe la conversación */

    /* ----- */

    /* Comparamos si existe el */
    /*if("messages" in data){
      conversation_json["messages"].push({
        "id_message" : conversation_json["id_conversation"] + ":" + (conversation_json["messages"].length+1),
        "body" : data.msg,
        "sender_name" : data.currentUserName,
        "date" : data.date,
        "time" : data.time
      }); 
    }else{
      conversation_json["messages"] = {
        "id_message" : conversation_json["id_conversation"] + ":" + 0,
        "body" : data.msg,
        "sender_name" : data.currentUserName,
        "date" : data.date,
        "time" : data.time
      }; 
    }*/

    io.emit(data.currentUserId+':'+data.usuarioId, JSON.stringify(data));
  });
});


http.listen(port, function(){
  console.log('listening on *:' + port);
});
