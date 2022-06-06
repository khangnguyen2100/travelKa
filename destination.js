const sliderWrapper = document.querySelector('.slider-wrapper')
window.addEventListener('load' ,() => {
  app.destinationRender(sessionStorage.id)
  app.sliderRender(sliderWrapper, sessionStorage.id)
})
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  observer: true,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});