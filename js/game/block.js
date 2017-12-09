import config from './config';

class Block {
    constructor(drawer) {
        this.drawer = drawer;
        this.fillColor = config.BLOCK.FILL_COLOR;
        this.strokeColor = config.BLOCK.STROKE_COLOR;
    }

    draw(x, y, width, height) {
        this.drawer.ctx.fillStyle = this.fillColor;
        this.drawer.ctx.strokeStyle = this.strokeColor;
        this.drawer.ctx.lineWidth = 2;

        this.drawer.ctx.fillRect(x, y, width, height);
        this.drawer.ctx.strokeRect(x, y, width, height);
    }

    setStrokeColor(newStrokeColor) {
        if (typeof newStrokeColor !== "undefined") {
            this.strokeColor = newStrokeColor;
        }
    }

    setFillColor(newFillColor) {
        if (typeof newFillColor !== "undefined") {
            this.fillColor = newFillColor;
        }
    }
}

export default Block;
