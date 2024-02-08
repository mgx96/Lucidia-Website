var topLine = document.querySelector(".top");
var midLine = document.querySelector(".middle");
var botLine = document.querySelector(".bottom");

randomNumber = Math.random();
randomNumber = Math.floor(randomNumber * 4) + 1;



document.querySelector('.hamburger').addEventListener('click', function(){
    topLine.classList.toggle('active');
    midLine.classList.toggle('active');
    botLine.classList.toggle('active');
    console.log("Clicked!");
});