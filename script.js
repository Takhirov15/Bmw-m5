var burger = document.querySelector(".burger-menu");
var menu = document.querySelector(".header-menu");

burger.addEventListener("click", toggleMenu);
menu.addEventListener("click", toggleMenu);

function toggleMenu(){
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  document.querySelector("body").classList.toggle("lock");
}