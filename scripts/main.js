"use strict";

import Canvas from "./canvas";

var init = function() {
  const canvasEl = document.getElementById("canvas");
  const canvas = new Canvas(canvasEl);
};

document.addEventListener("DOMContentLoaded", init());
