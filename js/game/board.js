define(['game/drawer', 'game/conf', 'game/block'], function(drawer, conf, block) {
    var drawBoard, displayScoreBoard;

    drawBoard = function() {
        var i, j, posX, posY;

        for (i = 0, j = 0; i < conf.startBlocksQuantity; i++) {
            posX = Math.floor(i % conf.blocksPerRow);
            posY = Math.floor(i / conf.blocksPerRow);

            block.draw(posX * conf.blockWidth, posY * conf.blockHeight,
                       conf.blockWidth, conf.blockHeight);
        }
    };

    displayScoreBoard = function(score) {
        if (typeof score === "undefined") {
            score = 0;
        }

        drawer.ctx.fillStyle = 'rgb(0, 0, 0)';
        drawer.ctx.font = "20px Arial";

        drawer.ctx.clearRect(0, drawer.canvasHeight - 30, drawer.canvasWidth, 30)
        drawer.ctx.fillText('Score: ' + score, 10, drawer.canvasHeight - 5);
    }

    return {
        draw: drawBoard,
        displayScore: displayScoreBoard
    };
})
