
$big = document.querySelector('.carrousel-big')
$points = document.querySelectorAll('.point')


$points.forEach((item, index) => {
    $points[0].classList.add('activePoint')

    $points[index].addEventListener('click', () => {
        let position = index
        let operation = position * -15
        console.log($points)
        $big.style.transform = `translateX(${operation}%)`
        
        $points.forEach((item, index )=>{
            $points[index].classList.remove('activePoint')
        })

            $points[index].classList.add('activePoint')
    })

});