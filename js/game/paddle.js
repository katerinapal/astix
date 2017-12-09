import Block from './Block';

import config from './config';
import constants from './constants';

class Paddle {
    constructor(drawer) {
        this.drawer = drawer;
        this.defaultPosX = (this.drawer.canvasWidth / 2) - (config.paddleWidth / 2);
        this.defaultPosY = this.drawer.canvasHeight - config.paddleHeight;
        this.posX = this.defaultPosX;
        this.posY = this.defaultPosY;
        this.defaultPaddleSpeedX = 10;
        this.deltaPaddleX = 0;
        this.block = new Block(this.drawer);

        console.log(this.defaultPosX, this.defaultPosY);
    }

    draw() {
        this.block.setStrokeColor("#000");
        this.block.draw(this.posX, this.posY, config.paddleWidth, config.paddleHeight);
    }

    move(direction) {
        this.deltaPaddleX = 0;

        if (constants.DIRECTION.LEFT === direction) {
            this.deltaPaddleX = -this.defaultPaddleSpeedX;
        }

        if (constants.DIRECTION.RIGHT === direction) {
            this.deltaPaddleX = this.defaultPaddleSpeedX;
        }

        if (this.posX + this.deltaPaddleX < 0 ||
            this.posX + config.paddleWidth + this.deltaPaddleX > this.drawer.canvasWidth)
        {
            this.deltaPaddleX = 0;
        }

        this.posX += this.deltaPaddleX;
    }

    getX() {
        return this.posX;
    }

    getY() {
        return this.posY;
    }

    getWidth() {
        return config.paddleWidth;
    }

    getHeight() {
        return config.paddleHeight;
    }
}
 
export default Paddle;
