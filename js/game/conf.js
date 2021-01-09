import { canvasWidth as drawer_canvasWidth } from ".\\drawer.js";
var blocksPerRow = 8,
    divinaProportio = 1.618,
    blockWidth = drawer_canvasWidth / blocksPerRow,
    blockHeight = (blockWidth / divinaProportio) / 2;

var mod_conf = {
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

var blocksPerRow = blocksPerRow;
var divinaProportio = divinaProportio;
var blockWidth = blockWidth;
var blockHeight = blockHeight;
var startBlocksQuantity = 40;
var paddleWidth = 2 * blockWidth;
var paddleHeight = blockHeight;

var BALL = {
    "STROKE_COLOR": "#000",
    "FILL_COLOR": "#000",
    "STARTING_POINT_X": 250,
    "STARTING_POINT_Y": 250,
};

var BLOCK = {
    "STROKE_COLOR": "#FFF",
    "FILL_COLOR": "#000",
};

var BOARD = {
    "BLOCK": {
        "STROKE_COLOR": "#FFF",
        "FILL_COLOR": "#000",
    },
};

var PADDLE = {
    "STROKE_COLOR": "#000",
    "FILL_COLOR": "#000",
};

export { blocksPerRow, blockWidth, blockHeight, startBlocksQuantity, paddleWidth, paddleHeight, BALL, BLOCK, BOARD, PADDLE };
