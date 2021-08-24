var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var image = new Image();
image.onload = function(){ 
    ctx.drawImage(image,10,10);
}

image.src = "oto.png";
image.width = "100px"
console.log(image);