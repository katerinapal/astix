define(['drawer'], function(drawer) {
    var drawBlock,
        defaultFillColor = '#000',
        defaultStrokeColor = '#FFF';

    drawBlock = function(x, y, width, height) {
        drawer.ctx.fillStyle = defaultFillColor;
        drawer.ctx.fillRect(x, y, width, height);

        drawer.ctx.strokeStyle = defaultStrokeColor;
        drawer.ctx.lineWidth = 2;
        drawer.ctx.strokeRect(x, y, width, height);
    };

    return {
        draw: drawBlock
    };
})
