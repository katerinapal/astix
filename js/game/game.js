require(['domReady!', 'game/drawer', 'game/board', 'game/paddle', 'game/ball',
    'game/constants'],
    function(doc, drawer, board, paddle, ball, constants) {
        var startGame, animate, gameLoop, endGame, paddleMove;

        startGame = function() {
            paddleMove = constants.NONE;
            gameLoop = setInterval(animate, 20);

            doc.addEventListener('keydown', function(event) {
                if (event.keyCode === constants.KEYBOARD.LEFT) {
                    paddleMove = constants.DIRECTION.LEFT;
                }

                if (event.keyCode === constants.KEYBOARD.RIGHT) {
                    paddleMove = constants.DIRECTION.RIGHT;
                }
            });

            doc.addEventListener('keyup', function(event) {
                console.log(event.keyCode);
                if (event.keyCode == constants.KEYBOARD.LEFT) {
                    paddleMove = constants.NONE;
                }

                if (event.keyCode == constants.KEYBOARD.RIGHT) {
                    paddleMove = constants.NONE;
                }
            });
        };

        endGame = function() {
            clearInterval(gameLoop);
            drawer.ctx.fillText('The End!', drawer.canvasWidth / 2, drawer.canvasHeight / 2);
        };

        animate = function() {
            drawer.clearArea();
            board.draw();
            board.displayScore();
            ball.move([paddle], endGame);
            ball.draw();
            paddle.move(paddleMove);
            paddle.draw();
        };

        startGame();
    })
