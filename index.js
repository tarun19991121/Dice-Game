var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDice1Image = "dice" + randomNumber1 + ".png";
var randomDice2Image = "dice" + randomNumber2 + ".png";

var randomImageSource1 = "images/" + randomDice1Image;
var randomImageSource2 = "images/" + randomDice2Image;

//document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
//document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource1);
image1.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}