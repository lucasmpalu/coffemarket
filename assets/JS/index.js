const $labelMenu = document.querySelector('.label-menu')
const $burgerMenu = document.querySelector('.burger-menu')
const $overlay = document.querySelector('.overlay')
const $labelCart = document.querySelector('.label-cart')
const $cart = document.querySelector('.cart')





const scrollOverlayOut = () => {
    if ($overlay.classList.contains('displayBlock')) {
        $burgerMenu.classList.remove('menu-active')
        $overlay.classList.remove('displayBlock')
    }

    if($cart.classList.contains('displayBlock')){
        $cart.classList.remove('displayBlock')
        $overlay.classList.remove('displayBlock')
    }
}

const closeMenu = (e) => {

    if (e.target.classList.contains('close-menu')) {
        $burgerMenu.classList.remove('menu-active')
        $overlay.classList.remove('displayBlock')
    }

    if(e.target.classList.contains('overlay')){
        $burgerMenu.classList.remove('menu-active')
        $overlay.classList.remove('displayBlock')
        $cart.classList.remove('displayBlock')

    }

}

const closeCart = (e) => {

    if(e.target.classList.contains('close-cart')){
        $cart.classList.remove('displayBlock')
        $overlay.classList.remove('displayBlock')

    }

}



init = () => {
    
    $labelMenu.addEventListener('click', function() {
        $burgerMenu.classList.add('menu-active')
        $overlay.classList.add('displayBlock')
    })
    $burgerMenu.addEventListener('click', closeMenu)
    window.addEventListener('click', closeMenu)
    window.addEventListener('scroll', scrollOverlayOut)
    $labelCart.addEventListener('click', function() {
        $cart.classList.add('displayBlock')
        $overlay.classList.add('displayBlock')
    } )

}

init()