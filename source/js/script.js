let menuBtn = document.querySelector('.page-header__toggle');
let mainNav = document.querySelector('.main-navigation');
console.log("hi");

menuBtn.onclick = function() {
  console.log("click");
  mainNav.classList.toggle('main-navigation--hidden');
}

