define(['drawer', 'conf', 'block', 'constants'],
    function(drawer, conf, block, constants) {
        var rows = conf.blocksPerRow,
            columns = Math.floor(conf.startBlocksQuantity / conf.blocksPerRow),
            drawBoard, displayScoreBoard, collision, explodeBlock,
            boardData = Array(conf.blocksPerRow),
            collisionBlockLeftRight, collisionBlockTopBottom, isEmpty,
            filledFields = rows * columns;

        for (var i = 0; i < rows; i++) {
            boardData[i] = Array(columns);

            for (var j = 0; j < columns; j++) {
                boardData[i][j] = constants.BLOCK.VISIBLE;
            }
        }

        drawBoard = function(newFillColor, newStrokeColor) {
            var i, j, posX, posY;

            if (typeof newFillColor !== "undefined") {
                block.setFillColor(newFillColor);
            }

            if (typeof newStrokeColor !== "undefined") {
                block.setStrokeColor(newStrokeColor);
            }

            for (i = 0; i < rows; i++) {
                for (j = 0; j < columns; j++) {
                    if (boardData[i][j] === constants.BLOCK.VISIBLE) {
                        posX = i * conf.blockWidth;
                        posY = j * conf.blockHeight;

                        block.draw(posX, posY, conf.blockWidth, conf.blockHeight);
                    }
                }
            }
        };

        collision = function(elements, collisionCallback) {
            var i, j, blockPosX, blockPosY;

            elements.forEach(function(element, index) {
                for (i=0; i < rows; i++) {
                    for (j = 0; j < columns; j++) {
                        if (boardData[i][j] === constants.BLOCK.VISIBLE) {
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
            blockPosX = i * conf.blockWidth;
            blockPosY = j * conf.blockHeight;

            if ((element.getX() + element.getDeltaX() >= blockPosX &&
                 element.getX() <= blockPosX
                )
                ||
                (element.getX() + element.getDeltaX() <= blockPosX + conf.blockWidth &&
                 element.getX() >= blockPosX + conf.blockWidth
                )
            ) {
                if (element.getY() + element.getDeltaY() <= blockPosY + conf.blockHeight &&
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
            blockPosX = i * conf.blockWidth;
            blockPosY = j * conf.blockHeight;

            if ((element.getY() + element.getDeltaY() <= blockPosY + conf.blockHeight &&
                 element.getY() >= blockPosY + conf.blockHeight
                )
                ||
                (element.getY() + element.getDeltaY() >= blockPosY &&
                 element.getY() <= blockPosY
                )
            ) {
                if (element.getX() + element.getDeltaX() >= blockPosX &&
                    element.getX() + element.getDeltaX() <= blockPosX + conf.blockWidth
                ) {
                    explodeBlock(i, j);
                    element.setDeltaY(-element.getDeltaY());

                    return true;
                }
            }

            return false;
        };

        explodeBlock = function(i, j) {
            boardData[i][j] = constants.BLOCK.NONE;
            filledFields -= 1;
        };

        displayScoreBoard = function(score) {
            if (typeof score === "undefined") {
                score = 0;
            }

            drawer.ctx.fillStyle = 'rgb(0, 0, 0)';
            drawer.ctx.font = "20px Arial";

            drawer.ctx.clearRect(0, drawer.canvasHeight - 30, drawer.canvasWidth, 30)
            drawer.ctx.fillText('Score: ' + score, 10, drawer.canvasHeight - 5);
        };

        isEmpty = function() {
            // if filledFields > 0 return false - board isn't empty
            // otherwise return true - board is empty
            return (filledFields > 0) ? false : true;
        }

        return {
            draw: drawBoard,
            displayScore: displayScoreBoard,
            collision: collision,
            isEmpty: isEmpty,
        };
    }
);
