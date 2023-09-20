
function accordion() {
    const FirstFaqBlockItem = document.querySelector('.faq-block__item')
    FirstFaqBlockItem.classList.add('opened')
    const allFaqBlockItem = document.querySelectorAll('.faq-block__item')
    allFaqBlockItem. forEach((item) => {
        item.addEventListener('click', event => {
            allFaqBlockItem.forEach(item => {
                item.classList.remove('opened')
            })
            event.target.closest('.faq-block__item').classList.add('opened')
        })
    })
}

export default accordion