const $categoryAside = document.querySelectorAll('.category-aside')
const $asideProducts = document.querySelector('.aside-products')
const $arrowRightAside = document.querySelector('.right')
const $principalContainer = document.querySelector('.principal-container')
const $itemSubcategory = document.querySelector('.li-subcategory')
const $listAside = document.querySelectorAll('list-aside')

let arrayAllProducts = [
    {name: 'Café Martinez Colombia Suave',
    category: 'Cafe',
    subcategory: 'Molido',
    id: 1,
    price: 1500,
    img: './img/products/martinez/martinez-colombia-suave.webp'
    }
    ,
    {name: 'Café Martinez Brasil',
    category: 'Cafe',
    subcategory: 'Molido',
    id: 2,
    price: 1500,
    img: './img/products/martinez/brasil.webp'
    }
]


const renderProduct = (product) => {
    let {name, category, subcategory, id, price, img} = product
    console.log(product)

    return `
    <div>
        <h3>${name}</h3>
        <p>${price}</p>
        <img src="img/martinez/right.png">
    </div>
    `

}


const renderCategory = (value) => {

    let renderArray = arrayAllProducts.filter(item => {
        return item.subcategory == value
    })

    $principalContainer.innerHTML += renderArray.map(product => {return renderProduct(product)}).join('')
}


const renderSubcategory = (e) => {
    e.preventDefault()
    let selectedSubcategory = e.target.dataset.subcategory
    
    switch (selectedSubcategory) {
        case 'Molido':
            renderCategory(selectedSubcategory)
            
            break;
    
        default:
            break;
    }



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




const init = () => {

    $asideProducts.addEventListener('click', visibilityNextElement)
    $asideProducts.addEventListener('click', renderSubcategory)
}

init()