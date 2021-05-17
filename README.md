# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot
[![Desktop_version](https://github.com/LidiaRJ/Blogger-landing-page/blob/main/screenshots/screencapture-blog-desktop.jpg)](https://github.com/LidiaRJ/Blogger-landing-page/blob/main/screenshots/screencapture-blog-desktop.jpg)
[![Mobile_version](https://github.com/LidiaRJ/Blogger-landing-page/blob/main/screenshots/screencapture-blog-mobile.jpg)](https://github.com/LidiaRJ/Blogger-landing-page/blob/main/screenshots/screencapture-blog-mobile.jpg)


### Links

- Solution URL: [Add solution URL here](https://github.com/LidiaRJ/Blogger-landing-page)
- Live Site URL: [Add live site URL here](https://lidiarj.github.io/Blogger-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Major learning during the project:
- Building a responsive burger menu for mobile screens. 
- Buidling a collpasable submenu with hovering states.
- Positioning elements with different z indexes.

Dropdown Menu Structure
```html
<div class="dropdown">
          <button type="button" class="dropbtn">Product
            <img class="arrow" src="./images/icon-arrow-dark.svg">
          </button>
    
          <ul class="dropdownContent drop-cont1">
            <li><a class="drop-link" href="#">Overview</a></li>
            <li><a class="drop=link" href="#">Pricing</a></li>
            <li><a class="drop=link" href="#">Marketplace</a></li>
            <li><a class="drop=link" href="#">Features</a></li>
            <li><a class="drop=link" href="#">Integrations</a></li>
          </ul>
        </div>
```
```css
.dropdownContent {
    display: none;
    background: white;
    max-height: auto; /*to change in javaScript*/
    padding-bottom: 20px;
    border-radius: 7px;;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    z-index: 2;
```

### Continued development
- Further interactivity using JavaScript and the implementation of JS Frameworks in future projects. 


### Useful resources

- [Example resource 1](https://www.w3school.com)


## Author

- Website - [Lidia Ruiz Jimeno](https://www.behance.net/Lidiarjimeno)
- Frontend Mentor - [@LidiaRJ](https://www.frontendmentor.io/profile/LidiaRJ)
- Github - [@LidiaRJ](https://github.com/LidiaRJ)
- Codepen - (https://codepen.io/lilyrj)

