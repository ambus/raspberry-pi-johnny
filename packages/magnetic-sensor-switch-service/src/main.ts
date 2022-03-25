import { Board, Led } from "johnny-five";
// const five = require("johnny-five");

console.log("Hello World!");

const board = new Board();

board.on("ready", function () {
  // Create an Led on pin 27
  const led = new Led(27);

  // Strobe the pin on/off, defaults to 100ms phases
  led.strobe(1000);
});
