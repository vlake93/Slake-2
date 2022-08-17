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

// const plus = document.querySelectorAll(".plus");
// const minus = document.querySelectorAll(".minus");
// const num = document.querySelectorAll(".num");

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

const checker = document.querySelector(".burger");
const burger = document.querySelector(".burger-btn");
const hiddenMenu = document.querySelector(".nav-hidden-menu");
const hiddenImg = document.querySelector(".nav-hidden-image");
const hiddenLinks = document.querySelectorAll(".nav-hidden-menu-link");

burger.addEventListener("click", () => {
  // nav.style.transform = "translateY(-20rem)";
  hiddenMenu.style.transform = "translateY(0)";
  hiddenImg.style.transform = "translateY(0)";
  if (checker.checked) {
    // nav.style.transform = "translateY(0rem)";
    hiddenMenu.style.transform = "translateY(150rem)";
    hiddenImg.style.transform = "translateY(-150rem)";
  }
});

hiddenLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // nav.style.transform = "translateY(0rem)";
    hiddenMenu.style.transform = "translateY(150rem)";
    hiddenImg.style.transform = "translateY(-150rem)";
    checker.checked === "false";
  });
});

const modal = document.querySelector(".dine-modal");
const overlay = document.querySelector(".overlay");
const dineCloseModal = document.querySelector(".dine-close-modal");
const dineButton = document.querySelector(".dine-button");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

dineButton.addEventListener("click", openModal);
dineCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

const modal2 = document.querySelector(".play-modal");
const overlay2 = document.querySelector(".overlay-2");
const playButton = document.querySelector(".play-button");
const playCloseModal = document.querySelector(".play-close-modal");

const openModal2 = function () {
  modal2.classList.remove("hidden");
  overlay2.classList.remove("hidden");
};

const closeModal2 = function () {
  modal2.classList.add("hidden");
  overlay2.classList.add("hidden");
};

playButton.addEventListener("click", openModal2);
overlay2.addEventListener("click", closeModal2);
playCloseModal.addEventListener("click", closeModal2);

// )(() => {
//   const dataName = document.querySelector("[data-name]");
//   const qStr = window.location.search;
//   const urlParams = new URLSearchParams(qStr);
//   const name = urlParams.get("name");

//   dataName.textContent = `Thank you, ${name}!`;
// })();
