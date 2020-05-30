import {
    blocksPerRow as confjs_blocksPerRow,
    divinaProportio as confjs_divinaProportio,
    blockWidth as confjs_blockWidth,
    blockHeight as confjs_blockHeight,
    startBlocksQuantity as confjs_startBlocksQuantity,
    paddleWidth as confjs_paddleWidth,
    paddleHeight as confjs_paddleHeight,
    BALL as confjs_BALL,
    BLOCK as confjs_BLOCK,
    BOARD as confjs_BOARD,
    PADDLE as confjs_PADDLE,
} from ".\\conf.js";

import {
    ctx as drawerjs_ctx,
    canvasWidth as drawerjs_canvasWidth,
    canvasHeight as drawerjs_canvasHeight,
    clearArea as drawerjs_clearArea,
} from ".\\drawer.js";

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

export ;
