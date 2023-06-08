const welcome = document.querySelector(".button-container");

const close = document.querySelector(".closeBtn");

const services = document.querySelector(".toServices");

if (localStorage.visited == "true"){
    welcome.classList.add("no-show");
}

close.addEventListener("click", ()=>{
    noPopUp();
})

services.addEventListener("click", ()=>{
    noPopUp();
});

function noPopUp(){
    localStorage.setItem("visited", "true");
}