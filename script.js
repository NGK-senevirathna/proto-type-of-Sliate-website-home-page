document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelectorAll('.indicator');
    const carouselSlide = document.querySelector('.carousel-slide');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // ඊළඟ පින්තූරයට යන ශ්‍රිතය
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }
    
    // පෙර පින්තූරයට යන ශ්‍රිතය
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    // කැරොසලය යාවත්කාලීන කරන ශ්‍රිතය
    function updateCarousel() {
        // පින්තූර මාරු කිරීම
        carouselSlide.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // දර්ශක යාවත්කාලීන කිරීම
        indicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    // දර්ශකයක් ඔබූ විට නිශ්චිත පින්තූරයකට යාම
    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
    }
    
    // ඉසව් පරිවර්තක එකතු කිරීම
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-index'));
            goToSlide(slideIndex);
        });
    });
    
    // යතුරුපුවරු පරිවර්තක එකතු කිරීම
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // ස්වයංක්‍රීයව පින්තූර මාරු කිරීම (අවශ්‍ය නම්)
    // let autoSlideInterval = setInterval(nextSlide, 5000);
    
    // ස්වයංක්‍රීය මාරුව නවත්වන්න මූසිකය යොදාගන්නා විට
    // carouselSlide.addEventListener('mouseenter', () => {
    //     clearInterval(autoSlideInterval);
    // });
    
    // carouselSlide.addEventListener('mouseleave', () => {
    //     autoSlideInterval = setInterval(nextSlide, 5000);
    // });
});

// Auto slide every 3 seconds (3000 milliseconds)
let autoSlideInterval = setInterval(nextSlide, 3000);

// Pause auto-slide when hovering over carousel
document.querySelector('.carousel').addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

// Resume auto-slide when mouse leaves carousel
document.querySelector('.carousel').addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(nextSlide, 3000);
});