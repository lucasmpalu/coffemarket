
const $big = document.querySelector('.carrousel-big')
const $points = document.querySelectorAll('.point')
var mediaqueryList = window.matchMedia("(max-width: 768px)");
var minwidthTablet = window.matchMedia("(min-width: 769px)");

const $btnAddCarrousel = document.querySelector('.add-cart')
const $carrousel = document.querySelector('.carrousel-big')
const $nextCarrousel =  document.querySelector('.next-carrousel')
const $prevCarrousel = document.querySelector('.prev-carrousel')
const $containerNextPrev = document.querySelector('.next-prev-carrousel')
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
        id: 13,
        price: 1500,
        cantidad: 8,
        img: './assets/JS/img/soluble/dolca/equilibrado170.webp'},

    {   name: 'Café soluble Descafeinado Dolca',
        category: 'Cafe',
        subcategory: 'Soluble',
        marca: 'Nespresso',
        id: 14,
        price: 1500,
        cantidad: 8,
        img: './assets/JS/img/soluble/dolca/descafeinado.webp'},

    {   name: 'Café soluble Tradicion Dolca',
        category: 'Cafe',
        subcategory: 'Soluble',
        marca: 'Nespresso',
        id: 15,
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
        id: 26,
        price: 10000,
        cantidad: 1,
        img: './assets/JS/img/cafeteras/capsula/moulinex/moulinex2.webp'},
        
        {   name: 'Cafetera Capsulas Nespresso',
        category: 'Maquina',
        subcategory: 'Cafetera-capsula',
        marca: 'Nespresso',
        id: 27,
        price: 10000,
        cantidad: 1,
        img: './assets/JS/img/cafeteras/capsula/nespresso/nespresso.jpg'},

        // CAFETERAS DE GOTEO
      
        {   name: 'Cafetera de Goteo Philips',
        category: 'Maquina',
        subcategory: 'Goteo',
        marca: 'Philips',
        id: 28,
        price: 10000,
        cantidad: 1,
        img: './assets/JS/img/cafeteras/goteo/philips/philips.jpg'},

        {   name: 'Cafetera de Goteo Philips',
        category: 'Maquina',
        subcategory: 'Goteo',
        marca: 'Philips',
        id: 29,
        price: 10000,
        cantidad: 1,
        img: './assets/JS/img/cafeteras/goteo/philips/philips2.jpg'},
       
        {   name: 'Cafetera de Goteo Peabody',
        category: 'Maquina',
        subcategory: 'Goteo',
        marca: 'Peabody',
        id: 30,
        price: 10000,
        cantidad: 1,
        img: './assets/JS/img/cafeteras/goteo/peabody/peabody.webp'},

        {   name: 'Cafetera de Goteo Bestron',
        category: 'Maquina',
        subcategory: 'Goteo',
        marca: 'Bestron',
        id: 31,
        price: 10000,
        cantidad: 1,
        img: './assets/JS/img/cafeteras/goteo/bestron/bestron.webp'},

        //MANUALES FRANCESA
        {   name: 'Cafetera Francesa Negra',
        category: 'Manual',
        subcategory: 'Francesa',
        marca: 'Francesa Negra',
        id: 32,
        price: 5000,
        cantidad: 1,
        img: 'assets/JS/img/cafeteras/francesa/prensafrancesa.jpg'},
       
        {   name: 'Cafetera Francesa Roja',
        category: 'Manual',
        subcategory: 'Francesa',
        marca: 'Francesa Roja',
        id: 33,
        price: 5000,
        cantidad: 1,
        img: 'assets/JS/img/cafeteras/francesa/prensafrancesa2.jpg'},
     
        {   name: 'Cafetera Francesa Bronce',
        category: 'Manual',
        subcategory: 'Francesa',
        marca: 'Francesa Bronce',
        id: 34,
        price: 5000,
        cantidad: 1,
        img: 'assets/JS/img/cafeteras/francesa/prensafrancesa3.jpg'},
     
        //MANUALES ITALIANA

        {   name: 'Cafetera Italiana de Aluminio',
        category: 'Manual',
        subcategory: 'Italiana',
        marca: 'Italiana Aluminio',
        id: 35,
        price: 5000,
        cantidad: 1,
        img: 'assets/JS/img/cafeteras/italiana/italianaaluminio.jpg'},
       
        {   name: 'Cafetera Italiana Roja',
        category: 'Manual',
        subcategory: 'Italiana',
        marca: 'Italiana Roja',
        id: 36,
        price: 5000,
        cantidad: 1,
        img: 'assets/JS/img/cafeteras/italiana/italianaroja.jpg'},

        {   name: 'Cafetera Italiana Celeste',
        category: 'Manual',
        subcategory: 'Italiana',
        marca: 'Italiana Celeste',
        id: 37,
        price: 5000,
        cantidad: 1,
        img: 'assets/JS/img/cafeteras/italiana/italianaroja.jpg'},

        {   name: 'Cafetera Italiana Negra',
        category: 'Manual',
        subcategory: 'Italiana',
        marca: 'Italiana Negra',
        id: 38,
        price: 5000,
        cantidad: 1,
        img: 'assets/JS/img/cafeteras/italiana/italianaroja.jpg'},

        {   name: 'Cafetera Italiana Verde',
        category: 'Manual',
        subcategory: 'Italiana',
        marca: 'Italiana Verde',
        id: 39,
        price: 5000,
        cantidad: 1,
        img: 'assets/JS/img/cafeteras/italiana/italianaverde.jpg'},

     //ESPRESSO TAZA

     {   name: 'Taza Porcelana Espresso Blanca',
     category: 'Taza',
     subcategory: 'Espresso Taza',
     marca: 'Porcelana Blanca',
     id: 40,
     price: 3000,
     cantidad: 1,
     img: 'assets/JS/img/tazas/espresso/espressoporcelana.jpg'},
     
     {   name: 'Taza Porcelana Espresso Vidrio',
     category: 'Taza',
     subcategory: 'Espresso Taza',
     marca: 'Vidrio',
     id: 41,
     price: 3000,
     cantidad: 1,
     img: 'assets/JS/img/tazas/espresso/espressovidrio.webp'},

    //LARGO TAZA

     {   name: 'Taza Café Largo Porcelana',
     category: 'Taza',
     subcategory: 'Largo',
     marca: 'Porcelana Blanca',
     id: 42,
     price: 3000,
     cantidad: 1,
     img: 'assets/JS/img/tazas/largo/largoporcelana.webp'},

     {   name: 'Taza Café Largo Vidrio',
     category: 'Taza',
     subcategory: 'Largo',
     marca: 'Vidrio',
     id: 43,
     price: 3000,
     cantidad: 1,
     img: 'assets/JS/img/tazas/largo/largovidrio.jpg'},

         //LATTE TAZA

     {   name: 'Taza Café Latte Porcelana',
     category: 'Taza',
     subcategory: 'Latte',
     marca: 'Porcelana Blanca',
     id: 44,
     price: 3000,
     cantidad: 1,
     img: 'assets/JS/img/tazas/latte/latteporcelana.jpg'},

     {   name: 'Taza Café Latte Porcelana',
     category: 'Taza',
     subcategory: 'Latte',
     marca: 'Porcelana Negra',
     id: 45,
     price: 3000,
     cantidad: 1,
     img: 'assets/JS/img/tazas/latte/latteporcelananegra.jpg'},

     //CAPUCCINO TAZA

     {   name: 'Taza Capuccino Vidrio',
     category: 'Taza',
     subcategory: 'Capuccino',
     marca: 'Vidrio',
     id: 46,
     price: 3000,
     cantidad: 1,
     img: 'assets/JS/img/tazas/capuccino/capuccinovidrio.webp'},

     {   name: 'Taza Capuccino Largo Vidrio',
     category: 'Taza',
     subcategory: 'Capuccino',
     marca: 'Vidrio Largo',
     id: 47,
     price: 3000,
     cantidad: 1,
     img: 'assets/JS/img/tazas/capuccino/capuccinolargo.jpg'},

     {   name: 'Taza Capuccino Vidrio',
     category: 'Taza',
     subcategory: 'Capuccino',
     marca: 'Vidrio Largo',
     id: 48,
     price: 3000,
     cantidad: 1,
     img: 'assets/JS/img/tazas/capuccino/capuccinolargo2.jpg'},
     //48

]

const totalCarrousel = () => {

    if(mediaqueryList.matches){
        return 10
    } else {
        return 6
    }
}

const controllerCarrousel = {
current: 1,
next: 2,
prev: 0,
total: totalCarrousel(),
}




// $points.forEach((item, index) => {
//     $points[0].classList.add('activePoint')

//     $points[index].addEventListener('click', () => {
//         let position = index
//         let operation = position * -15



//         if(mediaqueryList.matches){
//             let operation = position * -10
//             $big.style.transform = `translateX(${operation}%)`
//         }else{
//             $big.style.transform = `translateX(${operation}%)`

//         }
        
//         $points.forEach((item, index )=>{
//             $points[index].classList.remove('activePoint')
//         })

//             $points[index].classList.add('activePoint')
//     })

// });

const addCart = (e) => {
    e.stopImmediatePropagation()
    let x = e.target.dataset.id

    if(e.target.classList.contains('add-cart')){
        console.log('hola')
        //ESTE IF, ES PARA SI YA EXISTE EN EL CARRITO, EJECUTO Y LE DOY RETURN, COPIO MI CARRITO Y MODIFICO EL ELEMENTO QUE YA EXISTE Y LE AUMENTO EL QUANTITY
        if(contentCart.some(item => item[0].id == x)){

            contentCart = contentCart.map(item => {
                return item[0].id == x 
                ? {...item, quantity: Number(item.quantity) + 1} 
                : item })


            saveToLocalStorage(contentCart)
            loadCart()
            totalCart()
            $modalAdd.innerText = 'El producto ha sido agregado al carrito'
            $modalAdd.classList.add('active-modal')
            setTimeout(() => {
                $modalAdd.classList.remove('active-modal')
            $modalAdd.innerText = ''
            }, 2000);
            return
        }
        //SI NO EXISTE EN EL CARRITO, EJECUTO ESTO Y LO AGREGO
        let newProduct = arrayAllProducts.filter(item => item.id == x)

        saveData(newProduct)
        loadCart()
        totalCart()
        $modalAdd.classList.add('active-modal')
        $modalAdd.innerText = 'El producto ha sido agregado al carrito'
        setTimeout(() => {
            $modalAdd.classList.remove('active-modal')
        $modalAdd.innerText = ''
        }, 2000);

    }
}

const isBtnDisabled = () => {
    if(controllerCarrousel.prev == 0){
        $prevCarrousel.classList.add('disabledBtnCarrousel')
    } else {
        $prevCarrousel.classList.remove('disabledBtnCarrousel')
    }

    if(mediaqueryList.matches && controllerCarrousel.current == 10){
        $nextCarrousel.classList.add('disabledBtnCarrousel')
        return
    } else if(mediaqueryList.matches){
        $nextCarrousel.classList.remove('disabledBtnCarrousel')

    }
    
    if(minwidthTablet.matches && controllerCarrousel.current == 6){
        $nextCarrousel.classList.add('disabledBtnCarrousel')
        return
    } else if(minwidthTablet.matches) {
        $nextCarrousel.classList.remove('disabledBtnCarrousel')
    }

    
}

const nextCarrousel = (e) => {
    e.stopImmediatePropagation()
    isBtnDisabled()
    if(mediaqueryList.matches && controllerCarrousel.current == 10){
        return
    }
    if(minwidthTablet.matches && controllerCarrousel.current == 6){
        return
    }
    controllerCarrousel.current += 1
    controllerCarrousel.prev += 1
    controllerCarrousel.next += 1
    isBtnDisabled()
    

    let operation = controllerCarrousel.prev * -15


    if(mediaqueryList.matches){
        let operation = controllerCarrousel.prev * -10
        $big.style.transform = `translateX(${operation}%)`
    }else{
        $big.style.transform = `translateX(${operation}%)`
    }

    $points.forEach((item, index )=>{
        $points[controllerCarrousel.prev - 1].classList.remove('activePoint')
    })

        $points[controllerCarrousel.prev].classList.add('activePoint')
}

const prevCarrousel = (e) => {
    e.stopImmediatePropagation()
    isBtnDisabled()

    if(controllerCarrousel.prev == 0){
        return
    }

    controllerCarrousel.current -= 1
    controllerCarrousel.prev -= 1
    controllerCarrousel.next -= 1
    isBtnDisabled()

    let operation = controllerCarrousel.prev * -15

    if(mediaqueryList.matches){
        let operation = controllerCarrousel.prev * -10
        $big.style.transform = `translateX(${operation}%)`
    }else{
        $big.style.transform = `translateX(${operation}%)`
    }

    $points.forEach((item, index )=>{
        $points[controllerCarrousel.prev + 1].classList.remove('activePoint')
    })

        $points[controllerCarrousel.prev].classList.add('activePoint')
}


const initCarrousel = () => {
    isBtnDisabled()
    $carrousel.addEventListener('click', addCart)
    $nextCarrousel.addEventListener('click', nextCarrousel)
    $prevCarrousel.addEventListener('click', prevCarrousel)
    window.addEventListener('resize', () => {
        
        if(mediaqueryList.matches){
            window.addEventListener('resize', () => {
                if(minwidthTablet.matches){
                    
                        controllerCarrousel.current = 1
                        controllerCarrousel.next = 2
                        controllerCarrousel.prev = 0
                        controllerCarrousel.total = totalCarrousel()
                        
                        isBtnDisabled()
                        $big.style.transform = `translateX(0%)`
                        $points.forEach((item, index) =>{
                            index == 0
                            ? item.classList.add('activePoint')
                            : item.classList.remove('activePoint')
                        return
                        })
                    }
                })
        } 
        if(minwidthTablet.matches){
            window.addEventListener('resize', () => {
                if(mediaqueryList.matches){
                        controllerCarrousel.current = 1
                        controllerCarrousel.next = 2
                        controllerCarrousel.prev = 0
                        controllerCarrousel.total = totalCarrousel()
                        isBtnDisabled()
                        $big.style.transform = `translateX(0%)`
                        $points.forEach((item, index) =>{
                            index == 0
                            ? item.classList.add('activePoint')
                            : item.classList.remove('activePoint')
                        return
                        })                    
                }
            })
        }

    })
}

initCarrousel()