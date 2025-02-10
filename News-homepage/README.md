# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot](./assets/images/Screenshot.jpeg)

### Links

- Solution URL: [https://github.com/Eng-Ahmed-Hussien/Frontend-Mentor-Challenges/tree/main/News-homepage](https://github.com/Eng-Ahmed-Hussien/Frontend-Mentor-Challenges/tree/main/News-homepage)
- Live Site URL: [https://eng-ahmed-hussien.github.io/Frontend-Mentor-Challenges/News-homepage/](https://eng-ahmed-hussien.github.io/Frontend-Mentor-Challenges/News-homepage/)

## My process

### Built with

- HTML
- CSS
- JavaScript

### What I learned

Using Javascript to create an interactive mobile navigation.

```html
<aside class="hidden">
  <div class="aside-menu">
    <img
      class="close-menu-icon"
      src="assets/images/icon-menu-close.svg"
      alt=""
    />
    <nav>
      <ul>
        <li><a class="menu-link" href="#">Home</a></li>
        <li><a class="menu-link" href="#new">New</a></li>
        <li><a class="menu-link" href="#popular">Popular</a></li>
        <li><a class="menu-link" href="#">Trending</a></li>
        <li><a class="menu-link" href="#">Categories</a></li>
      </ul>
    </nav>
  </div>
</aside>
```

```js
// open menu
function openMenu() {
  asideEl.classList.remove("hidden");
}

// close menu
function closeMenu() {
  asideEl.classList.add("hidden");
}
```

## Author

- Frontend Mentor - [A7med Hussien](https://www.frontendmentor.io/profile/Eng-Ahmed-Hussien)
- Linkedin - [Ahmed Hussien](https://www.linkedin.com/in/ahmed-hussien-front-end-developer/)
