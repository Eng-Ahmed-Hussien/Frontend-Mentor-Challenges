"use strict";

// Elements
const closeMenuBtn = document.querySelector(".close-menu-icon");
const openMenuBtn = document.querySelector(".menu-icon");
const asideEl = document.querySelector("aside");
const menuLinkEls = document.querySelectorAll(".menu-link");
console.log(menuLinkEls);

// Event-listeners
window.onresize = closeMenu;
window.onscroll = closeMenu;
closeMenuBtn.addEventListener("click", closeMenu);
openMenuBtn.addEventListener("click", openMenu);
menuLinkEls.forEach((element) => element.addEventListener("click", closeMenu));

// Functions
// open menu
function openMenu() {
  asideEl.classList.remove("hidden");
}

// close menu
function closeMenu() {
  asideEl.classList.add("hidden");
}
