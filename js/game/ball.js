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

var collision;
var computeBallCollisionWithArea;
var drawBall, posX = 250, posY = 250, deltaX = 10, deltaY = 10,
    ballRadius = 10, computeBallCollision, moveBall, getX, getY, getDeltaX,
    getDeltaY, setDeltaX, setDeltaY, isDestroyed, destroyed = false;

drawBall = function() {
    drawerjs_ctx.beginPath();
    drawerjs_ctx.arc(posX, posY, ballRadius, 0, Math.PI * 2, true);

    drawerjs_ctx.strokeStyle = confjs_BALL.STROKE_COLOR;
    drawerjs_ctx.fillColor = confjs_BALL.FILL_COLOR;

    drawerjs_ctx.stroke();
    drawerjs_ctx.fill();
};

moveBall = function(elements) {
    computeBallCollisionWithArea();
    collision(elements);

    posX += deltaX;
    posY += deltaY;
};

collision = function(elements) {
    elements.forEach(function(element, index) {
        if (posY + deltaY + ballRadius >= element.getY()) {
            if (posX + deltaX >= element.getX() &&
                posX + deltaX <= element.getX() + element.getWidth()
            ) {
                deltaY = -deltaY;
            }
        }
    });
};

computeBallCollisionWithArea = function() {
    if (posY + deltaY - ballRadius < 0) {
        deltaY = -deltaY;
    }

    if (posY + deltaY + ballRadius > drawerjs_canvasHeight) {
        destroyed = true;
    }

    if (posX + deltaX + ballRadius > drawerjs_canvasWidth ||
        posX + deltaX - ballRadius < 0)
    {
        deltaX = -deltaX;
    }
};

getX = function() {
    return posX;
};

getY = function() {
    return posY;
};

getDeltaX = function() {
    return deltaX;
};

getDeltaY = function() {
    return deltaY;
};

setDeltaX = function(newDeltaX) {
    deltaX = newDeltaX;
};

setDeltaY = function(newDeltaY) {
    deltaY = newDeltaY;
};

isDestroyed = function() {
    return destroyed;
};

var ball_obj = {
    draw: drawBall,
    move: moveBall,
    getX: getX,
    getY: getY,
    getDeltaX: getDeltaX,
    getDeltaY: getDeltaY,
    setDeltaX: setDeltaX,
    setDeltaY: setDeltaY,
    isDestroyed: isDestroyed,
};

export { ball_obj };
