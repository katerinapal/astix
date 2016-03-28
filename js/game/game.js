require(['game/drawer', 'game/board', 'game/paddle', 'game/ball'],
    function(drawer, board, paddle, ball) {
        var startGame, animate, gameLoop, endGame;

        startGame = function() {
            gameLoop = setInterval(animate, 20);
        };

        animate = function() {
            drawer.clearArea();
            board.draw();
            paddle.draw();
            ball.move();
            ball.draw();
        };

        engGame = function() {
            clearInterval(gameLoop);
            drawer.ctx.fillText('The End!', drawer.canvasWidth / 2, drawer.canvasHeight / 2);
        };

        startGame();
    })
