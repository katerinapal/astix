define(['domReady'], function(doc) {
    
    var returnedObj;

    doc(function() {

        // console.log(this)
        var cvs = document.getElementById('gameBoard'),
        ctx = cvs.getContext('2d'),
        clearArea;

        clearArea = function() {
            ctx.clearRect(0, 0, cvs.width, cvs.height);
        }

        // return {
        //     ctx: ctx,
        //     canvasWidth: cvs.width,
        //     canvasHeight: cvs.height,
        //     clearArea: clearArea,
        // };

        returnedObj = {
            ctx: ctx,
            canvasWidth: cvs.width,
            canvasHeight: cvs.height,
            clearArea: clearArea,
        };
    })

    return returnedObj;
})
