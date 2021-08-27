class Line {
    constructor(left, top, width, height) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;

    };
    setLine(l, t, w, h) {
        this.left = l;
        this.top = t;
        this.width = w;
        this.height = h;
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
let endGame = false;

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
            restartGame();
            displayCharts();
            endGame = false;
        } else dislayGameOver();
    } else {
        startGame();
        runScore();
        endGame = false;
    }
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
        let t = oto.getEnery();
        oto.reduceEnegy();
        if (t > 0) {
            if (t >= 10) {
                document.getElementById("enegy").innerHTML = t;
            } else {
                document.getElementById("enegy").innerHTML = "0" + t
            };
        } else {
            document.getElementById("enegy").innerHTML = "00"
            pauseGame();
            dislayGameOver();
            stopScore();
            endGame = true;
        }

    }, 1000);
    document.getElementById('btstart').disabled = true;
    document.getElementById('btpause').disabled = false;
    document.getElementById("btrestart").disabled = true;
    window.addEventListener('keydown', Event_Press);
}

function pauseGame() {
    clearInterval(this.starline);
    clearInterval(this.car);
    clearInterval(this.enegyCar)
    document.getElementById('btstart').disabled = false;
    document.getElementById('btpause').disabled = true;
    document.getElementById("btrestart").disabled = false;
    window.removeEventListener('keydown', Event_Press);
    clearInterval(this.scoreGame);

}
function restartGame() {
    oto.clearCar(oto.left, oto.top, oto.width, oto.height);
    oto.setCar(120, 500, 100, 100);
    oto.createCar(120, 500, 100, 100)
    oto.setEnery(50);
    document.getElementById("enegy").innerHTML = oto.getEnery();
    score.setPoint(0);
    document.getElementById("score").innerHTML = score.getPoint();
    let can1 = document.getElementById("gameCar");
    let ctx1 = can1.getContext("2d");
    ctx1.clearRect(0, 0, 310, 600);
    line1.setLine(150, -50, 10, 50);
    line2.setLine(150, -150, 10, 50);
    line3.setLine(150, -250, 10, 50);
    line4.setLine(150, -350, 10, 50);
    line5.setLine(150, -450, 10, 50);
    line6.setLine(150, -550, 10, 50);
    line7.setLine(150, -650, 10, 50);
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("btrestart").disabled = true;
}

function btrestartGame() {
    if (confirm("Are you sure Restart Game !")) {
        if (endGame) {
            restartGame();
        } else {
            score.setArrPoint(score.getPoint());
            displayCharts();
            restartGame();
        }
    }
}



































// function setZIdex(line){
//     if(oto.top == (line.height + line.top )&& line.left >= oto.left &&  line.left <= (oto.left + oto.width)){

//     }
// }




