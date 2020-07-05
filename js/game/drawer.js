import doc from "..\\libs\\domReady.js";
var cvs = document.getElementById('gameBoard'),
    ctx = cvs.getContext('2d'),
    clearArea;

clearArea = function() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
}

var drawer_obj = {
    ctx: ctx,
    canvasWidth: cvs.width,
    canvasHeight: cvs.height,
    clearArea: clearArea,
};

var drawer_obj_ctx = ctx;
var drawer_obj_canvasWidth = cvs.width;
var drawer_obj_canvasHeight = cvs.height;
var drawer_obj_clearArea = clearArea;
export { drawer_obj_ctx as ctx, drawer_obj_canvasWidth as canvasWidth, drawer_obj_canvasHeight as canvasHeight, drawer_obj_clearArea as clearArea };
