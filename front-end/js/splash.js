let intro = document.querySelector(".intro");
let logoSpan = document.querySelectorAll(".logo");
let logoImg = document.querySelector(".logo-image");

window.addEventListener("DOMContentLoaded", () => {
  // Animate image first
  setTimeout(() => {
    logoImg.classList.add("active");
  }, 400);

  // Animate text letters
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });
  }, 800);

  // Fade text letters
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.remove("active");
        span.classList.add("fade");
      }, (idx + 1) * 80);
    });
  }, 2800);

  // Fade out splash
  setTimeout(() => {
    intro.classList.add("hide");
  }, 3200);

  // Redirect
  setTimeout(() => {
    window.location.href = "/N2JWEB/home-page";
  }, 4000);
});