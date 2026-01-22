const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('carouselDots');
const progressBar = document.getElementById('progressBar');

const cards = document.querySelectorAll('.research-card');
const totalCards = cards.length;
let currentIndex = 0;
let autoPlayInterval;
let progressInterval;
const autoPlayDuration = 5000; // 5 seconds

// Calculate cards to show based on screen width
function getCardsToShow() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 1200) return 3;
    return 4;
}

let cardsToShow = getCardsToShow();
const maxIndex = Math.max(0, totalCards - cardsToShow);

// Create dots
function createDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i <= maxIndex; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

// Update carousel position
function updateCarousel() {
    const cardWidth = cards[0].offsetWidth;
    const gap = 32; // 2rem
    const offset = -(currentIndex * (cardWidth + gap));
    track.style.transform = `translateX(${offset}px)`;

    // Update dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });

    // Reset progress bar
    progressBar.style.width = '0%';
}

// Go to specific slide
function goToSlide(index) {
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    updateCarousel();
    resetAutoPlay();
}

// Next slide
function nextSlide() {
    currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    updateCarousel();
}

// Previous slide
function prevSlide() {
    currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    updateCarousel();
}

// Progress bar animation
function animateProgress() {
    let progress = 0;
    progressInterval = setInterval(() => {
        progress += 100 / (autoPlayDuration / 100);
        progressBar.style.width = progress + '%';
        if (progress >= 100) {
            clearInterval(progressInterval);
        }
    }, 100);
}

// Auto play functionality
function startAutoPlay() {
    animateProgress();
    autoPlayInterval = setInterval(() => {
        nextSlide();
        animateProgress();
    }, autoPlayDuration);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
    clearInterval(progressInterval);
}

function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
}

// Event listeners
nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoPlay();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoPlay();
});

// Pause on hover
track.addEventListener('mouseenter', stopAutoPlay);
track.addEventListener('mouseleave', startAutoPlay);

// Handle window resize
window.addEventListener('resize', () => {
    const newCardsToShow = getCardsToShow();
    if (newCardsToShow !== cardsToShow) {
        cardsToShow = newCardsToShow;
        currentIndex = 0;
        createDots();
        updateCarousel();
        resetAutoPlay();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
        resetAutoPlay();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
        resetAutoPlay();
    }
});

// Touch/Swipe support
let touchStartX = 0;
let touchEndX = 0;

track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoPlay();
});

track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
        nextSlide();
    } else if (touchEndX - touchStartX > 50) {
        prevSlide();
    }
    startAutoPlay();
});

// Initialize
createDots();
startAutoPlay();






