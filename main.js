let menuBtn = document.querySelector("#menu-btn");
let menuNav = document.querySelector(".menu");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  menuNav.classList.toggle("active");
};

window.onscroll = () => {
  menuBtn.classList.remove("fa-times");
  menuNav.classList.remove("active");
};
