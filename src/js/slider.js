import { tns } from "../../node_modules/tiny-slider/src/tiny-slider"

function slider() {
    const slider = tns({
        container: '.slider-block',
        items: 2,
        slideBy: 'page',
        autoplay: false, // поменять на true
        controls: true,
        mouseDrag: true,
        autoplayButtonOutput: false,
        nav: false,
        gutter: 20,
        center: true,
        startIndex: 1,
        fixedWidth: 1240,
        controlsPosition: "bottom",
        controlsContainer: '.slider-controls',
        responsive: {
          0: {
            fixedWidth: 290,
            items: 1,
            // slideBy: 1
            // center: false
          },
          321: {
            fixedWidth: 1240
          }
        }
      });
}

export default slider