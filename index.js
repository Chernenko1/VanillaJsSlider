let navdots = document.querySelectorAll('.slider_navlink')
let sliders = document.querySelectorAll('.slider_image')
let prevBtn = document.querySelector('#nav-button-prev')
let nextBtn = document.querySelector('#nav-button-next')

let currentSlide = 0

let slidersCount = sliders.length - 1

function changeNextSlide () {
  sliders[currentSlide].classList.add('active')
  navdots[currentSlide].classList.add('active')

  setTimeout(() => {  
    sliders[(currentSlide === 0) ? slidersCount : currentSlide - 1].classList.remove('active')
    nextBtn.disabled  = false; 
  }, 500)
  navdots[(currentSlide === 0) ? slidersCount : currentSlide - 1].classList.remove('active')
  // for(let i = 0; i <= slidersCount; i++) {
  //   sliders[i].classList.remove('active')
  //   navdots[i].classList.remove('active')
  // }
}

function changePrevSlide () {
  sliders[currentSlide].classList.add('active')
  navdots[currentSlide].classList.add('active')

  sliders[(currentSlide === 4) ?  0 : currentSlide + 1].classList.remove('active')
  prevBtn.disabled = true;
  navdots[(currentSlide === 4) ? 0 : currentSlide + 1].classList.remove('active')
  // for(let i = 0; i <= slidersCount; i++) {
  //   sliders[i].classList.remove('active')
  //   navdots[i].classList.remove('active')
  // }
}

function setNextSlide () {
  (currentSlide === slidersCount) ? currentSlide = 0 : currentSlide++;
  changeNextSlide()
}

function setPrevSlide () {
  (currentSlide === 0) ? currentSlide = slidersCount : currentSlide--;
  changePrevSlide()
  
}

nextBtn.addEventListener('click', () => {
  nextBtn.disabled  = true; 
  setNextSlide()
})

prevBtn.addEventListener('click', () => {
  prevBtn.disabled = true; 
  setPrevSlide()
})
