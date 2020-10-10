var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;

var imagePlayer1 = "images/" + "dice" + randomNum1 + ".png";
var imagePlayer2 = "images/" + "dice" + randomNum2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imagePlayer1);
document.querySelectorAll("img")[1].setAttribute("src", imagePlayer2);

if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "Player1 wins!";
}
else if(randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML = "Player2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw!!!";
}