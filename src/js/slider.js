import { tns } from "../../node_modules/tiny-slider/src/tiny-slider"

function slider() {
    // console.log('object')
    var slider = tns({
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
        controlsContainer: '.slider-controls'
      });
    // console.log('object')
}

export default slider