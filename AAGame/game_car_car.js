class Car {
    constructor(left, top, width, height) {
        this.top = top;
        this.left = left;
        this.height = height;
        this.width = width;
        this.enegy = 50;
    };
    getEnery() {
        return this.enegy;
    };
    setEnery(enegy) {
        this.enegy = enegy
    }
    reduceEnegy() {
        this.enegy--;
    }

    getLeft() {
        return this.left;
    };

    getTop() {
        return this.top;
    };

    getWidth() {
        return this.width;
    };

    getHeight() {
        return this.height;
    };
    setLeft(left) {
        this.left = left;
    };

    setTop(top) {
        this.top = top;
    };

    setWidth(width) {
        this.width = width;
    };

    setHeight(height) {
        this.height = height;
    };


    runLeft() {
        if (this.left > 0) {
            this.left -= 5;
        } else { this.left }
        this.createCar(this.left, this.top, this.width, this.height);
        this.clearCar(this.left + 5, this.top, this.width, this.height)
    };

    runRight() {
        if (this.left < 310 - this.width) {
            this.left += 5;
        } else { this.left }
        this.createCar(this.left, this.top, this.width, this.height);
        this.clearCar(this.left - 5, this.top, this.width, this.height)
    };

    runDown() {
        if (this.top < 600 - this.height) {
            this.top += 5;
        } else { this.top }

        this.createCar(this.left, this.top, this.width, this.height);
        this.clearCar(this.left, this.top - 5, this.width, this.height)
    };

    runUp() {
        if (this.top > 0) {
            this.top -= 5;
        } else { this.top }
        this.createCar(this.left, this.top, this.width, this.height);
        this.clearCar(this.left, this.top + 5, this.width, this.height)
    };
    runLeftUp() {
        switch (true) {
            case this.left > 0 && this.top > 0:
                this.left -= 5;
                this.top -= 5;
                this.createCar(this.left, this.top, this.width, this.height);
                this.clearCar(this.left + 5, this.top + 5, this.width, this.height);
                break;
            case this.left == 0 && this.top > 0:
                this.top -= 5;
                this.createCar(this.left, this.top, this.width, this.height);
                this.clearCar(this.left, this.top + 5, this.width, this.height);
                break;
            case this.left > 0 && this.top == 0:
                this.left -= 5;
                this.createCar(this.left, this.top, this.width, this.height);
                this.clearCar(this.left + 5, this.top, this.width, this.height);
                break;
            case this.left == 0 && this.top == 0:
                this.createCar(this.left, this.top, this.width, this.height);
                break;
        }
    };

    runLeftDown() {
        switch (true) {
            case this.left > 0 && this.top < 600 - this.height:
                this.left -= 5;
                this.top += 5;
                this.createCar(this.left, this.top, this.width, this.height);
                this.clearCar(this.left + 5, this.top - 5, this.width, this.height);
                break;
            case this.left == 0 && this.top < 600 - this.height:
                this.top += 5;
                this.createCar(this.left, this.top, this.width, this.height);
                this.clearCar(this.left, this.top - 5, this.width, this.height);
                break;
            case this.left > 0 && this.top == 600 - this.height:
                this.left -= 5;
                this.createCar(this.left, this.top, this.width, this.height);
                this.clearCar(this.left + 5, this.top, this.width, this.height);
                break;
            case this.left == 0 && this.top == 600 - this.height:
                this.createCar(this.left, this.top, this.width, this.height);
                break;
        }
    };

    runRightUp() {
        switch (true) {
            case this.left < 310 - this.width && this.top > 0:
                this.left += 5;
                this.top -= 5;
                this.createCar(this.left, this.top, this.width, this.height);
                this.clearCar(this.left - 5, this.top + 5, this.width, this.height);
                break;
            case this.left == 310 - this.width && this.top > 0:
                this.top -= 5;
                this.createCar(this.left, this.top, this.width, this.height);
                this.clearCar(this.left, this.top + 5, this.width, this.height);
                break;
            case this.left < 310 - this.width && this.top == 0:
                this.left += 5;
                this.createCar(this.left, this.top, this.width, this.height);
                this.clearCar(this.left - 5, this.top, this.width, this.height);
                break;
            case this.left == 310 - this.width && this.top == 0:
                this.createCar(this.left, this.top, this.width, this.height);
                break;
        }
    };
    runRightDown() {
        switch (true) {
            case this.left < 310 - this.width && this.top < 600 - this.height:
                this.left += 5;
                this.top += 5;
                this.createCar(this.left, this.top, this.width, this.height);
                this.clearCar(this.left - 5, this.top - 5, this.width, this.height);
                break;
            case this.left == 310 - this.width && this.top < 600 - this.height:
                this.top += 5;
                this.createCar(this.left, this.top, this.width, this.height);
                this.clearCar(this.left, this.top - 5, this.width, this.height);
                break;
            case this.left < 310 - this.width && this.top == 600 - this.height:
                this.left += 5;
                this.createCar(this.left, this.top, this.width, this.height);
                this.clearCar(this.left - 5, this.top, this.width, this.height);
                break;
            case this.left == 310 - this.width && this.top == 600 - this.height:
                this.createCar(this.left, this.top, this.width, this.height);
                break;
        }
    }


    // createCar() {
    //     let canvas = document.getElementById("gameCar");
    //     let ctx = canvas.getContext("2d");
    //     var image = new Image();
    //     image.src = "oto.png";
    //     image.onload = function () {
    //         ctx.drawImage(image, this.left, this.top, this.width, this.left);
    //     }
    // };


    createCar(l, t, w, h) {
        let canvas = document.getElementById("gameCar2");
        let ctx = canvas.getContext("2d");
        var image = new Image();
        image.src = "./image/oto.png";
        image.onload = function () {
            ctx.drawImage(image, l, t, w, h);
        };
    }

    clearCar(l, t, w, h) {
        let canvas = document.getElementById("gameCar2");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(l, t, w, h)
    }


}
let oto = new Car(120, 500, 100, 100);
// oto.createCar();
oto.createCar(oto.getLeft(), oto.getTop(), oto.getWidth(), oto.getHeight());

function Event_Press(evt) {

    switch (evt.keyCode) {
        case 100: //|| 37  :
            oto.runLeft()
            break;
        case 102://|| 39 :
            oto.runRight();
            break;
        case 104://|| 38:
            oto.runUp()
            break;
        case 98://|| 40 :
            oto.runDown()
            break;
        case 103://|| (38 && 37) :
            oto.runLeftUp()
            break;
        case 97:// || (38 && 40) :
            oto.runLeftDown()
            break;
        case 105:// || (39 && 37) :
            oto.runRightUp()
            break;
        case 99://|| (39 && 40) :
            oto.runRightDown()
            break;
    }

};

function runAfterForTimes() {
    oto.runUp();
};

function dislayGameOver() {
    let canvas3 = document.getElementById("gameOver");
    let over = canvas3.getContext("2d");
     var imgOver = new Image();
    imgOver.src = "./image/game_over.png"
    imgOver.onload = function () {
        over.drawImage(imgOver, 20, 250, 270, 100)
    }
    document.getElementById("gameOver").style.display = "block";
    document.getElementById("gameOver").style.zIndex = "20";
};




