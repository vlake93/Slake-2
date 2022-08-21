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

const sectionStay = document.querySelector(".section-stay-container");
const sectionDine = document.querySelector(".section-dine-container");
const sectionPlay = document.querySelector(".section-play-container");

window.addEventListener("scroll", () => {
  burger.style.opacity = "1";
  const scrollLength = window.scrollY;
  if (scrollLength >= 400 && scrollLength <= 900) {
    console.log(scrollLength);
    sectionStay.style.display = "flex";
  } else if (scrollLength >= 900 && scrollLength <= 1100) {
    console.log(scrollLength);
    sectionDine.style.display = "flex";
  } else if (scrollLength >= 1300 && scrollLength <= 1400) {
    console.log(scrollLength);
    sectionPlay.style.display = "flex";
  }
});

const checker = document.querySelector(".burger");
const burger = document.querySelector(".burger-btn");
const hiddenMenu = document.querySelector(".nav-hidden-menu");
const hiddenImg = document.querySelector(".nav-hidden-image");
const hiddenLinks = document.querySelectorAll(".nav-hidden-menu-link");
const hiddenImage = document.querySelectorAll(".nav-hidden-image");

burger.addEventListener("click", () => {
  hiddenMenu.style.transform = "translateY(0)";
  hiddenImg.style.transform = "translateY(0)";
  hiddenMenu.style.opacity = "1";
  hiddenImg.style.opacity = "1";

  if (checker.checked) {
    hiddenMenu.style.transform = "translateY(150rem)";
    hiddenImg.style.transform = "translateY(-150rem)";
    hiddenMenu.style.opacity = "0";
    hiddenImg.style.opacity = "0";
  }
});

hiddenLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (checker.checked) {
      checker.checked = false;
    }
    hiddenMenu.style.transform = "translateY(150rem)";
    hiddenImg.style.transform = "translateY(-150rem)";
    hiddenMenu.style.opacity = "0";
    hiddenImg.style.opacity = "0";
  });
});

const modal = document.querySelectorAll(".modal");
const overlay = document.querySelectorAll(".overlay");
const modalButton = document.querySelectorAll(".modal-button");
const CloseModal = document.querySelectorAll(".close-modal");

for (let i = 0; i < 2; i++) {
  const openModal = function () {
    modal[i].classList.remove("hidden");
    modal[i].style.background = "url(../assets/modal-" + [i] + ".jpg";
    overlay[i].classList.remove("hidden");
  };

  const closeModal = function () {
    modal[i].classList.add("hidden");
    overlay[i].classList.add("hidden");
  };

  modalButton[i].addEventListener("click", openModal);
  CloseModal[i].addEventListener("click", closeModal);
  overlay[i].addEventListener("click", closeModal);
}

for (let i = 0; i < hiddenLinks.length; i++) {
  hiddenLinks[i].addEventListener("mouseover", () => {
    hiddenImage[0].style.background = "url(../assets/linkcover-" + [i] + ".jpg";
    hiddenImage[0].style.backgroundRepeat = "no-repeat";
    hiddenImage[0].style.backgroundColor = "#1f2c51";
    hiddenImage[0].style.backgroundAttachment = "fixed";
    hiddenImage[0].style.backgroundPosition = "center";
    hiddenImage[0].style.backgroundSize = "cover";
  });
}
