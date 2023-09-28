import { tns } from "../../node_modules/tiny-slider/src/tiny-slider"

function slider() {
  const slider = tns({
    container: '.slider-block',
    slideBy: 'page',
    autoplay: true,
    controls: true,
    mouseDrag: true,
    autoplayButtonOutput: false,
    nav: false,
    gutter: 20,
    center: true,
    startIndex: 1,
    controlsPosition: "bottom",
    controlsContainer: '.slider-controls',
    autoWidth: true,
    responsive: {
      0: {
        edgePadding: 15
      },
      1281: {
        edgePadding: 0
      }
    }
  })

  const sliderNews = tns({
    container: '.news-block',
    autoplay: true,
    controls: false,
    mouseDrag: true,
    autoplayButtonOutput: false,
    nav: false,
    responsive: {
      0: {
        fixedWidth: 200,
        startIndex: 1,
      },
      321: {
        fixedWidth: 400,
        startIndex: 0,
      },
      768: {
        disable: true
      }
    }
  })

}

export default slider




