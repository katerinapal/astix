var cvs = document.getElementById('gameBoard'),
    ctx = cvs.getContext('2d'),
    clearArea;

clearArea = function() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
}

var mod_drawer = {
    ctx: ctx,
    canvasWidth: cvs.width,
    canvasHeight: cvs.height,
    clearArea: clearArea,
};

var ctx = ctx;
var canvasWidth = cvs.width;
var canvasHeight = cvs.height;
var drawer_clearArea = clearArea;
export { ctx, canvasWidth, canvasHeight, drawer_clearArea as clearArea };
