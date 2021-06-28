var randomnumber1 = Math.floor(Math.random() * 6 )+ 1;
var randomnumber2 = Math.floor(Math.random() * 6 )+ 1;

var randomimage1 = "images/dice" + randomnumber1 + ".png";
var randomimage2 = "images/dice" + randomnumber2 + ".png";

var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");


image1.setAttribute("src", randomimage1);
image2.setAttribute("src", randomimage2);

var heading = document.querySelector(".container h1");

if(randomnumber1>randomnumber2){
    heading.innerHTML = "🚩 Player 1 Wins";
}else if( randomnumber1 === randomnumber2){
    heading.innerHTML = "🚩 Draw 🚩 ";
    
}
else{
    heading.innerHTML = "Player 2 Wins 🚩 ";

}