        const wrapper = document.getElementById('sliderWrapper');
        const dots = document.querySelectorAll('.dot');
        const originalSlides = document.querySelectorAll('.slide-item');
        const totalOriginalSlides = originalSlides.length;

        const firstClone = originalSlides[0].cloneNode(true);
        wrapper.appendChild(firstClone);

        let currentSlide = 0;
        let isTransitioning = false;

        function updateSlider(smooth = true) {
            if (smooth) {
                wrapper.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            } else {
                wrapper.style.transition = 'none';
            }
            
            wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            const activeDotIndex = currentSlide % totalOriginalSlides;
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === activeDotIndex);
            });
        }

        function nextSlide() {
            if (isTransitioning) return;
            currentSlide++;
            isTransitioning = true;
            updateSlider(true);
        }

        wrapper.addEventListener('transitionend', () => {
            isTransitioning = false;
            if (currentSlide === totalOriginalSlides) {
                currentSlide = 0;
                updateSlider(false);
            }
        });

        let slideInterval = setInterval(nextSlide, CONFIG.sliderSpeed);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (isTransitioning) return;
                currentSlide = index;
                updateSlider(true);
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, CONFIG.sliderSpeed);
            });
        });

updateSlider(false);