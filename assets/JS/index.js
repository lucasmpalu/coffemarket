const $labelMenu = document.querySelector('.label-menu')
const $burgerMenu = document.querySelector('.burger-menu')
const $overlay = document.querySelector('.overlay')
const $labelCart = document.querySelector('.label-cart')
const $cart = document.querySelector('.cart')
const $closeCart = document.querySelector('.close-cart')
const $closeMenu = document.querySelector('.close-cart')
const $productsContainer = document.querySelector('.cart-container')
const $btnClear = document.querySelector('.btn-delete')
const $btnBuy = document.querySelector('.btn-buy')
const $totalCart = document.querySelector('.total')
const $formSearch = document.querySelector('.form-search')
const $inputSearch = document.querySelector('.input-search')
const $btnSearch = document.querySelector('.btn-search')
const $modalAdd = document.querySelector('.add-modal')
const $btnAdd = document.querySelector('.add-cart')
const $numberCart = document.querySelector('.label-cart__numbers')



let contentCart = JSON.parse(localStorage.getItem('products')) || []//ACÁ VOY A TRAER TODA MI AGENDA

let saveData = (item) => {
    contentCart = [...contentCart, {...item, quantity: 1}]

    saveToLocalStorage(contentCart)
}

const saveToLocalStorage = (array) => {

    localStorage.setItem('products', JSON.stringify(array))

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

    if (e.target.classList.contains('close-menu')) {
        $burgerMenu.classList.remove('displayBlock')
        $overlay.classList.remove('displayBlock')
    }

    if(e.target.classList.contains('overlay')){
        $burgerMenu.classList.remove('displayBlock')
        $overlay.classList.remove('displayBlock')
        $cart.classList.remove('displayBlock')
    }

}


const renderCartProducts = (product) => {

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
    $productsContainer.innerHTML = `` //SI NO HAGO ESTO, EL CARRITO VA A SUMAR A LOS QUE ESTABAN ANTES, ES DECIR, SI UNA CAFETERA YA LA TENGO, VA A APARECER CAFETERA - CANTIDAD 1 Y DESPUÉS DEVUELTA CAFETERA - CANTIDAD 2, VOY A TENER DOS VECES LA MISMA CARD

    $productsContainer.innerHTML += arr.map(item => renderCartProducts(item)).join('')

}

const loadCart = () => {

    if(contentCart.length == 0){
        $productsContainer.innerText = 'Su carrito está vacío.'
        $btnClear.classList.add('disabledBtnCart')
        $btnBuy.classList.add('disabledBtnCart')
        $numberCart.innerText = contentCart.length
        return
    }

    $btnClear.classList.remove('disabledBtnCart')
    $btnBuy.classList.remove('disabledBtnCart')
    renderCart(contentCart)
    $numberCart.innerText = contentCart.length

}

const clearCart = () => {

    if (contentCart.length) {                       //SOLO SI EL CARRITO TIENE COSAS ADENTRO, VOY A EJECUTAR EL IF CON EL CONFIRM DE ABAJO
        if(confirm('Desea vaciar el carrito?')){
            contentCart = []
            saveToLocalStorage(contentCart)
            loadCart()
            totalCart()
            $numberCart.innerText = contentCart.length
        }
    }
  
}




const totalCart = () => {
    
    let x = contentCart.reduce((acc, curr) => acc + curr[0].price * curr.quantity, 0)

    $totalCart.innerText = `$ ${x}`

}

const filterInput = (value) => {

    return arrayAllProducts.filter(item => {
    return item.name.toLowerCase().includes(value.toLowerCase().trim())
    })   
}

const searchProducts = (e) => {
    e.preventDefault()

    let valueInput = $inputSearch.value
    let newArray = dividedArray( filterInput(valueInput), 6 ) //DIVIDO EL ARRAY, DE 6 EN 6, PARA LA PAGINACIÓN
    
    if(filterInput(valueInput) > 0){
    clearProducts()  //LIMPIO EL CONTENEDOR DE LAS CARDS, SI HAY OTROS PRODUCTOS RENDERIZADOS
    $containerButtonPages.style.visibility = 'visible' //HAGO APARECER LOS BOTONES QUE ESTÁN HIDDEN (EL CONTANEDOR DE LOS BTN)
    $tittleDisabled.classList.add('displayBlock') //HAGO APARECER EL TITULO DE OBJETOS ENCONTRADOS 
    pagination.total = newArray.length
    currentCategory = newArray
    isBtnDisabled() //ESTA FUNCIÓN LA PONGO ACÁ, PORQUE ARRIBA DE ESTO ACTUALICÉ LOS CODIGOS DE LA PAGINACIÓN
    $currentPage.innerText = '1'
    $cardsContainer.innerHTML += newArray[0].map( product => { return renderProduct(product)}).join('')//muestro
    $formSearch.reset()
    // location.href = 'productos.html'
    }else {
        $tittleDisabled.classList.add('displayBlock')
        $containerButtonPages.style.visibility = 'hidden'
        $formSearch.reset()
        $cardsContainer.innerText = 'No encontramos ningún resultado para tu busqueda🙁'
    }

    }


    const buyConfirm = (e) => {
        if(contentCart.length){
            if(window.confirm('Desea confirmar la compra?')){
                contentCart = []
                saveToLocalStorage(contentCart)
                loadCart()
                loadCart()
                $modalAdd.classList.add('active-modal')
                $modalAdd.innerHTML = '<p>Muchas gracias por su compra</p>'
                setTimeout(() => {
                    $modalAdd.classList.remove('active-modal')
                    $modalAdd.innerHTML = ''
                }, 2000);
            }

        }
    }

    const moreLessProducts = (e) => {

        if(e.target.classList.contains('up')){
            let idProduct = e.target.dataset.id

            contentCart = contentCart.map(item => {
                return item[0].id == idProduct 
                ? {...item, quantity: Number(item.quantity) + 1} 
                : item })

            saveToLocalStorage(contentCart)
            loadCart()
            totalCart()
            return
    
        }
         
        if(e.target.classList.contains('down')){
            let idProduct = e.target.dataset.id
            let product = contentCart.filter(item => item[0].id == idProduct)
            
            if(product[0].quantity == 1){
                if(window.confirm('Desea eliminar el producto?')){
                    contentCart = contentCart.filter(item =>item[0].id != idProduct)
                    
                    saveToLocalStorage(contentCart)
                    loadCart()
                    totalCart()
                    $numberCart.innerText = contentCart.length
                    return
            }}

            contentCart = contentCart.map(item => {
                return item[0].id == idProduct 
                ? {...item, quantity: Number(item.quantity) - 1} 
                : item })

            saveToLocalStorage(contentCart)
            loadCart()
            totalCart()
            return
        }     
    }
    

const init = () => {

    loadCart()
    // isBtnDisabled()
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
    $formSearch.addEventListener('submit', searchProducts)
    $btnBuy.addEventListener('click', buyConfirm)
    $cart.addEventListener('click', moreLessProducts)


}

init()