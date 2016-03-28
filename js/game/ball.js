define(['game/drawer', 'game/conf'], function(drawer, conf) {
    var drawBall, defaultStrokeColor = '#000', moveBall,
        posX = 250, posY = 250, deltaX = 10, deltaY = 10;

    drawBall = function() {
        drawer.ctx.beginPath();
        drawer.ctx.arc(posX, posY, 10, 0, Math.PI * 2, true);
        drawer.ctx.strokeStyle = defaultStrokeColor;
        drawer.ctx.stroke();
        drawer.ctx.fill();
    };

    moveBall = function() {
        posX += deltaX;
        posY += deltaY;
    }

    return {
        draw: drawBall,
        move: moveBall,
    };
})
