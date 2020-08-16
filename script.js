// Grap the elements we need
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let prevBtn = document.querySelector('.prevBtn');
let nextBtn = document.querySelector('.nextBtn');
let runBtn = document.querySelector('.run');
let stopBtn = document.querySelector('.stop');

// Function on click next button
function nextSlide() {
    // hide the currentSlide
    slides[currentSlide].className = 'slide';
    // Update currentSlide to be as Next Slide
    currentSlide = (currentSlide + 1) % slides.length;
    // Show the nextSlide
    slides[currentSlide].className ='slide showSlide';
}

// Function going to work on previous button click
function prevSlide() {
    slides[currentSlide].className = 'slide';
    // Update currentSlide value
    currentSlide = (currentSlide - 1) % slides.length;
    // Fix currentSlide when it's -1
    if (currentSlide === -1) {
        currentSlide = slides.length - 1;
    }
    // Apply the updated value of currentSlide
    slides[currentSlide].className = 'slide showSlide';

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