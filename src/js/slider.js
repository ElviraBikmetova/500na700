import { tns } from "../../node_modules/tiny-slider/src/tiny-slider"

function slider() {
  const slider = tns({
    container: '.slider-block',
    slideBy: 'page',
    autoplay: false, // поменять на true
    controls: true,
    mouseDrag: true,
    autoplayButtonOutput: false,
    nav: false,
    gutter: 20,
    center: true,
    startIndex: 1,
    controlsPosition: "bottom",
    controlsContainer: '.slider-controls',
    responsive: {
      0: {
        fixedWidth: 290,
        items: 1,
      },
      321: {
        items: 2,
        fixedWidth: 1240
      }
    }
  })

  const sliderNews = tns({
    container: '.news-block',
    responsive: {
      0: {
        fixedWidth: 200,
        // items: 2.2,
        // slideBy: 'page',
        autoplay: false, // поменять на true
        controls: false,
        mouseDrag: true,
        autoplayButtonOutput: false,
        nav: false,
        // gutter: 20,
        // center: true,
        startIndex: 1,
        // slideBy: 0.5
      },
      321: {
        disable: true
      }
    }
  })

}

export default slider