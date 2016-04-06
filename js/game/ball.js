define(['game/drawer', 'game/conf'], function(drawer, conf) {
    var drawBall, defaultStrokeColor = '#000', moveBall,
        posX = 250, posY = 250, deltaX = 10, deltaY = 10,
        ballRadius = 10, computeBallCollision;

    drawBall = function() {
        drawer.ctx.beginPath();
        drawer.ctx.arc(posX, posY, ballRadius, 0, Math.PI * 2, true);
        drawer.ctx.strokeStyle = defaultStrokeColor;
        drawer.ctx.stroke();
        drawer.ctx.fill();
    };

    moveBall = function(endGame) {
        computeBallCollision(endGame);

        posX += deltaX;
        posY += deltaY;
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
    }

    return {
        draw: drawBall,
        move: moveBall,
    };
})
