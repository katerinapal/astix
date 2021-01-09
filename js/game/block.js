import { BLOCK as conf_BLOCK } from ".\\conf.js";
import { ctx as drawer_ctx } from ".\\drawer.js";
var drawBlock, setStrokeColor, setFillColor,
    fillColor = conf_BLOCK.FILL_COLOR,
    strokeColor = conf_BLOCK.STROKE_COLOR;

drawBlock = function(x, y, width, height) {
    drawer_ctx.fillStyle = fillColor;
    drawer_ctx.strokeStyle = strokeColor;
    drawer_ctx.lineWidth = 2;

    drawer_ctx.fillRect(x, y, width, height);
    drawer_ctx.strokeRect(x, y, width, height);
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

var mod_block = {
    draw: drawBlock,
    setStrokeColor: setStrokeColor,
    setFillColor: setFillColor,
};

var draw = drawBlock;
var block_setStrokeColor = setStrokeColor;
var block_setFillColor = setFillColor;
export { draw, block_setStrokeColor as setStrokeColor, block_setFillColor as setFillColor };
