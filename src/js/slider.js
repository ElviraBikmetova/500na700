import { tns } from "../../node_modules/tiny-slider/src/tiny-slider"

function slider() {
    // console.log('object')
    var slider = tns({
        container: '.slider-block',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: true
      });
    // console.log('object')
}

export default slider