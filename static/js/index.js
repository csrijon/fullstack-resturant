
async function menuitem() {
    let response = await fetch("/menu");
    let data = await response.json();

    const menuitems = document.querySelector(".menu-items");
    menuitems.innerHTML = "";
    data.forEach((item) => {
        const menu = document.createElement("div");
        menu.classList.add("menu-item");
        menu.innerHTML = `
            <img src="${item.img}" alt="Magnam Tiste">
            <h4>${item.name}</h4>
            <span class="price">${item.price}</span>
            <button class="buy-btn">
                <span class="material-symbols-outlined">shopping_cart</span> Buy
            </button>
        `;
        menuitems.appendChild(menu);
    });
}
let active = document.querySelector(".active")
active.addEventListener("click", async() => {
   await menuitem();
})
async function breakfastmenu() {
    let res = await fetch("/breakfast");
    let breakfastdata = await res.json();
    const menuitems = document.querySelector(".menu-items");
    menuitems.innerHTML = "";
    breakfastdata.forEach((element) => {
        const menu = document.createElement("div");
        menu.classList.add("menu-item");
        menu.innerHTML = `
         <img src="${element.img}" alt="Magnam Tiste">
            <h4>${element.name}</h4>
            <span class="price">${element.price}</span>
            <button class="buy-btn">
                <span class="material-symbols-outlined">shopping_cart</span> Buy
            </button>
        `
        menuitems.appendChild(menu);
    });
}
let Breakfast = document.querySelector(".Breakfast");
Breakfast.addEventListener("click",async() => {
  await breakfastmenu()
})

async function lunchmenu() {
    let res = await fetch("/lunch");
    let lunchdata = await res.json();
    const menuitems = document.querySelector(".menu-items");
    menuitems.innerHTML = "";
    lunchdata.forEach((element) => {
        const menu = document.createElement("div");
        menu.classList.add("menu-item");
        menu.innerHTML = `
         <img src="${element.img}" alt="Magnam Tiste">
            <h4>${element.name}</h4>
            <span class="price">${element.price}</span>
            <button class="buy-btn">
                <span class="material-symbols-outlined">shopping_cart</span> Buy
            </button>
        `
        menuitems.appendChild(menu);
    });
}

let Lunch = document.querySelector(".Lunch");
Lunch.addEventListener("click",async() => {
 await lunchmenu()
})
    


