import { BLOCK as confjs_BLOCK } from ".\\conf.js";
import { ctx as drawerjs_ctx } from ".\\drawer.js";
var drawBlock, setStrokeColor, setFillColor,
    fillColor = confjs_BLOCK.FILL_COLOR,
    strokeColor = confjs_BLOCK.STROKE_COLOR;

drawBlock = function(x, y, width, height) {
    drawerjs_ctx.fillStyle = fillColor;
    drawerjs_ctx.strokeStyle = strokeColor;
    drawerjs_ctx.lineWidth = 2;

    drawerjs_ctx.fillRect(x, y, width, height);
    drawerjs_ctx.strokeRect(x, y, width, height);
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

var block_obj_draw = drawBlock;
var block_obj_setStrokeColor = setStrokeColor;
var block_obj_setFillColor = setFillColor;
export { block_obj_draw as draw, block_obj_setStrokeColor as setStrokeColor, block_obj_setFillColor as setFillColor };
