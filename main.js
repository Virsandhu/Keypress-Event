canvas = document.getElementById('mycanvas');

ctx = canvas.getContext("2d");

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
{
aplhabetkey();
document.getElementById("key").innerHTML="You pressed Alphabet Key";
console.log("alphabet key");
}

if(keyPressed >=48 && keyPressed<=57)
{
numberkey();
document.getElementById("key").innerHTML="You pressed Number Key";
console.log("number key");
}


if(keyPressed >=37 && keyPressed<=40)
{
arrowkey();
document.getElementById("key").innerHTML="You pressed Arrow Key";
console.log("arrow key");
}

if(keyPressed =17 )
{
specialkey();
document.getElementById("key").innerHTML="You pressed special Key";
console.log("special key");
}


if(keyPressed =18 )
{
specialkey();
document.getElementById("key").innerHTML="You pressed special Key";
console.log("special key");
}

if(keyPressed =27 )
{
specialkey();
document.getElementById("key").innerHTML="You pressed special Key";
console.log("special key");
}


}
 
function aplhabetkey(){
canvas = "alph.png";
}

function numberkey(){
canvas = "";
}

function arrowkey(){
 canvas = "";
}    

function specialkey(){
    canvas = "";
   }