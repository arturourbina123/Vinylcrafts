// Este script maneja la lógica para el menú desplegable en dispositivos móviles.
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});
// ... (código existente del menú móvil) ...

// Este script maneja el envío del formulario de contacto
// Se recomienda usar el ID del formulario de Formspree aquí.
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

// Verifica que el formulario exista antes de añadir el evento (para que funcione en otras páginas)
if (form && formStatus) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Evita que el formulario se envíe de la manera tradicional (redirigiendo)
        
        // Obtiene los datos del formulario
        const data = new FormData(form);
        
        formStatus.textContent = "Enviando...";
        formStatus.classList.remove('text-green-500', 'text-red-500'); // Limpia las clases de color
        formStatus.classList.add('text-gray-400');
        
        try {
            // ATENCIÓN: Aquí debes usar la URL de Formspree con el hash de tu formulario de contacto
            const response = await fetch('https://formspree.io/f/mrbljevv', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json' // Formspree requiere este encabezado
                }
            });

            if (response.ok) {
                formStatus.textContent = '¡Gracias! Tu mensaje ha sido enviado con éxito.';
                formStatus.classList.remove('text-gray-400');
                formStatus.classList.add('text-green-500');
                form.reset(); // Limpia el formulario
            } else {
                formStatus.textContent = 'Lo sentimos, hubo un problema al enviar tu mensaje.';
                formStatus.classList.remove('text-gray-400');
                formStatus.classList.add('text-red-500');
            }
        } catch (error) {
            formStatus.textContent = 'Lo sentimos, hubo un problema con la conexión. Intenta de nuevo más tarde.';
            formStatus.classList.remove('text-gray-400');
            formStatus.classList.add('text-red-500');
        }
    });
}

// ... (omitiendo código del menú móvil y formulario) ...

// --- Lógica para el Carrusel de Novedades en index.html ---

const carousel = document.getElementById('main-carousel');
if (carousel) { // Solo ejecuta si el carrusel existe en la página (solo en index.html)
    const items = document.querySelectorAll('#main-carousel .carousel-item');
    const prevButton = document.getElementById('carousel-prev');
    const nextButton = document.getElementById('carousel-next');
    let currentIndex = 0;

    function updateCarousel() {
        items.forEach((item, index) => {
            // Muestra solo el item activo
            if (index === currentIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    function goToNext() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }

    function goToPrev() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }

    // Eventos de botones
    nextButton.addEventListener('click', goToNext);
    prevButton.addEventListener('click', goToPrev);

    // Auto-avance del carrusel cada 5 segundos
    setInterval(goToNext, 5000); 

    // Inicializa el carrusel
    updateCarousel();
}