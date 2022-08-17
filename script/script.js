"use strict";

const nav = document.querySelector(".nav");
let a = [1, 1, 1];

const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const num = document.querySelectorAll(".num");
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", () => {
    if (a[i] < 9) {
      a[i]++;
      a[i] = a[i] < 10 ? "0" + a[i] : a[i];
      num[i].innerText = a[i];
    }
  });

  minus[i].addEventListener("click", () => {
    if (a[i] > 1) {
      a[i]--;
      a[i] = a[i] < 10 ? "0" + a[i] : a[i];
      num[i].innerText = a[i];
    }
  });
}

if (window.scrollY > 10) {
  console.log("WORKING");
}

const checker = document.querySelector(".burger");
const burger = document.querySelector(".burger-btn");
const hiddenMenu = document.querySelector(".nav-hidden-menu");
const hiddenImg = document.querySelector(".nav-hidden-image");
const hiddenLinks = document.querySelectorAll(".nav-hidden-menu-link");

burger.addEventListener("click", () => {
  console.log("burger", checker.checked);
  hiddenMenu.style.transform = "translateY(0)";
  hiddenImg.style.transform = "translateY(0)";
  if (checker.checked) {
    hiddenMenu.style.transform = "translateY(150rem)";
    hiddenImg.style.transform = "translateY(-150rem)";
  }
});

hiddenLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (checker.checked) {
      checker.checked = false;
    }
    hiddenMenu.style.transform = "translateY(150rem)";
    hiddenImg.style.transform = "translateY(-150rem)";
    firstLine.style.transform = "rotate(0deg)";
    secondLine.style.transform = "rotate(0deg)";
    thirdLine.style.transform = "rotate(0deg)";
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
