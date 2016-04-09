define(['drawer', 'conf'], function(drawer, conf) {
    var drawBlock, setStrokeColor;

    drawBlock = function(x, y, width, height) {
        drawer.ctx.fillStyle = conf.BLOCK.FILL_COLOR;
        drawer.ctx.strokeStyle = conf.BLOCK.STROKE_COLOR;
        drawer.ctx.lineWidth = 2;

        drawer.ctx.fillRect(x, y, width, height);
        drawer.ctx.strokeRect(x, y, width, height);
    };

    setStrokeColor = function(newStrokeColor) {
        drawer.ctx.strokeStyle = newStrokeColor;
    };

    return {
        draw: drawBlock,
        setStrokeColor: setStrokeColor
    };
})
