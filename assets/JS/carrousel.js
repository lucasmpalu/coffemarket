
$big = document.querySelector('.carrousel-big')
$points = document.querySelectorAll('.point')
var mediaqueryList = window.matchMedia("(max-width: 768px)");


$points.forEach((item, index) => {
    $points[0].classList.add('activePoint')

    $points[index].addEventListener('click', () => {
        let position = index
        let operation = position * -15
        console.log($points)

        if(mediaqueryList.matches){
            let operation = position * -10
            $big.style.transform = `translateX(${operation}%)`
        }else{
            $big.style.transform = `translateX(${operation}%)`

        }
        
        $points.forEach((item, index )=>{
            $points[index].classList.remove('activePoint')
        })

            $points[index].classList.add('activePoint')
    })

});