const navToggle = document.querySelector(".nav-toggle");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const links = document.querySelector(".links");

hamburger.addEventListener("click", function () {
  links.classList.add("open");
  close.style.display = "block";
  hamburger.style.display = "none";
});

close.addEventListener("click", function () {
  links.classList.remove("open");
  close.style.display = "none";
  hamburger.style.display = "block";
});
