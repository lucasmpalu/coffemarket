const $labelMenu = document.querySelector('.label-menu')
const $burgerMenu = document.querySelector('.burger-menu')
const $overlay = document.querySelector('.overlay')
const $labelCart = document.querySelector('.label-cart')
const $cart = document.querySelector('.cart')
const $closeCart = document.querySelector('.close-cart')
const $productsContainer = document.querySelector('.cart-container')
const $btnClear = document.querySelector('.btn-delete')
const $btnBuy = document.querySelector('.btn-buy')
const $totalCart = document.querySelector('.total')

let contentCart = JSON.parse(localStorage.getItem('products')) || []//ACÁ VOY A TRAER TODA MI AGENDA

let saveData = (item) => {
    contentCart = [...contentCart, {...item, quantity: 1}]

    saveToLocalStorage('products', contentCart)
}

const saveToLocalStorage = (key, array) => {

    localStorage.setItem(key, JSON.stringify(array))

 } 

const closeCart = (e) => {

    if(e.target.classList.contains('close-cart')){
        console.log(e.target)
        $cart.classList.remove('displayBlock')
        $overlay.classList.remove('displayBlock')

    }

}


const scrollOverlayOut = () => {

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


const renderCartProducts = (product) => {
    console.log(product[0])
    console.log(product)

    let {name, category, subcategory, marca, id, price, gramos, img } = product[0]
    let {quantity} = product
   

    return `
    <div class="cart-item">
        <img src=${img} alt="Nft del carrito"/>
        <div class="item-info">
            <h3 class="item-title">${name}</h3>
            <p class="item-bid">Precio:</p>
            <span class="item-price">$${price}</span>
        </div>
        <div class="item-handler">
            <span class="quantity-handler down" data-id=${id}>-</span>
            <span class="item-quantity">${quantity}</span>
            <span class="quantity-handler up" data-id=${id}>+</span>
        </div>
    </div>
    `
}



const renderCart = (arr) => {

    $productsContainer.innerHTML += arr.map(item => renderCartProducts(item)).join('')

}



const loadCart = () => {

    if(contentCart.length === 0){
        $productsContainer.innerText = 'Su carrito está vacío.'
        $btnClear.classList.add('disabledBtn')
        $btnBuy.classList.add('disabledBtn')
        return
    }

    $btnClear.classList.remove('disabledBtn')
    $btnBuy.classList.remove('disabledBtn')
    renderCart(contentCart)
    

}


const clearCart = () => {

    if(confirm('Desea vaciar el carrito?')){
        contentCart = []
        loadCart()
    }
}


const totalCart = () => {
    
    
    let x = contentCart.reduce((acc, curr) => acc + curr[0].price, 0)

    $totalCart.innerText = `$ ${x}`

}




const init = () => {
    
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
    document.addEventListener('DOMContentLoaded', loadCart)
    document.addEventListener('DOMContentLoaded', totalCart)
    $btnClear.addEventListener('click', clearCart)
    
}

init()