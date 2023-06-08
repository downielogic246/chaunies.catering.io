const items =[
    {
        id: 00,
        photo: "",
        name: "8oz Cheespaste",
        price: 10.50,
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorem similique eaque, aut vitae, temporibus sapiente maiores eum eveniet autem nemo illo, quis ab maxime!",
    },
    {
        id: 01,
        photo: "",
        name: "16oz Cheesepaste",
        price: 18.50,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorem similique eaque, aut vitae, temporibus sapiente maiores eum eveniet autem nemo illo, quis ab maxime!",
    }
]

const delivery = document.getElementById("mode");
const address = document.getElementById("address");

const itemsHolder = document.querySelector(".items-container");

delivery.addEventListener("click", () => {
    let choice = delivery.value;

    if(choice === "Delivery"){
        address.style.display = "block";
    } else {
        address.style.display = "none";
    }
});

window.addEventListener("DOMContentLoaded", () =>{
    items.forEach((n) =>{
        return itemsHolder.innerHTML += `
        <!-- item -->
        <div class="item">
        <h2 class="itemName">${n.name}</h2>
            <img src="${n.photo}" alt="${n.name}" class="itemPhoto">
            <div class="description-container">
                <p class="price">$${n.price.toFixed(2)}</p>
                <label for="Quantity for ${n.name}">quantity</label>
                <input type="number" name="Quantity for ${n.name}" class="quantity" id="quantity-${n.id}" min="0" max="2" data-name="${n.name}">
                <article class="desc">${n.desc}</article>   
            </div>
        </div>
        <!-- end of item -->`
    });
});

const topBtn = document.querySelector(".toTop");

window.addEventListener("scroll", ()=>{
    let screenHeight = window.scrollY;
    console.log(screenHeight)
    if (screenHeight >= 167){
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }
})