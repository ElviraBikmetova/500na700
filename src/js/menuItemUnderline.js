
function menuItemUnderline() {
    const subItems = document.querySelectorAll('.header-nav__subitems')
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

export default menuItemUnderline