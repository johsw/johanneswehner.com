"use strict";

import "./pointer.scss";

export default class Pointer {
  constructor(el) {
    this.clientX = -100;
    this.clientY = -100;
    this.cursor = document.querySelector(".cursor");
    this.innerCursor = document.createElement("div");
    this.innerCursor.id = "inner-cursor";

    this.cursor.appendChild(this.innerCursor);
    this.links = document.querySelectorAll("a");

    document.addEventListener("DOMContentLoaded", () => {
      this.init();
      this.initCursor();
    });
  }

  init() {
    for (let n = 0; n < this.links.length; n++) {
      const link = this.links[n];
      link.addEventListener("mouseenter", () => {
        this.innerCursor.classList.add("pulse");
      });
      link.addEventListener("mouseout", () => {
        this.innerCursor.classList.remove("pulse");
      });
    }
  }
  initCursor() {
    // add listener to track the current mouse position
    document.addEventListener("mousemove", (e) => {
      this.clientX = e.clientX;
      this.clientY = e.clientY;
    });
    this.render();
  }

  // transform the innerCursor to the current mouse position
  // use requestAnimationFrame() for smooth performance
  render() {
    this.cursor.style.transform = `translate(${this.clientX}px, ${this.clientY}px)`;
    // if you are already using TweenMax in your project, you might as well
    // use TweenMax.set() instead
    // TweenMax.set(innerCursor, {
    //   x: clientX,
    //   y: clientY
    // });

    requestAnimationFrame(() => {
      this.render();
    });
  }
}
