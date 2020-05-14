import { conf_obj as conf } from ".\\conf.js";
import { drawer_obj as drawer } from ".\\drawer.js";
var drawBlock, setStrokeColor, setFillColor,
    fillColor = conf.BLOCK.FILL_COLOR,
    strokeColor = conf.BLOCK.STROKE_COLOR;

drawBlock = function(x, y, width, height) {
    drawer.ctx.fillStyle = fillColor;
    drawer.ctx.strokeStyle = strokeColor;
    drawer.ctx.lineWidth = 2;

    drawer.ctx.fillRect(x, y, width, height);
    drawer.ctx.strokeRect(x, y, width, height);
};

setStrokeColor = function(newStrokeColor) {
    if (typeof newStrokeColor !== "undefined") {
        strokeColor = newStrokeColor;
    }
};

setFillColor = function(newFillColor) {
    if (typeof newFillColor !== "undefined") {
        fillColor = newFillColor;
    }
};

var block_obj = {
    draw: drawBlock,
    setStrokeColor: setStrokeColor,
    setFillColor: setFillColor,
};

export { block_obj };
