const $labelMenu = document.querySelector('.label-menu')
const $burgerMenu = document.querySelector('.burger-menu')
const $overlay = document.querySelector('.overlay')
const $labelCart = document.querySelector('.label-cart')
const $cart = document.querySelector('.cart')
const $closeCart = document.querySelector('.close-cart')



const closeCart = (e) => {

    if(e.target.classList.contains('close-cart')){
        console.log(e.target)
        $cart.classList.remove('displayBlock')
        $overlay.classList.remove('displayBlock')

    }

}


const scrollOverlayOut = () => {
    console.log('funciona')

    if($cart.classList.contains('displayBlock')){
        $overlay.classList.remove('displayBlock')
        $cart.classList.remove('displayBlock')

    }

    if ($overlay.classList.contains('displayBlock')) {
        $burgerMenu.classList.remove('displayBlock')
        $overlay.classList.remove('displayBlock')
    }


}

const closeMenu = (e) => {

    if (e.target.classList.contains('displayBlock')) {
        $burgerMenu.classList.remove('displayBlock')
        $overlay.classList.remove('displayBlock')
    }

    if(e.target.classList.contains('overlay')){
        $burgerMenu.classList.remove('menu-active')
        $overlay.classList.remove('displayBlock')
        $cart.classList.remove('displayBlock')
    }

}





init = () => {
    
    $labelMenu.addEventListener('click', function() {
        $burgerMenu.classList.add('displayBlock')
        $overlay.classList.add('displayBlock')
    })
    $burgerMenu.addEventListener('click', closeMenu)
    window.addEventListener('click', closeMenu)
    window.addEventListener('scroll', scrollOverlayOut)
    $labelCart.addEventListener('click', function() {
        $cart.classList.add('displayBlock')
        $overlay.classList.add('displayBlock')
    })
    $cart.addEventListener('click', closeCart)


}

init()