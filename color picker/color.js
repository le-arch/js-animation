alert("Check out color picking.\n");
var x = 0, y = 0, z =0 ,color, r = "RED" ,g = "GREEN ", b = "BLUE ";

function getColor(){
x = document.getElementById("red").value;
document.getElementById("divRed").innerHTML = 'RED = '+x;
y = document.getElementById("green").value;
document.getElementById("divGreen").innerHTML = 'GREEN = '+y;
z = document.getElementById("blue").value;
document.getElementById("divBlue").innerHTML = 'BLUE = '+z;
var color = rgbToHex(x,y,z);
color = "#"+color;
document.body.style.backgroundColor = color;
document.getElementsByTagName("h2")[0].innerHTML = color;
var newColor0 = rgbToHex(255-x,y,z);
newColor0 = "#"+newColor0;
var newColor1 = rgbToHex(x,255-y,z);
newColor1 = "#"+newColor1;
var newColor2 = rgbToHex(x,y,255-z);
newColor2 = "#"+newColor2;
var dac  = document.getElementsByClassName("color");
dac[0].style.backgroundColor = newColor0 ;
dac[0].style.color ="#ffffff";
dac[1].style.backgroundColor = newColor1;
dac[1].style.color ="#ffffff";
dac[2].style.backgroundColor = newColor2;
dac[2].style.color ="#ffffff";
}

function rgbToHex(R,G,B) {
return toHex(R)+toHex(G)+toHex(B)
}

function toHex(n) {
 n = parseInt(n,10);
 if (isNaN(n)) return "00";
 n = Math.max(0,Math.min(n,255));
 return "0123456789ABCDEF".charAt((n-n%16)/16)
      + "0123456789ABCDEF".charAt(n%16);
}
function getYourColor(){
your_color=document.getElementById("rgb").childNodes[0].innerHTML;
  alert("Your color is "+your_color);
} 

function input(promptColor,colorNow){
    alert(colorNow+" is set now "+promptColor);
    promptColor = prompt(" How much "+colorNow+" do you need for your color?\n          Insert a number from 0 to 255\n\n           <<<not available for the moment>>>");
    }