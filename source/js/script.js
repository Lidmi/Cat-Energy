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
  rangeBtn.draggable = false;

  exampleImages = document.querySelectorAll('.example__image--mobile');


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
}

if (document.documentElement.clientWidth >= tabletWidth) {
  rangeBtn.ondragstart = function() {
    return false;
  };

  rangeBtn.draggable = true;

  rangeBtn.onmousedown = function(event) {
    let shiftX = event.clientX - rangeBtn.getBoundingClientRect().left;
    let target = true;
    let boundsY = 200;

    moveAt(event.pageX, event.clientY);

    function moveAt(pageX, pageY) {

        let rect = rangeLine.getBoundingClientRect();

        let coord = pageX - rect.left - shiftX;

        if (coord + rect.left >= rect.left && coord + rect.left + rangeBtn.clientWidth <= rect.right && rect.top + boundsY >= pageY && rect.top - boundsY <= pageY) {
          rangeBtn.style.left = coord + 'px';
          target = true;
        } else {
          target = false;
        }
    }

    function onMouseMove(event) {
      if (target) {
        moveAt(event.pageX, event.clientY);
      } else {
        return;
      }
    }

    document.addEventListener('mousemove', onMouseMove);

    rangeBtn.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      rangeBtn.onmouseup = null;
      };

      // const wrapper = document.querySelector('.example__image-wrapper');

    document.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      rangeBtn.onmouseup = null;
      };
    }

}

