function setVh() {
  document.documentElement.style.setProperty(
    "--vh",
    `${window.innerHeight * 0.01}px`,
  );
}
setVh();
window.addEventListener("resize", setVh);
window.addEventListener("orientationchange", setVh);

const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");
const menuLinks = document.querySelectorAll(".mobile-menu__link");
const langLinks = document.querySelectorAll(".mobile-menu__lang-link");

const toggleMenu = () => mobileMenu.classList.toggle("is-open");
const closeMenu = () => mobileMenu.classList.remove("is-open");

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", closeMenu);

menuLinks.forEach((link) => link.addEventListener("click", closeMenu));
langLinks.forEach((link) => link.addEventListener("click", closeMenu));
