document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const prevButton = carousel.querySelector('.prev-btn');
        const nextButton = carousel.querySelector('.next-btn');
        const items = carousel.querySelectorAll('.carousel-item');
        let currentIndex = 0;

        // Asegurarse de que haya elementos en el carrusel
        if (items.length === 0) {
            return;
        }

        // Función para mostrar un elemento específico
        function showItem(index) {
            items.forEach((item, i) => {
                item.classList.remove('active');
                if (i === index) {
                    item.classList.add('active');
                }
            });
        }
        
        // Mostrar el primer elemento al cargar la página
        showItem(currentIndex);

        // Añadir "escuchadores de eventos" si los botones existen
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
                showItem(currentIndex);
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
                showItem(currentIndex);
            });
        }
    });
});