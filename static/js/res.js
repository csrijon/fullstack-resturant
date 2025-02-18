document.addEventListener("DOMContentLoaded",async() => {
  await menuitem();
  await breakfastmenu();
})
function toggleMenu() {
  const menu = document.querySelector("#menu");
  menu.classList.toggle("active");
}
