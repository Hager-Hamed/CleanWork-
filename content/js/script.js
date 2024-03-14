function progress() {
  let progress = document.querySelector(".scrollProgress");
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  window.addEventListener("scroll", () => {
    progress.style.width = `${
      (document.documentElement.scrollTop / height) * 100
    }%`;
  });
}
progress();

// scroll to target section
function scrollToTargetSection() {
  let scrollSection = document.querySelectorAll(".scrollTo");
  scrollSection.forEach((target) => {
    target.addEventListener("click", function () {
      window.scrollTo({
        top: document.getElementById(this.dataset.target).offsetTop,
        behavior: "smooth",
      });
    });
  });
}
scrollToTargetSection();

//scroll to tob of page
function scrollToTop() {
  let scrollBtn = document.querySelector(".scroll-to-top");
  window.onscroll = function () {
    if (this.scrollY >= 600)
      scrollBtn.style = "opacity:1; visibility: visible;";
    else scrollBtn.style = " opacity:0; visibility: hidden;";
  };
  scrollBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}
scrollToTop();

// ==========================================================================================

// handel md menu nav
function handelMdNavMenu() {
  document.querySelector(".navbar-toggler").onclick = function () {
    document.getElementById(this.dataset.target).classList.toggle("active");
    this.classList.toggle("rotate");
    let span = this.querySelectorAll("span");
    span[0].classList.toggle("rotate-mains");
    span[1].classList.toggle("opacity");
    span[2].classList.toggle("rotate-plus");
  };
}
handelMdNavMenu();

// mni menu nave
function MineNav() {
  let hover = document.querySelector(".dropdown");
  hover.onclick = (_) => {
    hover.querySelector(".dropdown-menu").classList.toggle("active");
  };
}
MineNav();

// activation links
function activation() {
  let links = document.querySelectorAll(".navbar .nav-link");
  links.forEach(
    (link) =>
      (link.onclick = (_) => {
        links.forEach((link) => {
          link.classList.remove("active");
        });
        link.classList.add("active");
      })
  );
}
activation();

// ====================================

// function calender() {
//   let countDown;
//   countDown = new Date("11 2, 2024 23:59:59").getTime();

//   let counter = setInterval(() => {
//     let dateDiff = countDown - new Date().getTime();
//     let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
//     document.querySelector("#countdown-days").innerHTML =
//       days < 10 ? `0${days}` : days;
//     let hours = Math.floor(
//       (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//       document.querySelector("#countdown-hours").innerHTML =
//         hours < 10 ? `0${hours}` : hours;
//       let minuets = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
//       document.querySelector("#countdown-minutes").innerHTML =
//         minuets < 10 ? `0${minuets}` : minuets;
//       let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
//       document.querySelector("#countdown-seconds").innerHTML =
//         seconds < 10 ? `0${seconds}` : seconds;
//   }, 1000);
// }
// calender();

// ======================================================

let imgs = document.querySelectorAll(".slideshow img ");
let words = document.querySelectorAll(".change-word strong ");

let firstIndex = 0;
let time = 3000;

imgs[firstIndex].classList.add("active");
setInterval(autoSlide, time);
function autoSlide() {
  let count = firstIndex;
  setTimeout((_) => {
    imgs[count].classList.remove("active");
  }, 1000);
  firstIndex = (firstIndex + 1) % imgs.length;
  imgs[firstIndex].classList.add("active");
}

let index = 0;
function autoChange() {
  words.forEach((word) => word.classList.remove("visible"));
  words[index].classList.add("visible");
  if (index >= words.length - 1) index = 0;
  else index++;
  setTimeout(autoChange, time);
}
window.onload = autoChange;
