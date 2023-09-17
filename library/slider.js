const sliderLine = document.querySelector(".slider-line"),
  prevButton = document.querySelector(".carret__left"),
  nextButton = document.querySelector(".carret__right"),
  dots = document.querySelectorAll(".dot");

let position = 0,
  dotIndex = 0;

const nextSlide = () => {
  clearInterval(slideInterval);
  if (position < (dots.length - 3) * 475) {
    position += 475;
    dotIndex++;
  } else {
    position = 0;
    dotIndex = 0;
    // position = -950
  }
  sliderLine.style.left = -position + "px";
  thisSlide(dotIndex);
  slideInterval = setInterval(() => {
    nextSlide();
  }, 4000);
};

const prevSlide = () => {
  clearInterval(slideInterval);
  if (position > 0) {
    position -= 475;
    dotIndex--;
  } else {
    // position = 0
    position = (dots.length - 3) * 475;
    dotIndex = dots.length - 3;
  }
  sliderLine.style.left = -position + "px";
  thisSlide(dotIndex);
  slideInterval = setInterval(() => {
    nextSlide();
  }, 4000);
};

const theNextSlide = () => {
  clearInterval(slideInterval);
  if (position < (dots.length - 1) * 475) {
    position += 475;
    dotIndex++;
  }
  sliderLine.style.left = -position + "px";
  thisSlide(dotIndex);
  slideInterval = setInterval(() => {
    nextSlide();
  }, 4000);
};

const thePrevSlide = () => {
  clearInterval(slideInterval);
  if (position > 0) {
    position -= 475;
    dotIndex--;
  }
  sliderLine.style.left = -position + "px";
  thisSlide(dotIndex);
  slideInterval = setInterval(() => {
    nextSlide();
  }, 4000);
};

nextButton.addEventListener("click", theNextSlide);
prevButton.addEventListener("click", thePrevSlide);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    clearInterval(slideInterval);
    position = 475 * index;
    sliderLine.style.left = -position + "px";
    dotIndex = index;
    thisSlide(dotIndex);
    slideInterval = setInterval(() => {
      nextSlide();
    }, 4000);
  });
});

const thisSlide = (index) => {
  for (let dot of dots) {
    dot.classList.remove("active");
  }
  dots[index].classList.add("active");
  dots[index].style.cursor = "auto";
};

slideInterval = setInterval(() => {
  nextSlide();
}, 3000);
