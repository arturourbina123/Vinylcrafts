// Este script maneja la lógica para el menú desplegable en dispositivos móviles.
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Este script maneja el envío del formulario de contacto
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evita que el formulario se envíe de la manera tradicional (redirigiendo)
    
    // Obtiene los datos del formulario
    const data = new FormData(form);
    
    formStatus.textContent = "Enviando...";
    formStatus.classList.remove('text-green-500', 'text-red-500'); // Limpia las clases de color
    formStatus.classList.add('text-gray-400');
    
    try {
        const response = await fetch('https://formspree.io/f/urbina.castro.arturo1700@gmail.com', {
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