class Mobile {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.message = "";
        this.inbox = []
        this.notification = false;
        this.battery = 100;
    };

    getId() { return this.id };

    getName() { return this.name };

    getNotification() {
        return this.notification;
    }
    setNotification(notification) {
        this.notification = notification;
    }
    getMessage() {
        return this.message
    };

    setMessage(message) {
        this.message = message;
        this.energy--
    };
    getInbox() {
        this.energy--
        return this.inbox

    }
    setInbox(message) {
        this.inbox.push(message)
        this.energy--
    }

    sendMessage(message, mobile) {
        mobile.setMessage(message)
        mobile.setNotification(true)
        mobile.setInbox(message)
        mobile.decreaseEnergy()
        this.energy --
    };
    deleteInbox() {
        this.inbox = []
    }
    turnOn() {
        this.status = true;
    };

    turnOff() {
        this.status = false;
    }

    getBattery() {
        if ((this.battery > 0) && (this.battery <= 100)) {
            return this.battery
        } else
            return this.turnOff()
    };

     setRechargeBattery(){
         if (this.battery < 100){
               this.battery ++
         }
         
     };
     decreaseEnergy() {
        this.energy--;
    }

    setBattery(battery) {
        this.battery = battery
    }
    getBatteryInfo() {
        return mobile.getBattery()
    }
    
}


let iphone = new Mobile(1, "Iphone");
let androi = new Mobile(2, "Samsung");



function deleteIbIp() {
    iphone.deleteInbox()
    document.getElementById("inboxIp").value = "";
}

function deleteIbSam() {
    androi.deleteInbox()
    document.getElementById("inboxSam").value = "";
}

function sendMessageIp() {
    let mess = document.getElementById("sendIp").value;
    iphone.sendMessage(mess, androi);
    let arr = androi.getInbox()
    console.log(androi.getInbox())
    console.log(androi.getNotification())
    let str = "";
    for (i = 0; i < arr.length; i++) {
        str += "Message " + (i + 1) + " : " + arr[i] + "               "
    }
    document.getElementById("inboxSam").value = str
    document.getElementById("sendIp").value = "";
    document.getElementById("sendIp").focus()
    if (androi.getNotification()) {
        document.getElementById("notificationSam").innerHTML = "Có tin nhắn !"
    }

}

function sendMessageSam() {
    let mess = document.getElementById("sendSam").value;
    androi.sendMessage(mess, iphone);
    let arr = iphone.getInbox()
    let str = "";
    for (i = 0; i < arr.length; i++) {
        str += "Message " + (i + 1) + " : " + arr[i] + "               ";
    }
    document.getElementById("sendSam").value = "";
    document.getElementById("inboxIp").value = str;
    document.getElementById("sendSam").focus();
    if (iphone.getNotification()) {
        document.getElementById("notificationIp").innerHTML = "Có tin nhắn !"
    }

}

function displayMessIp() {

    document.getElementById("iphone_message").style.display = "block";
    document.getElementById("iphone_main").style.display = "none";
    document.getElementById("notificationIp").innerHTML = ""

}
function displayMessSam() {
    document.getElementById("Samsung_message").style.display = "block";
    document.getElementById("Samsung_main").style.display = "none";
    document.getElementById("notificationSam").innerHTML = ""

}
function Return_Main_Ip() {
    document.getElementById("iphone_message").style.display = "none";
    document.getElementById("iphone_main").style.display = "block";
    document.getElementById("notificationIp").innerHTML = ""
}
function Return_Main_Sam() {
    document.getElementById("Samsung_message").style.display = "none";
    document.getElementById("Samsung_main").style.display = "block";
    document.getElementById("notificationSam").innerHTML = ""
}

