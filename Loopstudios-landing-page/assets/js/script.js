"use strict";

////////////////////////////
// Variables

////////////////////////////
// Elements
const navBtn = document.querySelector("button[aria-expanded]");

////////////////////////////
// Event-listeners
navBtn.addEventListener("click", toggleNav);
window.onscroll = closeNav;
window.onresize = closeNav;

////////////////////////////
// Functions
// toggle mobile navigation
function toggleNav() {
  const expanded = navBtn.getAttribute("aria-expanded") === "true";
  navBtn.setAttribute("aria-expanded", !expanded);
}

// close mobile navigation
function closeNav() {
  navBtn.setAttribute("aria-expanded", "false");
}
