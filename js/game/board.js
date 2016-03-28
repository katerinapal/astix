define(['game/drawer', 'game/conf', 'game/block'], function(drawer, conf, block) {
    var drawBoard;

    drawBoard = function() {
        var i, j, posX, posY;

        for (i = 0, j = 0; i < conf.startBlocksQuantity; i++) {
            posX = Math.floor(i % conf.blocksPerRow);
            posY = Math.floor(i / conf.blocksPerRow);

            block.draw(posX * conf.blockWidth, posY * conf.blockHeight,
                       conf.blockWidth, conf.blockHeight);
        }
    };

    return {
        draw: drawBoard
    };
})
