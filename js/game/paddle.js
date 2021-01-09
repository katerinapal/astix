import { DIRECTION as constants_DIRECTION } from ".\\constants.js";
import { paddleWidth as conf_paddleWidth, paddleHeight as conf_paddleHeight } from ".\\conf.js";
import { draw as block_draw, setStrokeColor as block_setStrokeColor } from ".\\block.js";
import { canvasWidth as drawer_canvasWidth, canvasHeight as drawer_canvasHeight } from ".\\drawer.js";
var drawPaddle, movePaddle,
    defaultPosX = (drawer_canvasWidth / 2) - (conf_paddleWidth / 2),
    defaultPosY = drawer_canvasHeight - conf_paddleHeight,
    posX = defaultPosX,
    posY = defaultPosY,
    defaultPaddleSpeedX = 10,
    deltaPaddleX = 0,
    getX, getY,
    getWidth, getHeight;

drawPaddle = function() {
    block_setStrokeColor("#000");
    block_draw(posX, posY, conf_paddleWidth, conf_paddleHeight);
};

movePaddle = function(direction) {
    deltaPaddleX = 0;

    if (constants_DIRECTION.LEFT === direction) {
        deltaPaddleX = -defaultPaddleSpeedX;
    }

    if (constants_DIRECTION.RIGHT === direction) {
        deltaPaddleX = defaultPaddleSpeedX;
    }

    if (posX + deltaPaddleX < 0 ||
        posX + conf_paddleWidth + deltaPaddleX > drawer_canvasWidth)
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
    return conf_paddleWidth;
};

getHeight = function() {
    return conf_paddleHeight;
};

var mod_paddle = {
    draw: drawPaddle,
    move: movePaddle,
    getX: getX,
    getY: getY,
    getWidth: getWidth,
    getHeight: getHeight,
};

export { mod_paddle };
