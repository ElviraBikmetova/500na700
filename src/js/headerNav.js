
function headerNav() {
    const body = document.querySelector('body')
    const headerBurger = body.querySelector('.header__burger')
    const headerNav = body.querySelector('.header-nav')
    const items = headerNav.querySelectorAll('.header-nav__item')
    let activeItem

    function setMenuBurger() {
        headerBurger.addEventListener('click', () => {
            headerBurger.classList.toggle('active')
            headerNav.classList.toggle('active')
            body.classList.toggle('lock')

            activeItem = headerNav.querySelector('.active-item')
                if (activeItem) {
                    activeItem.classList.remove('active-item')
                }
        })
    }

    function underlineMenuItem() {
        const subItems = headerNav.querySelectorAll('.header-nav__subitems')
        subItems.forEach(subItem => {
            const item = subItem.parentNode
            subItem.addEventListener('mouseover', () => {
                item.classList.add('hover')
            })
            subItem.addEventListener('mouseout', () =>  {
                item.classList.remove('hover')
            })
        })
    }

    function lockPageScroll() {
        items.forEach(item => {
            item.addEventListener('mouseover', () => {
                body.classList.add('lock')
            })
            item.addEventListener('mouseout', () =>  {
                body.classList.remove('lock')
            })
        })
    }

    function setActiveItem() {
        items.forEach(item => {
            item.addEventListener('click', () => {
                activeItem = headerNav.querySelector('.active-item')
                if (activeItem) {
                    activeItem.classList.remove('active-item')
                }
                item.classList.add('active-item')
            })
        })
    }

    setMenuBurger()
    underlineMenuItem()
    lockPageScroll()
    setActiveItem()
}

export default headerNav