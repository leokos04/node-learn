const events = require("events");
var eventEmitter = new events.EventEmitter();

//on - listen for an event
//emit - emit an event

eventEmitter.on("my_event", () => {
  console.log("data received successfully.");
});

eventEmitter.on("resp", (name, id) => {
  console.log(`some other logic there : name ${name} , id ${id}`);
});

eventEmitter.emit("my_event");
eventEmitter.emit("resp", "leo", 04);
