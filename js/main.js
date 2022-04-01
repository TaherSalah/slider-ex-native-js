let image = Array.from(document.querySelectorAll('.imgItem'));
let boxLightContainer = document.querySelector('.boxLightContainer');
let closeIcone = document.getElementById('close');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let boxLightItems = document.querySelector('.boxLightItems')
let currentIndex = 0;

for (let i = 0; i < image.length; i++) {
    image[i].addEventListener('click', function(e) {
        boxLightContainer.style.display = 'flex'
        let imgSrc = e.target.src;
        boxLightItems.style.backgroundImage = `url(${imgSrc})`
        currentIndex = image.indexOf(e.target)
        console.log(currentIndex)
    })
};

closeIcone.addEventListener('click', hideSlider)
next.addEventListener('click', nextSlider)

prev.addEventListener('click', prevSlider)

function prevSlider() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = image.length - 1;
    }
    let imgSrc = image[currentIndex].src;
    boxLightItems.style.backgroundImage = `url(${imgSrc})`
}

function nextSlider() {
    currentIndex++;
    if (currentIndex == image.length) {
        currentIndex = 0
    }
    let imgSrc = image[currentIndex].src
    boxLightItems.style.backgroundImage = `url(${imgSrc})`
}

function hideSlider() {
    boxLightContainer.style.display = 'none'
}




document.addEventListener('keydown', function(e) {
    if (e.key == 'ArrowRight') {
        nextSlider()
    } else if (e.key == 'ArrowLeft') {
        prevSlider()
    } else if (e.key == 'Escape') {
        hideSlider()
    }
})