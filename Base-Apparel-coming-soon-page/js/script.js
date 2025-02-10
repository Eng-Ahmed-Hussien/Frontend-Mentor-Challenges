// Elements
const emailBoxEl = document.querySelector(".email-box");
const emailInput = document.querySelector(".email-input");
const emailBtn = document.querySelector(".email-button");
const successMsg = document.querySelector(".success-message");

// Event-listeners
emailBtn.addEventListener("click", () => {
  console.log(emailInput.value);
  validateEmail(emailInput.value) ? emailSuccess() : emailError();
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    console.log(emailInput.value);
    validateEmail(emailInput.value) ? emailSuccess() : emailError();
  }
});

// Functions
function emailError() {
  emailBoxEl.classList.add("error");
  emailBoxEl.classList.remove("success");
}

function emailSuccess() {
  emailBoxEl.classList.remove("error");
  emailBoxEl.classList.add("success");
  successMsg.innerText = `${emailInput.value} successfully registered`;
  emailInput.value = "";
}

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
