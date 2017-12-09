let instance = null;

class Drawer {
    constructor() {
        if (!instance) {
            instance = this;
        }

        this.cvs = document.getElementById('gameBoard');
        this.ctx = this.cvs.getContext('2d');
        this.canvasWidth = this.cvs.width;
        this.canvasHeight = this.cvs.height;

        this.clearArea = this.clearArea.bind(this);

        return instance;
    } 

    clearArea() {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }
}

export default Drawer;
