var topLine = document.querySelector(".top");
var midLine = document.querySelector(".middle");
var botLine = document.querySelector(".bottom");
var menu = document.querySelector(".menu");

randomNumber = Math.random();
randomNumber = Math.floor(randomNumber * 4) + 1;



document.querySelector('.hamburger').addEventListener('click', function(){
    topLine.classList.toggle('active');
    midLine.classList.toggle('active');
    botLine.classList.toggle('active');
    menu.classList.toggle('active');
});