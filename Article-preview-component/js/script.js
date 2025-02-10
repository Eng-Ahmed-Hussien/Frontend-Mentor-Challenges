// Elements
const overlayEl = document.querySelector(".overlay");
const shareEl = document.querySelector(".share");
const shareBoxEl = document.querySelector(".share-box");
const shareBoxArrowEl = document.querySelector(".share-box-arrow");

// Event-listeners
// Overlay
overlayEl.addEventListener("click", closeShareBox);
// Share icon
shareEl.addEventListener("click", toggleShareBox);

// Functions
// toggle share box
function toggleShareBox() {
  shareEl.classList.toggle("active");
  shareBoxEl.classList.toggle("hidden");
  shareBoxArrowEl.classList.toggle("hidden");
  overlayEl.classList.toggle("hidden");
}

// close share box
function closeShareBox() {
  shareEl.classList.remove("active");
  shareBoxEl.classList.add("hidden");
  shareBoxArrowEl.classList.add("hidden");
  overlayEl.classList.add("hidden");
}
