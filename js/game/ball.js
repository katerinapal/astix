define(['game/drawer', 'game/conf'], function(drawer, conf) {
    var drawBall, defaultStrokeColor = '#000', moveBall,
        posX = 250, posY = 250, deltaX = 10, deltaY = 10,
        ballRadius = 10, computeBallCollision,
        getX, getY;

    drawBall = function() {
        drawer.ctx.beginPath();
        drawer.ctx.arc(posX, posY, ballRadius, 0, Math.PI * 2, true);
        drawer.ctx.strokeStyle = defaultStrokeColor;
        drawer.ctx.stroke();
        drawer.ctx.fill();
    };

    moveBall = function(elements, endGame) {
        // collision for board
        computeBallCollision(endGame);

        // collision with elements
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

    computeBallCollision = function(endGame) {
        if (posY + deltaY - ballRadius < 0) {
            deltaY = -deltaY;
        }

        if (posY + deltaY + ballRadius > drawer.canvasHeight) {
            endGame();
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

    return {
        draw: drawBall,
        move: moveBall,
        getX: getX,
        getY: getY,
    };
})
