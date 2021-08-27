class Line {
    constructor(left, top, width, height) {
        this.width = width;
        this.height = height;
        this.left = left;
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
    runLineDown() {
        this.top++;
    };
    runHeight() {
        this.height++;
    };

    createLine() {
        let canvas = document.getElementById("gameCar");
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "#F8F8FF";
        ctx.fillRect(this.left, this.top, this.width, this.height);
    }
    clearLine() {
        let canvas = document.getElementById("gameCar");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(this.left, this.top - 1, this.width, this.height)
    }

}

let line1 = new Line(150, -50, 10, 50);
let line2 = new Line(150, -150, 10, 50);
let line3 = new Line(150, -250, 10, 50);
let line4 = new Line(150, -350, 10, 50);
let line5 = new Line(150, -450, 10, 50);
let line6 = new Line(150, -550, 10, 50);
let line7 = new Line(150, -650, 10, 50);

function runLine(line) {
    if (line.top > 600) {
        line.top = -100
        line.clearLine();
    }
    line.runLineDown()
    line.clearLine();
    line.createLine();
}
document.getElementById("enegy").innerHTML = oto.getEnery();

function btstartGame() {
    if (oto.getEnery() < 0) {
        if (confirm("Bạn muốn chơi lại !")) {
            location.reload();
        } else dislayGameOver();
    } else { startGame() }
};

function startGame() {
    this.starline = setInterval(function () {
        runLine(line1)
        runLine(line2)
        runLine(line3)
        runLine(line4)
        runLine(line5)
        runLine(line6)
        runLine(line7)
    }, 10);
    this.car = setInterval('runAfterForTimes()', 1000);
    this.enegyCar = setInterval(() => {
        let t = oto.getEnery()
        if (t >= 0) {
            oto.reduceEnegy();
            if (t > 10) {
                document.getElementById("enegy").innerHTML = t;
            } else {
                document.getElementById("enegy").innerHTML = "0" + t
            };
        } else {
            endGame();
            dislayGameOver();
        }

    }, 1000);
    document.getElementById('btstart').disabled = true;
    document.getElementById('btpause').disabled = false;
    window.addEventListener('keydown', Event_Press);
}

function endGame() {
    clearInterval(this.starline);
    clearInterval(this.car);
    clearInterval(this.enegyCar)
    document.getElementById('btstart').disabled = false;
    document.getElementById('btpause').disabled = true;
}





// function setZIdex(line){
//     if(oto.top == (line.height + line.top )&& line.left >= oto.left &&  line.left <= (oto.left + oto.width)){

//     }
// }




