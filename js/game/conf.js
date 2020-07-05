import { canvasWidth as drawerjs_canvasWidth } from ".\\drawer.js";
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

var conf_obj_blocksPerRow = blocksPerRow;
var conf_obj_divinaProportio = divinaProportio;
var conf_obj_blockWidth = blockWidth;
var conf_obj_blockHeight = blockHeight;
var conf_obj_startBlocksQuantity = 40;
var conf_obj_paddleWidth = 2 * blockWidth;
var conf_obj_paddleHeight = blockHeight;

var conf_obj_BALL = {
    "STROKE_COLOR": "#000",
    "FILL_COLOR": "#000",
    "STARTING_POINT_X": 250,
    "STARTING_POINT_Y": 250,
};

var conf_obj_BLOCK = {
    "STROKE_COLOR": "#FFF",
    "FILL_COLOR": "#000",
};

var conf_obj_BOARD = {
    "BLOCK": {
        "STROKE_COLOR": "#FFF",
        "FILL_COLOR": "#000",
    },
};

var conf_obj_PADDLE = {
    "STROKE_COLOR": "#000",
    "FILL_COLOR": "#000",
};

export { conf_obj_blocksPerRow as blocksPerRow, conf_obj_blockWidth as blockWidth, conf_obj_blockHeight as blockHeight, conf_obj_startBlocksQuantity as startBlocksQuantity, conf_obj_paddleWidth as paddleWidth, conf_obj_paddleHeight as paddleHeight, conf_obj_BALL as BALL, conf_obj_BLOCK as BLOCK, conf_obj_BOARD as BOARD, conf_obj_PADDLE as PADDLE };
