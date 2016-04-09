define(['drawer', 'conf'], function(drawer, conf) {
    var drawBall, posX = 250, posY = 250, deltaX = 10, deltaY = 10,
        ballRadius = 10, computeBallCollision, moveBall, getX, getY, getDeltaX,
        getDeltaY, setDeltaX, setDeltaY, isDestroyed, destroyed = false;

    drawBall = function() {
        drawer.ctx.beginPath();
        drawer.ctx.arc(posX, posY, ballRadius, 0, Math.PI * 2, true);

        drawer.ctx.strokeStyle = conf.BALL.STROKE_COLOR;
        drawer.ctx.fillColor = conf.BALL.FILL_COLOR;

        drawer.ctx.stroke();
        drawer.ctx.fill();
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

        if (posY + deltaY + ballRadius > drawer.canvasHeight) {
            destroyed = true;
        }

        if (posX + deltaX + ballRadius > drawer.canvasWidth ||
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

    return {
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
})
