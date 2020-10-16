import { BOARD as confjs_BOARD, PADDLE as confjs_PADDLE } from ".\\conf.js";

import {
    NONE as constantsjs_NONE,
    DIRECTION as constantsjs_DIRECTION,
    KEYBOARD as constantsjs_KEYBOARD,
    GAME as constantsjs_GAME,
} from ".\\constants.js";

import { ball_obj as ball } from ".\\ball.js";
import { paddle_obj as paddle } from ".\\paddle.js";

import {
    draw as boardjs_draw,
    displayScore as boardjs_displayScore,
    collision as boardjs_collision,
    isEmpty as boardjs_isEmpty,
} from ".\\board.js";

import {
    ctx as drawerjs_ctx,
    canvasWidth as drawerjs_canvasWidth,
    canvasHeight as drawerjs_canvasHeight,
    clearArea as drawerjs_clearArea,
} from ".\\drawer.js";

import { collision } from ".\\ball.js";
var startGame, animate, gameLoop, endGame, paddleMove,
    score = 0, gameStatus = constantsjs_GAME.STATUS.STOP;

startGame = function() {
    paddleMove = constantsjs_NONE;
    gameStatus = constantsjs_GAME.STATUS.START;
    window.requestAnimationFrame(animate);

    document.addEventListener('keydown', function(event) {
        if (event.keyCode === constantsjs_KEYBOARD.LEFT) {
            paddleMove = constantsjs_DIRECTION.LEFT;
        }

        if (event.keyCode === constantsjs_KEYBOARD.RIGHT) {
            paddleMove = constantsjs_DIRECTION.RIGHT;
        }
    });

    document.addEventListener('keyup', function(event) {
        console.log(event.keyCode);
        if (event.keyCode == constantsjs_KEYBOARD.LEFT) {
            paddleMove = constantsjs_NONE;
        }

        if (event.keyCode == constantsjs_KEYBOARD.RIGHT) {
            paddleMove = constantsjs_NONE;
        }
    });
};

endGame = function() {
    gameStatus = constantsjs_GAME.STATUS.STOP;
    drawerjs_ctx.fillText('The End!', drawerjs_canvasWidth / 2, drawerjs_canvasHeight / 2);
};

animate = function() {
    gameStatus = constantsjs_GAME.STATUS.PLAYING;
    drawerjs_clearArea();
    boardjs_draw(
        confjs_BOARD.BLOCK.FILL_COLOR,
        confjs_BOARD.BLOCK.STROKE_COLOR
    );
    boardjs_displayScore(score);
    ball.move([paddle]);
    ball.draw();
    paddle.move(paddleMove);
    boardjs_collision([ball], function() {
        score += 2;
    });
    paddle.draw(confjs_PADDLE.FILL_COLOR, confjs_PADDLE.STROKE_COLOR);

    if (boardjs_isEmpty() || ball.isDestroyed()) {
        gameStatus = constantsjs_GAME.STATUS.END;
    }

    if (constantsjs_GAME.STATUS.PLAYING === gameStatus) {
        window.requestAnimationFrame(animate);
    }
};

startGame();
