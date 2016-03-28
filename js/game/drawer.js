define(['domReady!'], function(doc) {
    var cvs, ctx;

    cvs = doc.getElementById('gameBoard');
    ctx = cvs.getContext('2d');

    return {
        ctx: ctx,
        canvasWidth: cvs.width,
        canvasHeight: cvs.height,
    };
})
