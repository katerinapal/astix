import { conf_obj as conf } from ".\\conf.js";
import { constants_obj as constants } from ".\\constants.js";
import { ball_obj as ball } from ".\\ball.js";
import { paddle_obj as paddle } from ".\\paddle.js";
import { board_obj as board } from ".\\board.js";
import { drawer_obj as drawer } from ".\\drawer.js";
var startGame, animate, gameLoop, endGame, paddleMove,
    score = 0, gameStatus = constants.GAME.STATUS.STOP;

startGame = function() {
    paddleMove = constants.NONE;
    gameStatus = constants.GAME.STATUS.START;
    window.requestAnimationFrame(animate);

    document.addEventListener('keydown', function(event) {
        if (event.keyCode === constants.KEYBOARD.LEFT) {
            paddleMove = constants.DIRECTION.LEFT;
        }

        if (event.keyCode === constants.KEYBOARD.RIGHT) {
            paddleMove = constants.DIRECTION.RIGHT;
        }
    });

    document.addEventListener('keyup', function(event) {
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
    board.draw(
        conf.BOARD.BLOCK.FILL_COLOR,
        conf.BOARD.BLOCK.STROKE_COLOR
    );
    board.displayScore(score);
    ball.move([paddle]);
    ball.draw();
    paddle.move(paddleMove);
    board.collision([ball], function() {
        score += 2;
    });
    paddle.draw(conf.PADDLE.FILL_COLOR, conf.PADDLE.STROKE_COLOR);

    if (board.isEmpty() || ball.isDestroyed()) {
        gameStatus = constants.GAME.STATUS.END;
    }

    if (constants.GAME.STATUS.PLAYING === gameStatus) {
        window.requestAnimationFrame(animate);
    }
};

startGame();
