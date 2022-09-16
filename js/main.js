const cards = document.querySelectorAll('.card')


cards.forEach((item) => {
    item.addEventListener('mousemove', startRotate)
    item.addEventListener('mouseout', stopRotate) 
})


function startRotate(event) {
    const cardItem = this.querySelector('.card-item')
    cardItem.style.transform = `rotateX(${-(event.offsetY - cardItem.offsetHeight / 2)/7}deg) 
                                rotateY(${(event.offsetX - cardItem.offsetWidth / 2)/7}deg)`
}

function stopRotate(event) {
    const cardItem = this.querySelector('.card-item')
    cardItem.style.transform = `rotate(0)`
}