var events = require("events");
var emitter = new events.EventEmitter();
emitter.setMaxListeners(4);
var ConnectHandler = function connect() {
    console.log("Connection created");
    emitter.emit("receive");
};

var ConnectHandler2 = function connect() {
    console.log("Connection created second handler");
    //emitter.emit("receive");
};
emitter.on("connection", ConnectHandler);
emitter.on("connection", ConnectHandler2);

emitter.once("receive", function() { //emitter.once("receive",function() {
    console.log("Data received");
});

emitter.emit("connection");
emitter.emit("receive");
console.log(emitter, "connection")