const topLink = document.querySelector(".toTop");

window.addEventListener("scroll", ()=>{
    let screenHeight = window.scrollY;
    if (screenHeight >= 100){
        topLink.style.display = "flex";
    } else {
        topLink.style.display = "none";
    }
})