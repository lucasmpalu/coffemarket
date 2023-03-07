const $labelMenu = document.querySelector('.label-menu')
const $burgerMenu = document.querySelector('.burger-menu')
const $overlay = document.querySelector('.overlay')

const scrollOverlayOut = () => {
    if ($overlay.classList.contains = 'displayBlock') {
        $burgerMenu.classList.remove('menu-active')
        $overlay.classList.remove('displayBlock')
    }
}

const clickOverlayOut = (e) => {
    if ($overlay.classList.contains = 'displayBlock') {
        $burgerMenu.classList.remove('menu-active')
        $overlay.classList.remove('displayBlock')
    }
}

init = () => {
    
    $labelMenu.addEventListener('click',function() {
        $burgerMenu.classList.toggle('menu-active')
        $overlay.classList.toggle('displayBlock')
    })
    $burgerMenu.addEventListener('click', clickOverlayOut)
    window.addEventListener('scroll', scrollOverlayOut)
}

init()