import { BLOCK as constantsjs_BLOCK } from ".\\constants.js";

import {
    draw as blockjs_draw,
    setStrokeColor as blockjs_setStrokeColor,
    setFillColor as blockjs_setFillColor,
} from ".\\block.js";

import {
    blocksPerRow as confjs_blocksPerRow,
    blockWidth as confjs_blockWidth,
    blockHeight as confjs_blockHeight,
    startBlocksQuantity as confjs_startBlocksQuantity,
} from ".\\conf.js";

import {
    ctx as drawerjs_ctx,
    canvasWidth as drawerjs_canvasWidth,
    canvasHeight as drawerjs_canvasHeight,
} from ".\\drawer.js";

var blockPosY;
var blockPosX;
var rows = confjs_blocksPerRow,
    columns = Math.floor(confjs_startBlocksQuantity / confjs_blocksPerRow),
    drawBoard, displayScoreBoard, collision, explodeBlock,
    boardData = Array(confjs_blocksPerRow),
    collisionBlockLeftRight, collisionBlockTopBottom, isEmpty,
    filledFields = rows * columns;

for (var i = 0; i < rows; i++) {
    boardData[i] = Array(columns);

    for (var j = 0; j < columns; j++) {
        boardData[i][j] = constantsjs_BLOCK.VISIBLE;
    }
}

drawBoard = function(newFillColor, newStrokeColor) {
    var i, j, posX, posY;

    if (typeof newFillColor !== "undefined") {
        blockjs_setFillColor(newFillColor);
    }

    if (typeof newStrokeColor !== "undefined") {
        blockjs_setStrokeColor(newStrokeColor);
    }

    for (i = 0; i < rows; i++) {
        for (j = 0; j < columns; j++) {
            if (boardData[i][j] === constantsjs_BLOCK.VISIBLE) {
                posX = i * confjs_blockWidth;
                posY = j * confjs_blockHeight;

                blockjs_draw(posX, posY, confjs_blockWidth, confjs_blockHeight);
            }
        }
    }
};

collision = function(elements, collisionCallback) {
    var i, j, blockPosX, blockPosY;

    elements.forEach(function(element, index) {
        for (i=0; i < rows; i++) {
            for (j = 0; j < columns; j++) {
                if (boardData[i][j] === constantsjs_BLOCK.VISIBLE) {
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
    blockPosX = i * confjs_blockWidth;
    blockPosY = j * confjs_blockHeight;

    if ((element.getX() + element.getDeltaX() >= blockPosX &&
         element.getX() <= blockPosX
        )
        ||
        (element.getX() + element.getDeltaX() <= blockPosX + confjs_blockWidth &&
         element.getX() >= blockPosX + confjs_blockWidth
        )
    ) {
        if (element.getY() + element.getDeltaY() <= blockPosY + confjs_blockHeight &&
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
    blockPosX = i * confjs_blockWidth;
    blockPosY = j * confjs_blockHeight;

    if ((element.getY() + element.getDeltaY() <= blockPosY + confjs_blockHeight &&
         element.getY() >= blockPosY + confjs_blockHeight
        )
        ||
        (element.getY() + element.getDeltaY() >= blockPosY &&
         element.getY() <= blockPosY
        )
    ) {
        if (element.getX() + element.getDeltaX() >= blockPosX &&
            element.getX() + element.getDeltaX() <= blockPosX + confjs_blockWidth
        ) {
            explodeBlock(i, j);
            element.setDeltaY(-element.getDeltaY());

            return true;
        }
    }

    return false;
};

explodeBlock = function(i, j) {
    boardData[i][j] = constantsjs_BLOCK.NONE;
    filledFields -= 1;
};

displayScoreBoard = function(score) {
    if (typeof score === "undefined") {
        score = 0;
    }

    drawerjs_ctx.fillStyle = 'rgb(0, 0, 0)';
    drawerjs_ctx.font = "20px Arial";

    drawerjs_ctx.clearRect(0, drawerjs_canvasHeight - 30, drawerjs_canvasWidth, 30)
    drawerjs_ctx.fillText('Score: ' + score, 10, drawerjs_canvasHeight - 5);
};

isEmpty = function() {
    // if filledFields > 0 return false - board isn't empty
    // otherwise return true - board is empty
    return (filledFields > 0) ? false : true;
}

var board_obj = {
    draw: drawBoard,
    displayScore: displayScoreBoard,
    collision: collision,
    isEmpty: isEmpty,
};

var board_obj_draw = drawBoard;
var board_obj_displayScore = displayScoreBoard;
var board_obj_collision = collision;
var board_obj_isEmpty = isEmpty;
export { board_obj_draw as draw, board_obj_displayScore as displayScore, board_obj_collision as collision, board_obj_isEmpty as isEmpty };
