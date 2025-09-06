var swiper = new Swiper(".x-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
	
  },
  keyboard: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

swiper.on("keyPress", (swiper, keyCode) => {
  console.log(keyCode);
  switch (keyCode) {
    case 38:
      swiper.slidePrev();
      break;
    case 40:
      swiper.slideNext();
      break;
  }
});

swiper.on("slideChange", function () {
  //console.log(this.realIndex);
  const index_currentSlide = this.realIndex;
  const index_activeSlide = this.activeIndex;
  const currentSlide = this.slides[index_activeSlide];
  const totalSlides = this.slides.length;
  this.slides.forEach((element, idx) => {
    element.classList.remove("contrast");
    element.classList.add("blur");
  });
  console.log(index_activeSlide);
  currentSlide.classList.remove("blur");
  currentSlide.classList.add("contrast");
});
