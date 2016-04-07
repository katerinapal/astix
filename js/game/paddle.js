define(['drawer', 'block', 'conf', 'constants'],
    function(drawer, block, conf, constants) {
        var drawPaddle, movePaddle,
            defaultPosX = (drawer.canvasWidth / 2) - (conf.paddleWidth / 2),
            defaultPosY = drawer.canvasHeight - conf.paddleHeight,
            posX = defaultPosX,
            posY = defaultPosY,
            defaultPaddleSpeedX = 10,
            deltaPaddleX = 0,
            getX, getY,
            getWidth, getHeight;

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

            if (posX + deltaPaddleX < 0 ||
                posX + conf.paddleWidth + deltaPaddleX > drawer.canvasWidth)
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
            return conf.paddleWidth;
        };

        getHeight = function() {
            return conf.paddleHeight;
        };

        return {
            draw: drawPaddle,
            move: movePaddle,
            getX: getX,
            getY: getY,
            getWidth: getWidth,
            getHeight: getHeight,
        };
    })
