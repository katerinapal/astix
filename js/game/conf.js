define(['drawer'], function(drawer) {
    var blocksPerRow = 8,
        divinaProportio = 1.618,
        blockWidth = drawer.canvasWidth / blocksPerRow,
        blockHeight = (blockWidth / divinaProportio) / 2;

    return {
        "blocksPerRow": blocksPerRow,
        "divinaProportio": divinaProportio,
        "blockWidth": blockWidth,
        "blockHeight": blockHeight,
        "startBlocksQuantity": 40,
        "paddleWidth": 2 * blockWidth,
        "paddleHeight": blockHeight,
        "BALL": {
            "STROKE_COLOR": "#000",
            "FILL_COLOR": "#000",
            "STARTING_POINT_X": 250,
            "STARTING_POINT_Y": 250,
        },
        "BLOCK": {
            "STROKE_COLOR": "#FFF",
            "FILL_COLOR": "#000",
        },
    };
});
