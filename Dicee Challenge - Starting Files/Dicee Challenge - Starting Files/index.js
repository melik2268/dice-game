var randomNuber1=Math.floor(Math.random() * 6)+1;//floor burada tam sayıya yuvarlama işleminde kullanılmıştır

var randomdiceImage= "Dice" + randomNuber1 + ".png";
var randomImageSource= "images/"+  randomdiceImage;

var image1 =document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

//2. zar için 
var randomNuber2=Math.floor(Math.random() * 6)+1;//floor burada tam sayıya yuvarlama işleminde kullanılmıştır

var randomDiceImage2= "Dice" + randomNuber2 + ".png";
var randomImageSource2= "images/"+  randomDiceImage2;

var image2 =document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);


//changing title
if(randomNuber1>randomNuber2){
    document.querySelector("h1").innerHTML="🏆Player 1 wins!";
}
else if(randomNuber2>randomNuber1){
    document.querySelector("h1").innerHTML="🏆Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}