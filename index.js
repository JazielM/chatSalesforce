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

    /*fs.open('mynewfile2.txt', 'w', function (err, file) {
      if (err) {
        //data["imprime"] = "No Existe el archivo";
        throw err;
      }
      var conversation_json =  JSON.parse(file);

      if(file.length == 0){
        var id_conversation = data.currentUserId+':'+data.usuarioId;

        conversation_json["id_conversation"] = id_conversation
        conversation_json["messages"] = {
          "id_message" : id_conversation + ":" + 0,
          "body" : data.msg,
          "sender_name" : data.currentUserName,
          "date" : data.date,
          "time" : data.time
        }; 
      }else{
        conversation_json["messages"].push({
          "id_message" : conversation_json["id_conversation"] + ":" + (conversation_json["messages"].length+1),
          "body" : data.msg,
          "sender_name" : data.currentUserName,
          "date" : data.date,
          "time" : data.time
        }); 
      }
      file = JSON.stringify(conversation_json);
      data["imprime"] = conversation_json;
      //var conversation =  JSON.parse(file);

      //data["imprime"] = "Existe el archivo";
      console.log('Saved!');
    });*/

    /*fs.access("Jaz.txt", fs.F_OK, (err) => {
      if (err) {
        console.error(err);
        data["imprime"] = "No Existe el archivo";
        return
      }
      data["imprime"] = "Existe el archivo";
      //file exists
    })*/

    //process.stdout.write(conversation_json);
    //data["imprime"] = fs.readFileSync('example.txt', 'utf8');
    //console.log(JSON.stringify(conversation_json));
    //alert(JSON.stringify(conversation_json));
    io.emit(data.currentUserId+':'+data.usuarioId, JSON.stringify(data));
  });
});


http.listen(port, function(){
  console.log('listening on *:' + port);
});
