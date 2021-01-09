import { BLOCK as constants_BLOCK } from ".\\constants.js";

import {
    draw as block_draw,
    setStrokeColor as block_setStrokeColor,
    setFillColor as block_setFillColor,
} from ".\\block.js";

import {
    blocksPerRow as conf_blocksPerRow,
    blockWidth as conf_blockWidth,
    blockHeight as conf_blockHeight,
    startBlocksQuantity as conf_startBlocksQuantity,
} from ".\\conf.js";

import {
    ctx as drawer_ctx,
    canvasWidth as drawer_canvasWidth,
    canvasHeight as drawer_canvasHeight,
} from ".\\drawer.js";

var blockPosY;
var blockPosX;
var rows = conf_blocksPerRow,
    columns = Math.floor(conf_startBlocksQuantity / conf_blocksPerRow),
    drawBoard, displayScoreBoard, collision, explodeBlock,
    boardData = Array(conf_blocksPerRow),
    collisionBlockLeftRight, collisionBlockTopBottom, isEmpty,
    filledFields = rows * columns;

for (var i = 0; i < rows; i++) {
    boardData[i] = Array(columns);

    for (var j = 0; j < columns; j++) {
        boardData[i][j] = constants_BLOCK.VISIBLE;
    }
}

drawBoard = function(newFillColor, newStrokeColor) {
    var i, j, posX, posY;

    if (typeof newFillColor !== "undefined") {
        block_setFillColor(newFillColor);
    }

    if (typeof newStrokeColor !== "undefined") {
        block_setStrokeColor(newStrokeColor);
    }

    for (i = 0; i < rows; i++) {
        for (j = 0; j < columns; j++) {
            if (boardData[i][j] === constants_BLOCK.VISIBLE) {
                posX = i * conf_blockWidth;
                posY = j * conf_blockHeight;

                block_draw(posX, posY, conf_blockWidth, conf_blockHeight);
            }
        }
    }
};

collision = function(elements, collisionCallback) {
    var i, j, blockPosX, blockPosY;

    elements.forEach(function(element, index) {
        for (i=0; i < rows; i++) {
            for (j = 0; j < columns; j++) {
                if (boardData[i][j] === constants_BLOCK.VISIBLE) {
                    if (collisionBlockTopBottom(i, j, element) ||
                        collisionBlockLeftRight(i, j, element)
                    ) {
                        collisionCallback();
                    }
                }
            }
        }
    });
};

collisionBlockLeftRight = function(i, j, element) {
    blockPosX = i * conf_blockWidth;
    blockPosY = j * conf_blockHeight;

    if ((element.getX() + element.getDeltaX() >= blockPosX &&
         element.getX() <= blockPosX
        )
        ||
        (element.getX() + element.getDeltaX() <= blockPosX + conf_blockWidth &&
         element.getX() >= blockPosX + conf_blockWidth
        )
    ) {
        if (element.getY() + element.getDeltaY() <= blockPosY + conf_blockHeight &&
             element.getY() + element.getDeltaY() >= blockPosY
         ) {
             explodeBlock(i, j);
             element.setDeltaX(-element.getDeltaX());

             return true;
         }
    }

    return false;
};

collisionBlockTopBottom = function(i, j, element) {
    blockPosX = i * conf_blockWidth;
    blockPosY = j * conf_blockHeight;

    if ((element.getY() + element.getDeltaY() <= blockPosY + conf_blockHeight &&
         element.getY() >= blockPosY + conf_blockHeight
        )
        ||
        (element.getY() + element.getDeltaY() >= blockPosY &&
         element.getY() <= blockPosY
        )
    ) {
        if (element.getX() + element.getDeltaX() >= blockPosX &&
            element.getX() + element.getDeltaX() <= blockPosX + conf_blockWidth
        ) {
            explodeBlock(i, j);
            element.setDeltaY(-element.getDeltaY());

            return true;
        }
    }

    return false;
};

explodeBlock = function(i, j) {
    boardData[i][j] = constants_BLOCK.NONE;
    filledFields -= 1;
};

displayScoreBoard = function(score) {
    if (typeof score === "undefined") {
        score = 0;
    }

    drawer_ctx.fillStyle = 'rgb(0, 0, 0)';
    drawer_ctx.font = "20px Arial";

    drawer_ctx.clearRect(0, drawer_canvasHeight - 30, drawer_canvasWidth, 30)
    drawer_ctx.fillText('Score: ' + score, 10, drawer_canvasHeight - 5);
};

isEmpty = function() {
    // if filledFields > 0 return false - board isn't empty
    // otherwise return true - board is empty
    return (filledFields > 0) ? false : true;
}

var mod_board = {
    draw: drawBoard,
    displayScore: displayScoreBoard,
    collision: collision,
    isEmpty: isEmpty,
};

var draw = drawBoard;
var displayScore = displayScoreBoard;
var board_collision = collision;
var board_isEmpty = isEmpty;
export { draw, displayScore, board_collision as collision, board_isEmpty as isEmpty };
