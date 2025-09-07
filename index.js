var swiper = new Swiper(".x-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 50,
    depth: 300,
    modifier: 2.5,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
	
  },
  keyboard: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
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
    element.classList.remove("scale-up-center");
    element.classList.add("scale-down-center");	
  });
  console.log(index_activeSlide);
  currentSlide.classList.remove("blur");
  currentSlide.classList.add("contrast");
  currentSlide.classList.remove("scale-down-center");
  currentSlide.classList.add("scale-up-center");  
});

function clickButton(){
	swiper.autoplay.stop();
	Swal.fire({
	  imageUrl: "https://placeholder.pics/svg/300x300",
	  imageHeight: 300,
	  imageAlt: "A tall image",
	  buttonsStyling: true,
	  showCancelButton: true,
	  confirmButtonText: 'Confirm',
	  cancelButtonText: 'Back',
	  customClass: {
		confirmButton: 'my-confirm-button-class',
		cancelButton: 'my-cancel-button-class'
	  }	  
	}).then((result) => {
	  if (result.isConfirmed) {

		swiper.autoplay.start();
		// Perform your delete action here
	  } else if (result.dismiss === Swal.DismissReason.cancel) {

		// Perform your cancel action here
		swiper.autoplay.start();
	  }
	});
}
