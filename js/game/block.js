define(['drawer', 'conf'], function(drawer, conf) {
    var drawBlock, setStrokeColor, setFillColor,
        fillColor = conf.BLOCK.FILL_COLOR,
        strokeColor = conf.BLOCK.STROKE_COLOR;

    drawBlock = function(x, y, width, height) {
        drawer.ctx.fillStyle = fillColor;
        drawer.ctx.strokeStyle = strokeColor;
        drawer.ctx.lineWidth = 2;

        drawer.ctx.fillRect(x, y, width, height);
        drawer.ctx.strokeRect(x, y, width, height);
    };

    setStrokeColor = function(newStrokeColor) {
        if (typeof newStrokeColor !== "undefined") {
            strokeColor = newStrokeColor;
        }
    };

    setFillColor = function(newFillColor) {
        if (typeof newFillColor !== "undefined") {
            fillColor = newFillColor;
        }
    };

    return {
        draw: drawBlock,
        setStrokeColor: setStrokeColor,
        setFillColor: setFillColor,
    };
})
