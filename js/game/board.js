import Block from './block';

import config from './config';
import constants from './constants';

class Board {
    constructor(drawer) {
        this.drawer = drawer;
        this.rows = config.blocksPerRow;
        this.columns = Math.floor(config.startBlocksQuantity / config.blocksPerRow);
        this.boardData = Array(config.blocksPerRow);
        this.filledFields = this.rows * this.columns;

        for (let i = 0; i < this.rows; i++) {
            this.boardData[i] = Array(this.columns);

            for (let j = 0; j < this.columns; j++) {
                this.boardData[i][j] = constants.BLOCK.VISIBLE;
            }
        }
    }

    draw(newFillColor, newStrokeColor) {
        let posX, posY, block;

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                if (this.boardData[i][j] === constants.BLOCK.VISIBLE) {
                    block = new Block(this.drawer);
                    
                    if (typeof newFillColor !== "undefined") {
                        block.setFillColor(newFillColor);
                    }
            
                    if (typeof newStrokeColor !== "undefined") {
                        block.setStrokeColor(newStrokeColor);
                    }

                    posX = i * config.blockWidth;
                    posY = j * config.blockHeight;
                    
                    block.draw(posX, posY, config.blockWidth, config.blockHeight);
                }
            }
        }
    }

    collision(elements, collisionCallback) {
        let blockPosX, blockPosY;

        elements.forEach(element => {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.columns; j++) {
                    if (this.boardData[i][j] === constants.BLOCK.VISIBLE) {
                        if (this.collisionBlockTopBottom(i, j, element) ||
                            this.collisionBlockLeftRight(i, j, element)
                        ) {
                            collisionCallback();
                        }
                    }
                }
            }
        });
    }

    collisionBlockLeftRight(i, j, element) {
        let blockPosX = i * config.blockWidth,
            blockPosY = j * config.blockHeight;

        if ((element.getX() + element.getDeltaX() >= blockPosX &&
             element.getX() <= blockPosX
            )
            ||
            (element.getX() + element.getDeltaX() <= blockPosX + config.blockWidth &&
             element.getX() >= blockPosX + config.blockWidth
            )
        ) {
            if (element.getY() + element.getDeltaY() <= blockPosY + config.blockHeight &&
                 element.getY() + element.getDeltaY() >= blockPosY
             ) {
                 this.explodeBlock(i, j);
                 element.setDeltaX(-element.getDeltaX());

                 return true;
             }
        }

        return false;
    }

    collisionBlockTopBottom(i, j, element) {
        let blockPosX = i * config.blockWidth,
            blockPosY = j * config.blockHeight;

        if ((element.getY() + element.getDeltaY() <= blockPosY + config.blockHeight &&
             element.getY() >= blockPosY + config.blockHeight
            )
            ||
            (element.getY() + element.getDeltaY() >= blockPosY &&
             element.getY() <= blockPosY
            )
        ) {
            if (element.getX() + element.getDeltaX() >= blockPosX &&
                element.getX() + element.getDeltaX() <= blockPosX + config.blockWidth
            ) {
                this.explodeBlock(i, j);
                element.setDeltaY(-element.getDeltaY());

                return true;
            }
        }

        return false;
    }

    explodeBlock(i, j) {
        this.boardData[i][j] = constants.BLOCK.NONE;
        this.filledFields -= 1;
    }

    displayScore(score) {
        if (typeof score === "undefined") {
            score = 0;
        }

        this.drawer.ctx.fillStyle = 'rgb(0, 0, 0)';
        this.drawer.ctx.font = "20px Arial";

        this.drawer.ctx.clearRect(0, this.drawer.canvasHeight - 30, this.drawer.canvasWidth, 30)
        this.drawer.ctx.fillText('Score: ' + score, 10, this.drawer.canvasHeight - 5);
    };

    isEmpty() {
        // if filledFields > 0 return false - board isn't empty
        // otherwise return true - board is empty
        return (this.filledFields > 0) ? false : true;
    }
}

export default Board;
