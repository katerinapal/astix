require(['domReady!', 'drawer', 'board', 'paddle', 'ball',
    'constants', 'conf'],
    function(doc, drawer, board, paddle, ball, constants, conf) {
        var startGame, animate, gameLoop, endGame, paddleMove,
            score = 0, gameStatus = constants.GAME.STATUS.STOP;

        startGame = function() {
            paddleMove = constants.NONE;
            gameStatus = constants.GAME.STATUS.START;
            window.requestAnimationFrame(animate);

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
            gameStatus = constants.GAME.STATUS.STOP;
            drawer.ctx.fillText('The End!', drawer.canvasWidth / 2, drawer.canvasHeight / 2);
        };

        animate = function() {
            gameStatus = constants.GAME.STATUS.PLAYING;
            drawer.clearArea();
            board.draw();
            board.displayScore(score);
            ball.move([paddle], endGame);
            ball.draw();
            paddle.move(paddleMove);
            board.collision([ball], function() {
                score += 2;
            });
            paddle.draw();

            if (constants.GAME.STATUS.PLAYING === gameStatus) {
                window.requestAnimationFrame(animate);
            }
        };

        startGame();
    });
