let tabletWidth = 768;
let desktopWidth = 1440;

let menuBtn = document.querySelector('.page-header__toggle');
let mainNav = document.querySelector('.main-navigation');

menuBtn.onclick = () => {
  console.log("click");
  mainNav.classList.toggle('main-navigation--hidden');
}

let rangeLine = document.querySelector('.range__line');
let rangeBtn = document.querySelector('.range__button');

let exampleImages;
let rangeText = document.querySelectorAll('.range__text');

if (document.documentElement.clientWidth < tabletWidth) {
  exampleImages = document.querySelectorAll('.example__image--mobile');
}

rangeLine.onclick = () => {
  exampleImages[0].classList.toggle('example__image--current');
  exampleImages[1].classList.toggle('example__image--current');
  rangeBtn.classList.toggle('range__button--right');
}

rangeText[0].onclick = () => {
  if (!exampleImages[0].classList.contains('example__image--current')) {
    exampleImages[0].classList.add('example__image--current');
    exampleImages[1].classList.remove('example__image--current');
    rangeBtn.classList.remove('range__button--right');
  }
}

rangeText[1].onclick = () => {
  if (!exampleImages[1].classList.contains('example__image--current')) {
    exampleImages[0].classList.remove('example__image--current');
    exampleImages[1].classList.add('example__image--current');
    rangeBtn.classList.add('range__button--right');
  }
}

rangeLine.addEventListener('dragover', (evt) => {
  evt.preventDefault();
  
})
