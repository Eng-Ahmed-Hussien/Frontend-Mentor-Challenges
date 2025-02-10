# Frontend Mentor - Single price grid component solution

This is a solution to the [Single price grid component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the component depending on their device's screen size
- See a hover state on desktop for the Sign Up call-to-action

### Screenshot

![Screenshot](./images/Screenshot.jpeg)

### Links

- Solution URL: [https://github.com/Eng-Ahmed-Hussien/Frontend-Mentor-Challenges/tree/main/Single-price-grid-component](https://github.com/Eng-Ahmed-Hussien/Frontend-Mentor-Challenges/tree/main/Single-price-grid-component)
- Live Site URL: [https://eng-ahmed-hussien.github.io/Frontend-Mentor-Challenges/Single-price-grid-component/](https://eng-ahmed-hussien.github.io/Frontend-Mentor-Challenges/Single-price-grid-component/)

## My process

### Built with

- HTML
- CSS

### What I learned

Practice using css grid and flexbox with mobile first design

```css
@media only screen and (min-width: 41em) {
  .card-container {
    max-width: 64rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .title-section {
    grid-column: 1 / -1;
  }
}
```

## Author

- Frontend Mentor - [A7med Hussien](https://www.frontendmentor.io/profile/Eng-Ahmed-Hussien)
- Linkedin - [Ahmed Hussien](https://www.linkedin.com/in/ahmed-hussien-front-end-developer/)
