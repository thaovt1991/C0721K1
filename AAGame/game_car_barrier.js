class Barrier {
    constructor(left, top, width, height) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.imageBarrier = "./image/barrie.png"
        this.arrBarrier = [
            "./image/barrie.png",
            "./image/barrie.png",
            "./image/barrie.png",
            "./image/car1.png",
            "./image/car2.png",
            "./image/car3.png",
            "./image/car4.png",
            "./image/car5.png",
            "./image/car6.png",
            "./image/car7.png",
        ]
    };
    setBarrier() {
        let random = Math.floor(Math.random() *(this.arrBarrier.length -1));
        this.imageBarrier = this.arrBarrier[random];
        this.top = -(Math.floor(Math.random() * 500) - this.height);
        this.left = Math.floor(Math.random() * (310 - this.width));
        this.width = 80;
        this.height = 80;
    }

    getLeft() {
        return this.left;
    };

    getTop() {
        return this.top;
    };
    setLeft(left) {
        this.left = left;
    };
    setTop(top) {
        this.top = top;
    };

    getWidth() {
        return this.width;
    };

    getHeight() {
        return this.height;
    };

    setWidth(width) {
        this.width = width;
    };

    setHeight(height) {
        this.height = height;
    };

    autoRun() {
        if (this.top < 600) {
            this.top++;
        } else {
            this.setBarrier();
        }
        this.clearBarrier(this.left, this.top - 1, this.width, this.height)
        this.createBarrier(this.left, this.top, this.width, this.height);
    }

    createBarrier(l, t, w, h) {
        let canvas = document.getElementById("gameBarrier");
        let ctx = canvas.getContext("2d");
        let image = new Image();
        image.src = this.imageBarrier;
        image.onload = function () {
            ctx.drawImage(image, l, t, w, h)
        }
    }
    clearBarrier(l, t, w, h) {
        let canvas = document.getElementById("gameBarrier");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(l, t, w, h)
    }

}

let topBar = -(Math.floor(Math.random() * 1000) - this.height);
let leftBar = Math.floor(Math.random() * (310 - this.width));
let bar = new Barrier(leftBar, topBar, 80, 80);
bar.createBarrier(leftBar, topBar, 80, 80)
function runBarrier() {
    bar.autoRun()
}
