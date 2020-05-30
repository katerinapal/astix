import {
    ctx as drawerjs_ctx,
    canvasWidth as drawerjs_canvasWidth,
    canvasHeight as drawerjs_canvasHeight,
    clearArea as drawerjs_clearArea,
} from ".\\drawer.js";

var blocksPerRow = 8,
    divinaProportio = 1.618,
    blockWidth = drawerjs_canvasWidth / blocksPerRow,
    blockHeight = (blockWidth / divinaProportio) / 2;

var conf_obj = {
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
    "BOARD": {
        "BLOCK": {
            "STROKE_COLOR": "#FFF",
            "FILL_COLOR": "#000",
        },
    },
    "PADDLE": {
        "STROKE_COLOR": "#000",
        "FILL_COLOR": "#000",
    },
};

export ;
