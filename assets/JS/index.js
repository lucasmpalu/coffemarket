const $labelMenu = document.querySelector('.label-menu')
const $burgerMenu = document.querySelector('.burger-menu')
const $overlay = document.querySelector('.overlay')

const scrollOverlayOut = () => {
    if ($overlay.classList.contains('displayBlock')) {
        $burgerMenu.classList.remove('menu-active')
        $overlay.classList.remove('displayBlock')
    }
}

const clickOverlayOut = (e) => {

    if (e.target.classList.contains('close-menu')) {
        $burgerMenu.classList.remove('menu-active')
        $overlay.classList.remove('displayBlock')
    }

    if(e.target.classList.contains('overlay')){
        $burgerMenu.classList.remove('menu-active')
        $overlay.classList.remove('displayBlock')
    }

}

init = () => {
    
    $labelMenu.addEventListener('click',function() {
        $burgerMenu.classList.add('menu-active')
        $overlay.classList.add('displayBlock')
    })
    $burgerMenu.addEventListener('click', clickOverlayOut)
    window.addEventListener('click', clickOverlayOut)
    window.addEventListener('scroll', scrollOverlayOut)
}

init()