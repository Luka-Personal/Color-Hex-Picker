`use strict`;

// consts
const hexCode = document.querySelectorAll("[id=copy]");
const menuBtn = document.querySelectorAll(`.menu-icon`);
const navItems = document.querySelector(`.nav-items`);
const navItemsToggle = document.querySelector(`.nav-toggl`);
const heroSection = document.querySelector(`.hero`);
const shortcutSection = document.querySelector(`.shortcut`);
const navLink = document.querySelectorAll(`.nav-link`);
const contBlur = document.querySelectorAll(`.container`);
const closeIcon = document.querySelector(`.helper-close`);
const openIcon = document.querySelector(`.helper-open`);
// ################################################
// color hex pick on click
for (const hx of hexCode) {
  hx.addEventListener("click", function () {
    navigator.clipboard.writeText(hx.textContent);
  });
}
// ################################################
// FUNCTIONS
// on click show nav menu
const addNav = function () {
  navItems.classList.toggle(`nav-toggl`);
  navIcon();
  for (const conts of contBlur) {
    conts.classList.toggle(`blur-bg`);
  }
  document.body.classList.toggle(`scroll-disable`);
};
// on click remove nav menu
const removeNav = function () {
  navItems.classList.remove(`nav-toggl`);
  navIcon();
  for (const conts of contBlur) {
    conts.classList.remove(`blur-bg`);
  }
  document.body.classList.remove(`scroll-disable`);
};
// if window size >=944 remove nav
const removeNavWindow = function () {
  if (this.window.innerWidth >= 944) {
    removeNav();
    openIcon.classList.remove(`hide-open-icon`);
    closeIcon.classList.remove(`show-open-icon`);
  }
};
// toggle nav icon
const navIcon = function () {
  openIcon.classList.toggle(`hide-open-icon`);
  closeIcon.classList.toggle(`show-open-icon`);
};
// ################################################
// open menu on click
for (const item of menuBtn) {
  item.addEventListener(`click`, addNav);
}

// normal click to get of the website
for (const item of navLink) {
  item.addEventListener(`click`, removeNav);
}

// middle click on mouse
for (const item of navLink) {
  item.addEventListener(`auxclick`, removeNav);
}

// remove nav on resize
window.addEventListener("resize", removeNavWindow);
