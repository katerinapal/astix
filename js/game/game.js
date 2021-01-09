import { BOARD as conf_BOARD, PADDLE as conf_PADDLE } from ".\\conf.js";

import {
    NONE as constants_NONE,
    DIRECTION as constants_DIRECTION,
    KEYBOARD as constants_KEYBOARD,
    GAME as constants_GAME,
} from ".\\constants.js";

import { mod_ball as ball } from ".\\ball.js";
import { mod_paddle as paddle } from ".\\paddle.js";

import {
    draw as board_draw,
    displayScore as board_displayScore,
    collision as board_collision,
    isEmpty as board_isEmpty,
} from ".\\board.js";

import {
    ctx as drawer_ctx,
    canvasWidth as drawer_canvasWidth,
    canvasHeight as drawer_canvasHeight,
    clearArea as drawer_clearArea,
} from ".\\drawer.js";

import { collision } from ".\\ball.js";
var startGame, animate, gameLoop, endGame, paddleMove,
    score = 0, gameStatus = constants_GAME.STATUS.STOP;

startGame = function() {
    paddleMove = constants_NONE;
    gameStatus = constants_GAME.STATUS.START;
    window.requestAnimationFrame(animate);

    document.addEventListener('keydown', function(event) {
        if (event.keyCode === constants_KEYBOARD.LEFT) {
            paddleMove = constants_DIRECTION.LEFT;
        }

        if (event.keyCode === constants_KEYBOARD.RIGHT) {
            paddleMove = constants_DIRECTION.RIGHT;
        }
    });

    document.addEventListener('keyup', function(event) {
        console.log(event.keyCode);
        if (event.keyCode == constants_KEYBOARD.LEFT) {
            paddleMove = constants_NONE;
        }

        if (event.keyCode == constants_KEYBOARD.RIGHT) {
            paddleMove = constants_NONE;
        }
    });
};

endGame = function() {
    gameStatus = constants_GAME.STATUS.STOP;
    drawer_ctx.fillText('The End!', drawer_canvasWidth / 2, drawer_canvasHeight / 2);
};

animate = function() {
    gameStatus = constants_GAME.STATUS.PLAYING;
    drawer_clearArea();
    board_draw(
        conf_BOARD.BLOCK.FILL_COLOR,
        conf_BOARD.BLOCK.STROKE_COLOR
    );
    board_displayScore(score);
    ball.move([paddle]);
    ball.draw();
    paddle.move(paddleMove);
    board_collision([ball], function() {
        score += 2;
    });
    paddle.draw(conf_PADDLE.FILL_COLOR, conf_PADDLE.STROKE_COLOR);

    if (board_isEmpty() || ball.isDestroyed()) {
        gameStatus = constants_GAME.STATUS.END;
    }

    if (constants_GAME.STATUS.PLAYING === gameStatus) {
        window.requestAnimationFrame(animate);
    }
};

startGame();
