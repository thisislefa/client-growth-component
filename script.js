const slider = document.getElementById('cg-slider');
        const leftBtn = document.getElementById('cg-btn-left');
        const rightBtn = document.getElementById('cg-btn-right');

        // Scroll amount (card width + gap)
        const scrollAmount = 424; 

        leftBtn.addEventListener('click', () => {
            slider.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        rightBtn.addEventListener('click', () => {
            slider.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });