"use strict";

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");
const plus2 = document.querySelector(".plus2");
const minus2 = document.querySelector(".minus2");
const num2 = document.querySelector(".num2");
const plus3 = document.querySelector(".plus3");
const minus3 = document.querySelector(".minus3");
const num3 = document.querySelector(".num3");
const nav = document.querySelector(".nav");
let a = 1;
let b = 1;
let c = 1;

window.addEventListener("scroll", () => {
  nav.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  nav.style.position = "fixed";
  // if (window.scroll(0, 0)) {
  //   nav.style.backgroundColor = "transparent";
  // }
});

plus.addEventListener("click", () => {
  if (a < 9) {
    a++;
    a = a < 10 ? "0" + a : a;
    num.innerText = a;
  }
});

minus.addEventListener("click", () => {
  if (a > 1) {
    a--;
    a = a < 10 ? "0" + a : a;
    num.innerText = a;
  }
});

plus2.addEventListener("click", () => {
  if (b < 9) {
    b++;
    b = b < 10 ? "0" + b : b;
    num2.innerText = b;
  }
});

minus2.addEventListener("click", () => {
  if (b > 1) {
    b--;
    b = b < 10 ? "0" + b : b;
    num2.innerText = b;
  }
});

plus3.addEventListener("click", () => {
  if (c < 9) {
    c++;
    c = c < 10 ? "0" + c : c;
    num3.innerText = c;
  }
});

minus3.addEventListener("click", () => {
  if (c > 1) {
    c--;
    c = c < 10 ? "0" + c : c;
    num3.innerText = c;
  }
});

let burger = document.querySelector(".burger");
const hiddenMenu = document.querySelector(".nav-hidden-menu");
const hiddenImg = document.querySelector(".nav-hidden-image");

burger.addEventListener("click", () => {
  nav.style.transform = "translateY(-20rem)";
  hiddenMenu.style.transform = "translateY(0)";
  hiddenMenu.style.transform = "translateY(0)";
  hiddenImg.style.transform = "translateY(0)";
});
