let navdots = document.querySelectorAll('.slider_navlink')
let sliders = document.querySelectorAll('.slider_image')
let prevBtn = document.querySelector('#nav-button-prev')
let nextBtn = document.querySelector('#nav-button-next')

let currentSlide = 0

let slidersCount = sliders.length - 1

function changeSlide () {
  for(let i = 0; i <= slidersCount; i++) {
    sliders[i].classList.remove('active')
    navdots[i].classList.remove('active')
  }
  sliders[currentSlide].classList.add('active')
  navdots[currentSlide].classList.add('active')
}

function setNextSlide () {
  (currentSlide === slidersCount) ? currentSlide = 0 :      currentSlide++;
  changeSlide()
}

function setPrevSlide () {
  (currentSlide === 0) ? currentSlide = slidersCount :      currentSlide--;
  changeSlide()
  
}

nextBtn.addEventListener('click', () => setNextSlide())
prevBtn.addEventListener('click', () => setPrevSlide())
