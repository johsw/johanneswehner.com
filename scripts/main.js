"use strict";

//import Canvas from "./canvas";
import Pointer from "./pointer";

var init = function() {
  const pointer = new Pointer();
  const canvasEl = document.getElementById("canvas");
  //const canvas = new Canvas(canvasEl);
};

document.addEventListener("DOMContentLoaded", init());
