import {
    NONE as constantsjs_NONE,
    DIRECTION as constantsjs_DIRECTION,
    KEYBOARD as constantsjs_KEYBOARD,
    BLOCK as constantsjs_BLOCK,
    GAME as constantsjs_GAME,
} from ".\\constants.js";

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
    draw as blockjs_draw,
    setStrokeColor as blockjs_setStrokeColor,
    setFillColor as blockjs_setFillColor,
} from ".\\block.js";

import {
    ctx as drawerjs_ctx,
    canvasWidth as drawerjs_canvasWidth,
    canvasHeight as drawerjs_canvasHeight,
    clearArea as drawerjs_clearArea,
} from ".\\drawer.js";

var drawPaddle, movePaddle,
    defaultPosX = (drawerjs_canvasWidth / 2) - (confjs_paddleWidth / 2),
    defaultPosY = drawerjs_canvasHeight - confjs_paddleHeight,
    posX = defaultPosX,
    posY = defaultPosY,
    defaultPaddleSpeedX = 10,
    deltaPaddleX = 0,
    getX, getY,
    getWidth, getHeight;

drawPaddle = function() {
    blockjs_setStrokeColor("#000");
    blockjs_draw(posX, posY, confjs_paddleWidth, confjs_paddleHeight);
};

movePaddle = function(direction) {
    deltaPaddleX = 0;

    if (constantsjs_DIRECTION.LEFT === direction) {
        deltaPaddleX = -defaultPaddleSpeedX;
    }

    if (constantsjs_DIRECTION.RIGHT === direction) {
        deltaPaddleX = defaultPaddleSpeedX;
    }

    if (posX + deltaPaddleX < 0 ||
        posX + confjs_paddleWidth + deltaPaddleX > drawerjs_canvasWidth)
    {
        deltaPaddleX = 0;
    }

    posX += deltaPaddleX;
};

getX = function() {
    return posX;
};

getY = function() {
    return posY;
};

getWidth = function() {
    return confjs_paddleWidth;
};

getHeight = function() {
    return confjs_paddleHeight;
};

var paddle_obj = {
    draw: drawPaddle,
    move: movePaddle,
    getX: getX,
    getY: getY,
    getWidth: getWidth,
    getHeight: getHeight,
};

export { paddle_obj };
