// Select all FAQ elements
const faqEls = document.querySelectorAll(".card__faq");

// Add a click event listener to each FAQ element
faqEls.forEach((el) => {
  el.addEventListener("click", handleFAQ);
});

// Keyboard accessibility: Open the FAQ when "Enter" is pressed on a focused element
document.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;

  const focusedEl = document.activeElement;
  // Only proceed if the focused element is an FAQ card
  if (focusedEl && focusedEl.classList.contains("card__faq")) {
    // Close all FAQ elements
    faqEls.forEach((el) => el.classList.remove("open"));
    // Open the focused FAQ element
    focusedEl.classList.add("open");
  }
});

/**
 * Toggle the FAQ answer open or closed when clicked.
 * If an FAQ is already open, clicking it will close it.
 */
function handleFAQ(e) {
  // Get the closest FAQ card element from the clicked target
  const faqEl = e.target.closest(".card__faq");
  if (!faqEl) return;

  // Determine if the clicked FAQ is already open
  const isOpen = faqEl.classList.contains("open");

  // Close all FAQ elements
  faqEls.forEach((el) => el.classList.remove("open"));

  // If the clicked FAQ was not open, open it
  if (!isOpen) {
    faqEl.classList.add("open");
  }
}
