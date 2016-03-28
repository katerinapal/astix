define(['game/drawer', 'game/block', 'game/conf'],
    function(drawer, block, conf) {
        var drawPaddle,
            defaultPosX = (drawer.canvasWidth / 2) - (conf.paddleWidth / 2),
            defaultPosY = drawer.canvasHeight - conf.paddleHeight;

        drawPaddle = function() {
            block.draw(defaultPosX, defaultPosY, conf.paddleWidth, conf.paddleHeight);
        };

        return {
            draw: drawPaddle
        };
    })
