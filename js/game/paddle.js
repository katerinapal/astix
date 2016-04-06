define(['game/drawer', 'game/block', 'game/conf', 'game/constants'],
    function(drawer, block, conf, constants) {
        var drawPaddle, movePaddle,
            defaultPosX = (drawer.canvasWidth / 2) - (conf.paddleWidth / 2),
            defaultPosY = drawer.canvasHeight - conf.paddleHeight,
            posX = defaultPosX,
            posY = defaultPosY,
            defaultPaddleSpeedX = 10,
            deltaPaddleX = 0;

        drawPaddle = function() {
            block.draw(posX, posY, conf.paddleWidth, conf.paddleHeight);
        };

        movePaddle = function(direction) {
            deltaPaddleX = 0;

            if (constants.DIRECTION.LEFT === direction) {
                deltaPaddleX = -defaultPaddleSpeedX;
            }

            if (constants.DIRECTION.RIGHT === direction) {
                deltaPaddleX = defaultPaddleSpeedX;
            }

            console.log(posX);

            if (posX + deltaPaddleX < 0 ||
                posX + conf.paddleWidth + deltaPaddleX > drawer.canvasWidth)
            {
                deltaPaddleX = 0;
            }

            posX += deltaPaddleX;
        };

        return {
            draw: drawPaddle,
            move: movePaddle
        };
    })
