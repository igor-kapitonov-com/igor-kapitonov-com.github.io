function initCarousel(carouselElement) {
    const track = carouselElement.querySelector('.carousel-track');
    const items = Array.from(track.querySelectorAll('.carousel-item'));
    const totalItems = items.length;
    
    // Clone items and append to end
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });
    
    let currentIndex = 0;
    
    function updateCarousel(smooth = true) {
        const itemWidth = items[0].offsetWidth;
        const offset = currentIndex * itemWidth;
        track.style.transition = smooth ? 'transform 0.5s ease' : 'none';
        track.style.transform = `translateX(-${offset}px)`;
    }
    
    function nextSlide() {
        currentIndex++;
        updateCarousel(true);
        
        // Reset to start after reaching cloned section
        if (currentIndex >= totalItems) {
            setTimeout(() => {
                currentIndex = 0;
                updateCarousel(false);  // No animation for reset
            }, 500);  // Wait for transition to complete
        }
    }
    
    setInterval(nextSlide, 3000);
}

document.querySelectorAll('.carousel').forEach(carousel => {
    initCarousel(carousel);
});