var rbush = require("rbush");
var factory = require("./plugin/leaflet.canvas-layer");

window.L.CanvasLayer = factory(L);
window.rbush = rbush;
