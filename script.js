var event = require("events");
var emitter = new event.EventEmitter();

var time = new Date();
var i = 1;
var k = 1;

function userIn(){
    console.log("Пользователь "+i+" вошёл в "+time.getHours()+" часов "+time.getMinutes()+" минут");
    i++;
}

var userOut = function(){
    console.log("Пользователь "+k+" вышел в "+time.getHours()+" часов "+time.getMinutes()+" минут");
    k++;
}

emitter.on("login", userIn);
emitter.on("logout", userOut);


emitter.emit("login");
emitter.emit("login");
emitter.emit("login");

emitter.emit("logout");
emitter.emit("logout");
