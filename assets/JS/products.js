const $categoryAside = document.querySelectorAll('.category-aside')
const $asideProducts = document.querySelector('.aside-products')
const $arrowRightAside = document.querySelector('.right')
const $cardsContainer = document.querySelector('.cards-container')
const $itemSubcategory = document.querySelector('.li-subcategory')
const $listAside = document.querySelectorAll('list-aside')
const $containerButtonPages = document.querySelector('.container-buttons__pag')
const $nextBtn = document.querySelector('.nextBtn')
const $prevBtn = document.querySelector('.prevBtn')
const $currentPage = document.querySelector('.current-page')
const $seeProducts = document.querySelector('.div-tittle-aside')
const $containerCategorys = document.querySelector('.container-categorys')
const $mainProducts = document.querySelector('.main-products')
const $tittleDisabled = $mainProducts.firstElementChild
const $overlayBackAside = document.querySelector('.overlay-aside')
var mediaqueryList = window.matchMedia("(max-width: 600px)");
const $closeCart = document.querySelector('.close-cart')
const $btnAdd = document.querySelector('.add-cart')



let currentCategory = null


let arrayAllProducts = [
       
    {   name: 'Café Martinez Brasil',
        category: 'Cafe',
        subcategory: 'Molido',
        marca: 'Martinez',
        id: 1,
        price: 1500,
        gramos: 500,
        img: './assets/JS/img/martinez/brasil.webp'},

    {   name: 'Café Martinez Frutado',
        category: 'Cafe',
        subcategory: 'Molido',
        marca: 'Martinez',
        id: 2,
        price: 1500,
        gramos: 330,
        img: './assets/JS/img/martinez/martinez-frutado.webp'},
        
    {   name: 'Cafe Martinez Colombia',
        category: 'Cafe',
        subcategory: 'Molido',
        marca: 'Martinez',
        id: 3,
        price: 1500,
        gramos: 250,
        img: './assets/JS/img/martinez/martinez-colombia-suave.webp'},

    {   name: 'Cafe Martinez Italiano',
        category: 'Cafe',
        subcategory: 'Molido',
        marca: 'Martinez',
        id: 4,
        price: 1500,
        gramos: 500,
        img: './assets/JS/img/martinez/italiano.webp'},

    {   name: 'Cafe Martinez Selecto',
        category: 'Cafe',
        subcategory: 'Molido',
        marca: 'Martinez',
        id: 5,
        price: 1500,
        gramos: 250,
        img: './assets/JS/img/martinez/selecto.webp'},

    {   name: 'Cafe Martinez Suave',
        category: 'Cafe',
        subcategory: 'Molido',
        marca: 'Martinez',
        id: 6,
        price: 1500,
        gramos: 250,
        img: './assets/JS/img/martinez/suave.webp'},
        // CAPSULAS
    {   name: 'Lungo - Café en capsulas',
        category: 'Cafe',
        subcategory: 'Capsulas',
        marca: 'Nespresso',
        id: 7,
        price: 1500,
        cantidad: 7,
        img: './assets/JS/img/capsulas/nescafe/lungo.webp'},
    
    {   name: 'Espresso - Café en capsulas',
        category: 'Cafe',
        subcategory: 'Capsulas',
        marca: 'Nespresso',
        id: 8,
        price: 1500,
        cantidad: 5,
        img: './assets/JS/img/capsulas/nescafe/espresso.webp'},

    {   name: 'Cafe au Lait - Café en capsulas',
        category: 'Cafe',
        subcategory: 'Capsulas',
        marca: 'Nespresso',
        id: 9,
        price: 1500,
        cantidad: 7,
        img: './assets/JS/img/capsulas/nescafe/ccl.webp'},

    {   name: 'Capuccino - Café en capsulas',
        category: 'Cafe',
        subcategory: 'Capsulas',
        marca: 'Nespresso',
        id: 10,
        price: 1500,
        cantidad: 8,
        img: './assets/JS/img/capsulas/nescafe/capuccino.webp'},

    {   name: 'Latte - Café en capsulas',
        category: 'Cafe',
        subcategory: 'Capsulas',
        marca: 'Nespresso',
        id: 11,
        price: 1500,
        cantidad: 8,
        img: './assets/JS/img/capsulas/nescafe/latte.avif'},

// SOLUBLE
    {   name: 'Café soluble Suave Dolca',
        category: 'Cafe',
        subcategory: 'Soluble',
        marca: 'Nescafé',
        id: 12,
        price: 1500,
        cantidad: 170,
        img: './assets/JS/img/soluble/dolca/suave170.jpg'},
    
    {   name: 'Café soluble Equilibrado Dolca',
        category: 'Cafe',
        subcategory: 'Soluble',
        marca: 'Nespresso',
        id: 11,
        price: 1500,
        cantidad: 8,
        img: './assets/JS/img/soluble/dolca/equilibrado170.webp'},

    {   name: 'Café soluble Descafeinado Dolca',
        category: 'Cafe',
        subcategory: 'Soluble',
        marca: 'Nespresso',
        id: 13,
        price: 1500,
        cantidad: 8,
        img: './assets/JS/img/soluble/dolca/descafeinado.webp'},

    {   name: 'Café soluble Tradicion Dolca',
        category: 'Cafe',
        subcategory: 'Soluble',
        marca: 'Nespresso',
        id: 14,
        price: 1500,
        cantidad: 8,
        img: './assets/JS/img/soluble/dolca/tradicion.webp'},

// GRANOS

    {   name: 'Café Puro Aroma La Virginia',
        category: 'Cafe',
        subcategory: 'Granos',
        marca: 'La Virginia',
        id: 16,
        price: 1500,
        cantidad: 250,
        img: './assets/JS/img/granos/lavirginia/puroaroma.jpg'},

    {   name: 'Café Cabrales Espresso',
        category: 'Cafe',
        subcategory: 'Granos',
        marca: 'Cabrales',
        id: 17,
        price: 1500,
        cantidad: 500,
        img: './assets/JS/img/granos/cabrales/Caf-Cabrales-En-Grano-500-Gr-1-10734.webp'},
    
    {   name: 'Café En Grano Bonafide',
        category: 'Cafe',
        subcategory: 'Granos',
        marca: 'Bonafide',
        id: 18,
        price: 500,
        cantidad: 8,
        img: './assets/JS/img/granos/bonafide/bonafide.jpg'},
    
    {   name: 'Café Natural Oquendo',
        category: 'Cafe',
        subcategory: 'Granos',
        marca: 'La Virginia',
        id: 19,
        price: 1000,
        cantidad: 1000,
        img: './assets/JS/img/granos/oquendo/oquendo.png'},

    {   name: 'Café Tostado 5 Hispanos',
        category: 'Cafe',
        subcategory: 'Granos',
        marca: '5 hispanos',
        id: 20,
        price: 500,
        cantidad: 500,
        img: './assets/JS/img/granos/5hispanos/tostado.png'},
    
    // CAFETERAS CAFETERAS

    {   name: 'Espresso Ultracomb 6108',
        category: 'Maquina',
        subcategory: 'Espresso',
        marca: 'Ultracomb',
        id: 21,
        price: 10000,
        cantidad: 1,
        img: './assets/JS/img/cafeteras/expresso/ultracomb.png'},

    {   name: 'Espresso Oster Em6603ss',
        category: 'Maquina',
        subcategory: 'Espresso',
        marca: 'Oster',
        id: 22,
        price: 10000,
        cantidad: 1,
        img: './assets/JS/img/cafeteras/expresso/oster.webp'},

        {   name: 'Espresso Peabody PE-ce5007ix',
        category: 'Maquina',
        subcategory: 'Espresso',
        marca: 'Peabody',
        id: 23,
        price: 10000,
        cantidad: 1,
        img: './assets/JS/img/cafeteras/expresso/peabody.jpg'},

    {   name: 'Espresso Smartlife SI-ec85012',
        category: 'Maquina',
        subcategory: 'Smartlife',
        marca: 'Peabody',
        id: 24,
        price: 10000,
        cantidad: 1,
        img: './assets/JS/img/cafeteras/expresso/smartlife.jpg'},

    //CAFETERA CAPSULA

    {   name: 'Cafetera Capsulas Moulinex',
        category: 'Maquina',
        subcategory: 'Cafetera-capsula',
        marca: 'Moulinex',
        id: 25,
        price: 10000,
        cantidad: 1,
        img: './assets/JS/img/cafeteras/capsula/moulinex/moulinex.jpg'},

        {   name: 'Cafetera Capsulas Moulinex',
        category: 'Maquina',
        subcategory: 'Cafetera-capsula',
        marca: 'Moulinex',
        id: 48,
        price: 10000,
        cantidad: 1,
        img: './assets/JS/img/cafeteras/capsula/moulinex/moulinex2.webp'},
        
        {   name: 'Cafetera Capsulas Nespresso',
        category: 'Maquina',
        subcategory: 'Cafetera-capsula',
        marca: 'Nespresso',
        id: 26,
        price: 10000,
        cantidad: 1,
        img: './assets/JS/img/cafeteras/capsula/nespresso/nespresso.jpg'},

        // CAFETERAS DE GOTEO
      
        {   name: 'Cafetera de Goteo Philips',
        category: 'Maquina',
        subcategory: 'Goteo',
        marca: 'Philips',
        id: 27,
        price: 10000,
        cantidad: 1,
        img: './assets/JS/img/cafeteras/goteo/philips/philips.jpg'},

        {   name: 'Cafetera de Goteo Philips',
        category: 'Maquina',
        subcategory: 'Goteo',
        marca: 'Philips',
        id: 47,
        price: 10000,
        cantidad: 1,
        img: './assets/JS/img/cafeteras/goteo/philips/philips2.jpg'},
       
        {   name: 'Cafetera de Goteo Peabody',
        category: 'Maquina',
        subcategory: 'Goteo',
        marca: 'Peabody',
        id: 28,
        price: 10000,
        cantidad: 1,
        img: './assets/JS/img/cafeteras/goteo/peabody/peabody.webp'},

        {   name: 'Cafetera de Goteo Bestron',
        category: 'Maquina',
        subcategory: 'Goteo',
        marca: 'Bestron',
        id: 29,
        price: 10000,
        cantidad: 1,
        img: './assets/JS/img/cafeteras/goteo/bestron/bestron.webp'},

        //MANUALES FRANCESA
        {   name: 'Cafetera Francesa Negra',
        category: 'Manual',
        subcategory: 'Francesa',
        marca: 'Francesa Negra',
        id: 30,
        price: 5000,
        cantidad: 1,
        img: 'assets/JS/img/cafeteras/francesa/prensafrancesa.jpg'},
       
        {   name: 'Cafetera Francesa Roja',
        category: 'Manual',
        subcategory: 'Francesa',
        marca: 'Francesa Roja',
        id: 31,
        price: 5000,
        cantidad: 1,
        img: 'assets/JS/img/cafeteras/francesa/prensafrancesa2.jpg'},
     
        {   name: 'Cafetera Francesa Bronce',
        category: 'Manual',
        subcategory: 'Francesa',
        marca: 'Francesa Bronce',
        id: 32,
        price: 5000,
        cantidad: 1,
        img: 'assets/JS/img/cafeteras/francesa/prensafrancesa3.jpg'},
     
        //MANUALES ITALIANA

        {   name: 'Cafetera Italiana de Aluminio',
        category: 'Manual',
        subcategory: 'Italiana',
        marca: 'Italiana Aluminio',
        id: 33,
        price: 5000,
        cantidad: 1,
        img: 'assets/JS/img/cafeteras/italiana/italianaaluminio.jpg'},
       
        {   name: 'Cafetera Italiana Roja',
        category: 'Manual',
        subcategory: 'Italiana',
        marca: 'Italiana Roja',
        id: 34,
        price: 5000,
        cantidad: 1,
        img: 'assets/JS/img/cafeteras/italiana/italianaroja.jpg'},

        {   name: 'Cafetera Italiana Celeste',
        category: 'Manual',
        subcategory: 'Italiana',
        marca: 'Italiana Celeste',
        id: 35,
        price: 5000,
        cantidad: 1,
        img: 'assets/JS/img/cafeteras/italiana/italianaroja.jpg'},

        {   name: 'Cafetera Italiana Negra',
        category: 'Manual',
        subcategory: 'Italiana',
        marca: 'Italiana Negra',
        id: 36,
        price: 5000,
        cantidad: 1,
        img: 'assets/JS/img/cafeteras/italiana/italianaroja.jpg'},

        {   name: 'Cafetera Italiana Verde',
        category: 'Manual',
        subcategory: 'Italiana',
        marca: 'Italiana Verde',
        id: 37,
        price: 5000,
        cantidad: 1,
        img: 'assets/JS/img/cafeteras/italiana/italianaverde.jpg'},

     //ESPRESSO TAZA

     {   name: 'Taza Porcelana Espresso Blanca',
     category: 'Taza',
     subcategory: 'Espresso Taza',
     marca: 'Porcelana Blanca',
     id: 38,
     price: 3000,
     cantidad: 1,
     img: 'assets/JS/img/tazas/espresso/espressoporcelana.jpg'},
     
     {   name: 'Taza Porcelana Espresso Vidrio',
     category: 'Taza',
     subcategory: 'Espresso Taza',
     marca: 'Vidrio',
     id: 39,
     price: 3000,
     cantidad: 1,
     img: 'assets/JS/img/tazas/espresso/espressovidrio.webp'},

    //LARGO TAZA

     {   name: 'Taza Café Largo Porcelana',
     category: 'Taza',
     subcategory: 'Largo',
     marca: 'Porcelana Blanca',
     id: 40,
     price: 3000,
     cantidad: 1,
     img: 'assets/JS/img/tazas/largo/largoporcelana.webp'},

     {   name: 'Taza Café Largo Vidrio',
     category: 'Taza',
     subcategory: 'Largo',
     marca: 'Vidrio',
     id: 41,
     price: 3000,
     cantidad: 1,
     img: 'assets/JS/img/tazas/largo/largovidrio.jpg'},

         //LATTE TAZA

     {   name: 'Taza Café Latte Porcelana',
     category: 'Taza',
     subcategory: 'Latte',
     marca: 'Porcelana Blanca',
     id: 42,
     price: 3000,
     cantidad: 1,
     img: 'assets/JS/img/tazas/latte/latteporcelana.jpg'},

     {   name: 'Taza Café Latte Porcelana',
     category: 'Taza',
     subcategory: 'Latte',
     marca: 'Porcelana Negra',
     id: 43,
     price: 3000,
     cantidad: 1,
     img: 'assets/JS/img/tazas/latte/latteporcelananegra.jpg'},

     //CAPUCCINO TAZA

     {   name: 'Taza Capuccino Vidrio',
     category: 'Taza',
     subcategory: 'Capuccino',
     marca: 'Vidrio',
     id: 44,
     price: 3000,
     cantidad: 1,
     img: 'assets/JS/img/tazas/capuccino/capuccinovidrio.webp'},

     {   name: 'Taza Capuccino Largo Vidrio',
     category: 'Taza',
     subcategory: 'Capuccino',
     marca: 'Vidrio Largo',
     id: 45,
     price: 3000,
     cantidad: 1,
     img: 'assets/JS/img/tazas/capuccino/capuccinolargo.jpg'},

     {   name: 'Taza Capuccino Vidrio',
     category: 'Taza',
     subcategory: 'Capuccino',
     marca: 'Vidrio Largo',
     id: 46,
     price: 3000,
     cantidad: 1,
     img: 'assets/JS/img/tazas/capuccino/capuccinolargo2.jpg'},

     //48



]

const renderProduct = (product) => {
    let {name, category, subcategory, id, price, img} = product

    return `
    <div class="product-card">
    <div class="container-img__product">
        <img src="${img}" alt="">
    </div>
    <div class="container-info__product">
        <h3 class="name-product">${name}</h3>
        <p class="price-product">$${price}</p>
        <button class="add-cart" data-id="${id}">
        Añadir al carrito
        <img src="./assets/JS/img/icons/cart.png" class="button-add__icon" alt="">
        </button>
    </div>
   </div>
    `

}

let contentCart = JSON.parse(localStorage.getItem('products')) || []//ACÁ VOY A TRAER TODA MI AGENDA

let saveData = (item) => {
    contentCart = [...contentCart, item]

    saveToLocalStorage('products', contentCart)
}

const saveToLocalStorage = (key, array) => {

    localStorage.setItem(key, JSON.stringify(array))


 } 



const addCart = (e) => {
    if(e.target.classList.contains('add-cart')){
       let x = e.target.dataset.id
       let newProduct = arrayAllProducts.filter(item => item.id == x)
       saveData(newProduct) 

    }
}

const dividedArray = (arr, pages) => {

    let chunk = []

    for(let i = 0; i < arr.length; i += pages){
        chunk.push(arr.slice(i, i + pages))
    }

    return chunk

}

const clearProducts = () => {
    $cardsContainer.innerHTML = ''
}

const renderSubcategory = (subcategory) => { 
       $tittleDisabled.classList.add('displayBlock')
       $containerButtonPages.style.visibility = 'visible'
       isBtnDisabled()
       if(mediaqueryList.matches && $overlay.classList.contains('displayBlock')){
        $overlay.classList.remove('displayBlock')
        $containerCategorys.classList.toggle('displayNone')
    }


        let renderArray = arrayAllProducts.filter(item => {
        return item.subcategory == subcategory})

        let newArray = dividedArray(renderArray, 6)

          

        pagination.total = newArray.length
        currentCategory = newArray


        $cardsContainer.innerHTML += newArray[0].map(product => { return renderProduct(product)}).join('')
        isBtnDisabled()

        $currentPage.innerText = '1'

}

const renderCategory = (category) => {
    $tittleDisabled.classList.add('displayBlock')    
    $containerButtonPages.style.visibility = 'visible'
    isBtnDisabled()
    if(mediaqueryList.matches && $overlay.classList.contains('displayBlock')){
        $overlay.classList.remove('displayBlock')
        $containerCategorys.classList.toggle('displayNone')

    }


    if(category == 'Todos') {

        let newArray = dividedArray(arrayAllProducts, 6)
        pagination.total = newArray.length
        currentCategory = newArray

        $cardsContainer.innerHTML += newArray[0].map(product => {
             return renderProduct(product)}).join('')
        $currentPage.innerText = '1'
        lookContainerCards()
        isBtnDisabled()


         return    
    }

    if(category){
        let renderArray = arrayAllProducts.filter(item => {
        return item.category == category })

        let newArray = dividedArray(renderArray, 6)
        pagination.total = newArray.length
        currentCategory = newArray

        lookContainerCards()
        isBtnDisabled()


    
        $cardsContainer.innerHTML += newArray[0].map(product => {
            return renderProduct(product)}).join('')
            $currentPage.innerText = '1'

    }
}

const renderGeneral = (e) => {
    let selectedSubcategory = e.target.dataset.subcategory
    let selectedCategory = e.target.dataset.category
    isBtnDisabled()

    if(selectedCategory != undefined){

        switch (selectedCategory) {
            case 'Cafe':
                clearProducts()
                renderCategory(selectedCategory)
                break;
    
            case 'Maquina':
                clearProducts()
                renderCategory(selectedCategory)
                break;
    
            case 'Manual':
                clearProducts()
                renderCategory(selectedCategory)
                break;
    
            case 'Taza':
                clearProducts()
                renderCategory(selectedCategory)
                break;
            //FIJARSE PORQUE TUVE QUE HACER UNA ADDEVENLISTENER APARTE PARA EL TODOS
            // case 'Todos':
            //     clearProducts()
            //     renderCategory(selectedCategory)

            default:
                clearProducts()
                $cardsContainer.innerHTML = `No encontramos ningun resultado para tu busqueda 🙁`
                break;
        }

        return
    }

    if (selectedSubcategory != undefined) {
         
        switch (selectedSubcategory) {
            case 'Molido':
                clearProducts()
                renderSubcategory(selectedSubcategory)
                
                break;
            case 'Capsulas':
                clearProducts()
                renderSubcategory(selectedSubcategory)
                
                break;

            case 'Soluble':
                clearProducts()
                renderSubcategory(selectedSubcategory)
                break;

            case 'Granos':
                clearProducts()
                renderSubcategory(selectedSubcategory)
                break;
            
            case 'Espresso':
                clearProducts()
                renderSubcategory(selectedSubcategory)
                break;

            case 'Cafetera-capsula':
                clearProducts()
                renderSubcategory(selectedSubcategory)
                break;

            case 'Goteo':
                clearProducts()
                renderSubcategory(selectedSubcategory)
                break;

            case 'Italiana':
                clearProducts()
                renderSubcategory(selectedSubcategory)
                break;

            case 'Francesa':
                clearProducts()
                renderSubcategory(selectedSubcategory)
                break;

            case 'Espresso Taza':
                clearProducts()
                renderSubcategory(selectedSubcategory)
                break;

            case 'Largo':
                clearProducts()
                renderSubcategory(selectedSubcategory)
                break;

            case 'Latte':
                clearProducts()
                renderSubcategory(selectedSubcategory)
                break;

            case 'Capuccino':
                clearProducts()
                renderSubcategory(selectedSubcategory)
                break;

            default:
                
                break;
        } 
    }
 
}


let pagination = {
    prev: null,
    current: 0,
    next: 1,
    total: null,
}

const renderPagination = (currentCategory, index) => {
    
    let render = currentCategory[index]

    $cardsContainer.innerHTML = ''
    $cardsContainer.innerHTML += render.map(item => {
        return renderProduct(item)}).join('')


}

const lookContainerCards = () => {

    if(mediaqueryList.matches){
        $mainProducts.classList.add('displayBlock')
        $containerCategorys.classList.remove('displayBlock')
        $containerCategorys.classList.add('displayNone')
        return
    }

    $mainProducts.classList.add('displayBlock')

}


const seeCategorys = (e) => {
    const $iconForRotate = $seeProducts.lastElementChild

    $overlayBackAside.classList.toggle('displayBlock')

    $containerCategorys.classList.toggle('displayBlock')
    $iconForRotate.classList.toggle('rotateIconRight')
    


}

const disabledButton = (btn) => {
    btn.classList.add('disable')
}

const nextPage = (e) => {
    e.stopImmediatePropagation()
    isBtnDisabled()
    if( pagination.next == pagination.total) { 
        return }

    renderPagination(currentCategory, pagination.next)
    pagination.prev = pagination.current
    pagination.current += 1
    pagination.next += 1
    isBtnDisabled()
    $currentPage.innerText = pagination.next

    

}

const prevPage = (e) => {
    e.stopImmediatePropagation()
    
    if(pagination.prev == null){ return }

    console.log(pagination)

    $currentPage.innerText = pagination.current

    renderPagination(currentCategory, pagination.prev)
    isBtnDisabled()
    pagination.current -= 1
    pagination.prev = pagination.prev == 0 ? null : pagination.prev - 1
    pagination.next -= 1
    isBtnDisabled()
}

const visibilityNextElement = (e) => {

    if(e.target.classList.contains('category-aside')){
        let nextElement = e.target.nextElementSibling
        let icon = e.target.lastElementChild

        icon.classList.toggle('toggleIcon')
        setTimeout(function(){
            nextElement.classList.toggle('toggleBlock')
        }, 200);
        return
    }

    if(e.target.classList.contains('aside-tittle__category')){
        let parent = e.target.parentNode
        let nextElement = parent.nextElementSibling
        let icon = e.target.nextElementSibling

        icon.classList.toggle('toggleIcon')
        setTimeout(function(){
            nextElement.classList.toggle('toggleBlock')
        }, 150);
        return

    }

    if(e.target.classList.contains('right')){
        let parent = e.target.parentNode
        let nextElement = parent.nextElementSibling

        e.target.classList.toggle('toggleIcon')

        setTimeout(function(){
            nextElement.classList.toggle('toggleBlock')
        }, 150);
        return
    

    }
}

const renderAll = (e) => {
    let selectedCategory = e.target.dataset.category

    if(selectedCategory == 'Todos'){
        clearProducts()
        currentCategory = selectedCategory
        renderCategory(selectedCategory)
    }
}

const isBtnDisabled = () => {

    console.log(pagination)
    if(pagination.prev == null){
        $prevBtn.classList.add('disabled')
    } else {
        $prevBtn.classList.remove('disabled')
    }

    if(pagination.total == null || pagination.next == pagination.total) {
        $nextBtn.classList.add('disabled')
    } else {
        $nextBtn.classList.remove('disabled')
    }

}

const overlayAsideOut = (e) => {
    $overlayBackAside.classList.remove('displayBlock')
    $containerCategorys.classList.remove('displayBlock')
}



const init = () => {
    isBtnDisabled()
    $asideProducts.addEventListener('click', visibilityNextElement)
    $asideProducts.addEventListener('click', renderGeneral)
    $asideProducts.addEventListener('click', renderAll)
    $prevBtn.addEventListener('click', prevPage)
    $nextBtn.addEventListener('click', nextPage)
    $seeProducts.addEventListener('click', seeCategorys)
    // $labelMenu.addEventListener('click',function() {
    //     $burgerMenu.classList.toggle('menu-active')
    // }
    $cart.addEventListener('click', closeCart)
    $cardsContainer.addEventListener('click', addCart)
    $overlayBackAside.addEventListener('click', overlayAsideOut)

}

init()