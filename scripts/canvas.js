"use strict";

console.log("BUNDLE");

export default class Canvas {
  constructor(el) {
    console.log("construct");
    console.log(el);
    this.canvas = el;
    this.context = this.canvas.getContext("2d");
    this.configure();
    this.setSize();
    this.context.beginPath();

    this.canvasX = 0;
    this.canvasY = 0;
    this.directionY = 1;
    this.directionX = 1;
    this.step = 180;
    this.color = "#d0d0f0";

    this.draw();
    // on resize
  }
  configure() {
    this.width = window.innerWidth * 2;
    this.height = window.innerHeight * 2;
  }
  setSize() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  draw() {
    setInterval(() => {
      /*var w = Math.floor(Math.random() * 20);
      var x = Math.floor(Math.random() * this.canvas.width);
      var y = Math.floor(Math.random() * this.canvas.height);
      */
      // Just a add a color we are using fillStyle
      this.canvasX += Math.floor(Math.random() * this.step * this.directionX);
      this.canvasY += Math.floor(Math.random() * this.step * this.directionY);

      this.context.fillStyle = this.color;
      this.context.strokeStyle = this.color;

      // Draw the actual square with fillRect
      //this.context.fillRect(x, y, w, w);

      this.context.lineTo(this.canvasX, this.canvasY);
      this.context.stroke();

      if (this.canvasY > this.height || this.canvasY < 0) {
        this.directionY *= -1;
        console.log("Y");
      }
      if (this.canvasX > this.width || this.canvasX < 0) {
        this.directionX *= -1;
      }
    }, 40);
  }
}
