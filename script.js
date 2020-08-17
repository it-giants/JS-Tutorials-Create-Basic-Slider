// Grap the elements we need
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let prevBtn = document.querySelector('.prevBtn');
let nextBtn = document.querySelector('.nextBtn');
let runBtn = document.querySelector('.run');
let stopBtn = document.querySelector('.stop');
let sliderNav = document.getElementById('navigator');

// [=== Add dynamic dots for the sliderNav ===]
for (i = 0; i < slides.length; i++) {
    // Create span in the DOM
    let dots = document.createElement('span');
    // Append the created span inside the sliderNav
    sliderNav.append(dots);
    // Give the created spans a class
    dots.className = 'navigator';

    sliderNav.addEventListener('click', () => {
        nextSlide();
    });
}

// [===When click on one of the dots we will go to the correct slide===]
let sliderNavDots = document.querySelectorAll('#navigator .navigator');

// Getting all dots in a forEach loop and detect the click was on which element
sliderNavDots.forEach(function(dotElement, dotIndex){
    dotElement.onclick = function() {
        currentSlide = dotIndex;
    }
})

// [=== To add the class currentDot to the first dot ===]
sliderNavDots[currentSlide].classList.add('currentDot');

// [=== Function on click next button ===]
function nextSlide() {
    // hide the currentSlide and remove currentDot class from the dot
    slides[currentSlide].className = 'slide';
    sliderNavDots[currentSlide].className = 'navigator';
    // Update currentSlide to be as Next Slide
    currentSlide = (currentSlide + 1) % slides.length;
    // Show the nextSlide and update which dot to make it active
    slides[currentSlide].className ='slide showSlide';
    sliderNavDots[currentSlide].className = 'navigator currentDot';
}

// [=== Function going to work on previous button click ===]
function prevSlide() {
    // hide the currentSlide and remove currentDot class from the dot
    slides[currentSlide].className = 'slide';
    sliderNavDots[currentSlide].className = 'navigator';
    // Update currentSlide value
    currentSlide = (currentSlide - 1) % slides.length;
    // Fix currentSlide when it's -1
    if (currentSlide === -1) {
        currentSlide = slides.length - 1;
    }
    // Apply the updated value of currentSlide and dots
    slides[currentSlide].className = 'slide showSlide';
    sliderNavDots[currentSlide].className = 'navigator currentDot';
}

nextBtn.addEventListener('click', () => {
    nextSlide();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
})

let autoSlide = setInterval(nextSlide, 2000);

function stopSlide() {
    clearInterval(autoSlide);
}

stopBtn.addEventListener('click', () => {
    stopSlide();
})

function runSlide() {
    autoSlide = setInterval(nextSlide, 2000);
}

runBtn.addEventListener('click', () => {
    runSlide();
})

// [Start] Function will take action based on where we apply mouseover and mouseout
let sliderBtns = document.querySelectorAll('.slider-btns');
let sliderImgs = document.querySelectorAll('.slide');
let sliderItems = [...sliderBtns, ...sliderImgs, ...sliderNav.childNodes];

function updateAutoSlidingStatus(elements, event, func) {
    elements.forEach(element => {
        element.addEventListener(event, func);
    })
}
// Actions when mouseover and mouseout on and from next and prev btns, slides, dots
updateAutoSlidingStatus(sliderItems, 'mouseover', stopSlide);
updateAutoSlidingStatus(sliderItems, 'mouseout', runSlide);