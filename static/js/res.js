document.addEventListener("DOMContentLoaded",async() => {
  new Splide( '#image-slider' ).mount();
  await menuitem();
  await breakfastmenu();
})
function toggleMenu() {
  const menu = document.querySelector("#menu");
  menu.classList.toggle("active");
}
