const $labelMenu = document.querySelector('.label-menu')
const $burgerMenu = document.querySelector('.burger-menu')


init = () => {
    
    $labelMenu.addEventListener('click',function() {
        $burgerMenu.classList.toggle('menu-active')
    })

}

init()