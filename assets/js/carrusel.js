document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const prevButton = carousel.querySelector('.prev-btn');
        const nextButton = carousel.querySelector('.next-btn');
        const items = carousel.querySelectorAll('.carousel-item');
        let currentIndex = 0;

        function showItem(index) {
            items.forEach((item, i) => {
                item.classList.remove('active');
                if (i === index) {
                    item.classList.add('active');
                }
            });
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
            showItem(currentIndex);
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
            showItem(currentIndex);
        });
    });
});