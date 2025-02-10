"use strict";

////////////////////////////
// Variables

////////////////////////////
// Elements
const adviceIdEl = document.querySelector(".advice__id");
const adviceTextEl = document.querySelector(".advice__text");
const adviceBtn = document.querySelector(".advice__btn");

////////////////////////////
// Event-listeners
window.onload = getData();
adviceBtn.addEventListener("click", getData);

////////////////////////////
// Functions
// get data using fetch api
function getData() {
  fetch("https://api.adviceslip.com/advice", { cache: "no-store" })
    .then((res) => res.json())
    .then((data) => {
      displayData(data);
    });
}

//display data
function displayData(dataSet) {
  adviceIdEl.textContent = dataSet.slip.id;
  adviceTextEl.textContent = dataSet.slip.advice;
}
