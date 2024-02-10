
let navButtons = document.querySelectorAll(".navbuttons a");
let bodyId = document.querySelector("body").id;

for(let navButton of navButtons){
    if(navButton.dataset.active == bodyId){
        navButton.classList.add("active");
    }
}