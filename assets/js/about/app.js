(() => {
  let nextDom = document.getElementById("next");
  let prevDom = document.getElementById("prev");

  let aboutCarouselDom = document.querySelector(".aboutCarousel");
  let SliderDom = aboutCarouselDom.querySelector(".aboutCarousel .list");
  let thumbnailBorderDom = document.querySelector(".aboutCarousel .thumbnail");
  let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
  let timeDom = document.querySelector(".aboutCarousel .time");
  let sliderImageNumber = 1;
  const getNextImageSrc = (nextImageNumber) =>
    `/assets/img/about-carousel/${nextImageNumber}.jpg`;

  thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
  let timeRunning = 3000;
  let timeAutoNext = 7000;

  nextDom.onclick = function () {
    showSlider("next");
  };

  prevDom.onclick = function () {
    showSlider("prev");
  };
  let runTimeOut;
  let runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
  function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll(
      ".aboutCarousel .list .item"
    );
    let thumbnailItemsDom = document.querySelectorAll(
      ".aboutCarousel .thumbnail .item"
    );

    if (type === "next") {
      SliderDom.appendChild(SliderItemsDom[0]);
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

      aboutCarouselDom.classList.add("next");

      if (sliderImageNumber === 5) {
        sliderImageNumber = 1;
      } else {
        sliderImageNumber += 1;
      }
    } else {
      SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
      thumbnailBorderDom.prepend(
        thumbnailItemsDom[thumbnailItemsDom.length - 1]
      );
      aboutCarouselDom.classList.add("prev");
      if (sliderImageNumber === 1) {
        sliderImageNumber = 5;
      } else {
        sliderImageNumber -= 1;
      }
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      aboutCarouselDom.classList.remove("next");
      aboutCarouselDom.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      next.click();
    }, timeAutoNext);
  }
})();
