class Apple {
    constructor() {
        this.weightAp = 10;
    }
    getWeightApple() {
        return this.weightAp
    };

    setWeightApple(weightAp) {
        this.weightAp = weightAp
    };

    decreaseWeightApple() {
        if (this.weightAp > 0) {
            this.weightAp--
        }
    };
}
class Human {
    constructor(name, gerden, weight) {
        this.name = name;
        this.gerden = gerden;
        this.weight = weight;
        this.said = [];
        this.listen = [];

    }
    getName() {
        return this.name;
    };

    getGerden() {
        return this.gerden
    };

    getWeight() {
        return this.weight
    };

    eatApple(apple) {
        apple.decreaseWeightApple();
        this.weight++
    };

    getSaid() {
        return this.said;
    };

    getListen() {
        return this.listen
    };

    setListen(listen) {
        this.listen = listen
    };


    setSaid(said, human) {
        human.setListen(said);
    };

}
let appleAdam = new Apple();
let appleEva = new Apple();

let Adam = new Human("Adam", "Male", 50);
let Eva = new Human("Eva", "Female", 45);



document.getElementById("nameAd").innerHTML = Adam.getName();
document.getElementById("gerdenAd").innerHTML = Adam.getGerden();
document.getElementById("weightAd").innerHTML = Adam.getWeight();
document.getElementById("nameEv").innerHTML = Eva.getName();
document.getElementById("gerdenEv").innerHTML = Eva.getGerden();
document.getElementById("weightEv").innerHTML = Eva.getWeight();





function saidAd() {
    let said = document.getElementById("saidAd").value;
    let str = "Adam said :" + said;
    Adam.setSaid(str, Eva);
    document.getElementById("listenEv").value = Eva.getListen();
    document.getElementById("saidAd").value = "";
}
function saidEv() {
    let said = document.getElementById("saidEv").value;
    let str = "Eva said : " + said;
    Eva.setSaid(str, Adam);
    document.getElementById("listenAd").value = Adam.getListen();
    document.getElementById("saidEv").value = "";
}
function Event_Enter_saidAd(evt) {
    if (evt.keyCode == 13) {
        saidAd();
    }
}
function Event_Enter_saidEv(evt) {
    if (evt.keyCode == 13) {
        saidEv();
    }
}


document.getElementById("numApAdam").innerHTML= appleAdam.getWeightApple();
function eatAppleAdam() {
    let weightAp = appleAdam.getWeightApple();
    document.getElementById("numApAdam").innerHTML = weightAp ;
    let width = document.getElementById("img_adam").width;
    let top =parseInt (document.getElementById("adamImg").style.marginTop);
    if (weightAp > 0) {
        Adam.eatApple(appleAdam);
        document.getElementById("weightAd").innerHTML = Adam.getWeight();
        document.getElementById("img_adam").width = width + 8;
        document.getElementById("adamImg").style.marginTop = (top -17) + "px";

    } else {
        alert("Đã ăn hết táo !");
        document.getElementById("apple_adam").style.display = "none";
    }

}

document.getElementById("numApEva").innerHTML= appleEva.getWeightApple();
function eatAppleEva() {
    let weightAp = appleEva.getWeightApple();
    document.getElementById("numApEva").innerHTML = weightAp ;
    let width = document.getElementById("img_eva").width;
    let top =parseInt (document.getElementById("evaImg").style.marginTop);
    if (weightAp > 0) {
        Eva.eatApple(appleEva);
        document.getElementById("weightEv").innerHTML = Eva.getWeight();
        document.getElementById("img_eva").width = width + 6;
        document.getElementById("evaImg").style.marginTop = (top - 17) + "px";

    } else {
        alert("Đã ăn hết táo !");
        document.getElementById("apple_eva").style.display = "none";
    }

}
