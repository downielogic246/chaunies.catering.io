const topBtn = document.querySelector(".toTop");

window.addEventListener("scroll", ()=>{
    let screenHeight = window.scrollY;

    if (screenHeight >= 694){
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }
})