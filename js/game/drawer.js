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

export ;
