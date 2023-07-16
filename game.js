var randno = Math.round(Math.random()*100);
var live = document.getElementById("livs");
var messge = document.getElementById("msg");
console.log(randno);

var mesg ="";
var lives = 10;
function result() {

    lives--;
    var input = document.getElementById("int").value;
    console.log(input);

    if(input == randno)
    {
        location.href="./win.html";
    }
    else if((input > randno) && (lives !=  0))
    {
        console.log(input,randno);
        mesg="YOUR GUESS IS HIGH";
    }
    else if((input < randno) && (lives != 0))
    {
        console.log(input,randno);
        mesg="YOUR GUESS IS LOW";
    }
    else if(lives == 0)
    {
        location.href="./lose.html";
    }
    messge.innerHTML=mesg;
    live.innerHTML="lives : "+lives;

}

function again() {
    location.href="./index.html";
}