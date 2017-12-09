import config from './config';

class Ball {
    constructor(drawer) {
        this.drawer = drawer;
        this.posX = 250;
        this.posY = 250;
        this.deltaX = 10;
        this.deltaY = 10;
        this.ballRadius = 10;
        this.destroyed = false;
    }

    draw() {
        this.drawer.ctx.beginPath();
        this.drawer.ctx.arc(this.posX, this.posY, this.ballRadius, 0, Math.PI * 2, true);

        this.drawer.ctx.strokeStyle = config.BALL.STROKE_COLOR;
        this.drawer.ctx.fillColor = config.BALL.FILL_COLOR;

        this.drawer.ctx.stroke();
        this.drawer.ctx.fill();
    }

    move(elements) {
        this.computeBallCollisionWithArea();
        this.collision(elements);

        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

    collision(elements) {
        elements.forEach(element => {
            if (this.posY + this.deltaY + this.ballRadius >= element.getY()) {
                if (this.posX + this.deltaX >= element.getX() &&
                    this.posX + this.deltaX <= element.getX() + element.getWidth()
                ) {
                    this.deltaY = -this.deltaY;
                }
            }
        });
    }

    computeBallCollisionWithArea() {
        if (this.posY + this.deltaY - this.ballRadius < 0) {
            this.deltaY = -this.deltaY;
        }

        if (this.posY + this.deltaY + this.ballRadius > this.drawer.canvasHeight) {
            this.destroyed = true;
        }

        if (this.posX + this.deltaX + this.ballRadius > this.drawer.canvasWidth ||
            this.posX + this.deltaX - this.ballRadius < 0)
        {
            this.deltaX = -this.deltaX;
        }
    }

    getX() {
        return this.posX;
    }

    getY() {
        return this.posY;
    }

    getDeltaX() {
        return this.deltaX;
    }

    getDeltaY() {
        return this.deltaY;
    }

    setDeltaX(newDeltaX) {
        this.deltaX = newDeltaX;
    }

    setDeltaY(newDeltaY) {
        this.deltaY = newDeltaY;
    }

    isDestroyed() {
        return this.destroyed;
    }
}

export default Ball;
