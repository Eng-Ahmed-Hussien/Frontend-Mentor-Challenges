# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![Screenshot](./images/Screenshot.jpeg)

### Links

- Solution URL: [https://github.com/Eng-Ahmed-Hussien/Frontend-Mentor-Challenges/tree/main/Product-preview-card-component](https://github.com/Eng-Ahmed-Hussien/Frontend-Mentor-Challenges/tree/main/Product-preview-card-component)
- Live Site URL: [https://eng-ahmed-hussien.github.io/Frontend-Mentor-Challenges/QR-code-component/](https://eng-ahmed-hussien.github.io/Frontend-Mentor-Challenges/Product-preview-card-component)

## My process

### Built with

- HTML5
- CSS3

### What I learned

- Using css media-queries to change content based on screen size.
- Changing the content of an img using css content: url();

```css
@media only screen and (max-width: 600px) {
  /* Card */
  .card {
    flex-direction: column;
    width: 350px;
    min-width: 350px;
  }

  .card-img {
    content: url(images/image-product-mobile.jpg);
    border-radius: 10px 10px 0 0;
  }
}
```

## Author

- Frontend Mentor - [A7med Hussien](https://www.frontendmentor.io/profile/Eng-Ahmed-Hussien)
- Linkedin - [Ahmed Hussien](https://www.linkedin.com/in/ahmed-hussien-front-end-developer/)
