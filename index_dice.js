var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDice1 = "dice"+randomNumber1+".png";
var randomImageSource1 = "images/"+randomDice1;
var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src",randomImageSource1)


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDice2 = "dice"+randomNumber2+".png";
var randomImageSource2 = "images/"+randomDice2;
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src",randomImageSource2)

var text = document.querySelector("h1");
var flag = document.querySelector("h1").classList.add("flag")

if (randomNumber2>randomNumber1){
  text.innerHTML = "Player 2 Wins!"
}

if (randomNumber1>randomNumber2){
  text.innerHTML = "Player 1 Wins!"
}

if (randomNumber2 == randomNumber1){
  text.innerHTML = "Equal!"
}
