import Ball from './Ball';
import Board from './Board';
import Paddle from './Paddle';

import config from './config';
import constants from './constants';

class Game {
    constructor(drawer) {
        this.drawer = drawer;
        this.board = new Board(this.drawer);
        this.paddle = new Paddle(this.drawer);
        this.ball = new Ball(this.drawer);
        this.gameLoop = null;
        this.paddleMove = null;
        this.score = 0;        
        this.gameStatus = constants.GAME.STATUS.STOP;

        this.animate = this.animate.bind(this);
    }

    start() {
        this.paddleMove = constants.NONE;
        this.gameStatus = constants.GAME.STATUS.START;
        window.requestAnimationFrame(this.animate);

        document.addEventListener('keydown', event => {
            if (event.keyCode === constants.KEYBOARD.LEFT) {
                this.paddleMove = constants.DIRECTION.LEFT;
            }

            if (event.keyCode === constants.KEYBOARD.RIGHT) {
                this.paddleMove = constants.DIRECTION.RIGHT;
            }
        });

        document.addEventListener('keyup', event => {
            if (event.keyCode == constants.KEYBOARD.LEFT) {
                this.paddleMove = constants.NONE;
            }

            if (event.keyCode == constants.KEYBOARD.RIGHT) {
                this.paddleMove = constants.NONE;
            }
        });
    }

    end() {
        this.gameStatus = constants.GAME.STATUS.STOP;
        this.drawer.ctx.fillText('The End!', this.drawer.canvasWidth / 2, this.drawer.canvasHeight / 2);
    }

    animate() {
        this.gameStatus = constants.GAME.STATUS.PLAYING;
        this.drawer.clearArea();
        this.board.draw(
            config.BOARD.BLOCK.FILL_COLOR,
            config.BOARD.BLOCK.STROKE_COLOR
        );
        this.board.displayScore(this.score);
        this.ball.move([this.paddle]);
        this.ball.draw();
        this.paddle.move(this.paddleMove);
        this.board.collision([this.ball], () => {
            this.score += 2;
        });
        this.paddle.draw(config.PADDLE.FILL_COLOR, config.PADDLE.STROKE_COLOR);

        if (this.board.isEmpty() || this.ball.isDestroyed()) {
            this.gameStatus = constants.GAME.STATUS.END;
        }

        if (constants.GAME.STATUS.PLAYING === this.gameStatus) {
            window.requestAnimationFrame(this.animate);
        }
    }
}

export default Game;
