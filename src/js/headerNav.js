
function headerNav() {
    const body = document.querySelector('body')
    const lockPadding = document.querySelectorAll('.lock-padding')
    const lockPaddingValue = window.innerWidth - document.documentElement.clientWidth + 'px';
    const headerBurger = body.querySelector('.header__burger')
    const headerNavWrapper = body.querySelector('.header-nav-wrapper')
    const headerNav = headerNavWrapper.querySelector('.header-nav')
    const items = headerNavWrapper.querySelectorAll('.header-nav__item')
    let activeItem

    function setMenuBurger() {
        headerBurger.addEventListener('click', e => {
            headerBurger.classList.toggle('active')
            headerNavWrapper.classList.toggle('active')
            headerNav.classList.toggle('active')
            body.classList.toggle('lock')

            activeItem = headerNavWrapper.querySelector('.active-item')
                if (activeItem) {
                    activeItem.classList.remove('active-item')
                }
        })
    }

    function underlineMenuItem() {
        const subItems = headerNavWrapper.querySelectorAll('.header-nav__subitems')
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
            const headerBackdrop = item.closest('.header-nav__items').previousElementSibling
            item.addEventListener('mouseover', () => {
                headerBackdrop.classList.add('display')
                bodyLock()
            })
            item.addEventListener('mouseout', () =>  {
                headerBackdrop.classList.remove('display')
                bodyUnLock()
            })
        })
    }

    function setActiveItem() {
        items.forEach(item => {
            item.addEventListener('click', () => {
                activeItem = headerNavWrapper.querySelector('.active-item')
                if (activeItem) {
                    activeItem.classList.remove('active-item')
                }
                item.classList.add('active-item')
            })
        })
    }

    function bodyLock() {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index]
                el.style.paddingRight = lockPaddingValue
            }
        }
        body.style.paddingRight = lockPaddingValue
        body.classList.add('lock')
    }

    function bodyUnLock() {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index]
                el.style.paddingRight = '0px'
            }
        }
        body.style.paddingRight = '0px'
        body.classList.remove('lock')
    }

    setMenuBurger()
    underlineMenuItem()
    lockPageScroll()
    setActiveItem()
}

export default headerNav