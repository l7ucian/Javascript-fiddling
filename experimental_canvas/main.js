var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "blue";
context.fillRect(10,10,100,100);
context.strokeRect(10,10,100,100);
(function drawPattern(){
    var canvas = document.getElementById("Canvas2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    
    var img = new Image();
    img.src = "android.jpg";
    img.onload = function()
    {
    var pattern = context.createPattern(img, "repeat");
    context.fillStyle = pattern;
    context.fillRect(10, 10, 171, 200);
    context.strokeRect(10, 10, 171, 200);  
    };
}());

(function drawCircle(canvas) {
 var canvas = document.getElementById("canvy");
 var context = canvas.getContext("2d");
 context.beginPath();
 context.arc(50, 50, 30, 0, Math.PI*2, true);
 context.stroke();
}());