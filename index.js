var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var conversation_json = {"id_conversation" : "0051U000002CgnKQAS:0051U000005ujBxQAI"};
io.on('connection', function(socket){
  socket.on('chat message', function(return_data){

    var data = JSON.parse(return_data);

    /* Aquí :: Verificar si existe la conversación */

    /* ----- */

    /* Comparamos si existe el */
    if("messages" in data){
      conversation_json["messages"].push({
        "id_message" : conversation_json["id_conversation"] + ":" + conversation_json["messages"].length+1,
        "body" : data.msg,
        "sender_name" : data.currentUserName,
        "date" : data.date,
        "time" : data.time
      }); 

    }

    console.log(conversation_json);
    io.emit(data.currentUserId+':'+data.usuarioId, return_data);
  });
});


http.listen(port, function(){
  console.log('listening on *:' + port);
});
