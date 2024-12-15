document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Evito el envío por defecto del formulario

    // Creo el objeto con los datos del formulario
    const data = {
        name: document.getElementById('name').value,
        lastname: document.getElementById('lastname').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Envio datos a la API
    fetch('https://formspree.io/f/xjkvyknk', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
        .then((response) => {
            if (response.ok) {
                Swal.fire({
                    title: '¡Enviado con éxito!',
                    text: 'Tu formulario se envió correctamente. Nos pondremos en contacto pronto.',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                });
                event.target.reset(); // Limpio el formulario
            } else {
                Swal.fire({
                    title: 'Error al enviar',
                    text: 'Hubo un problema al enviar tu formulario. Por favor, intenta nuevamente.',
                    icon: 'error',
                    confirmButtonText: 'Reintentar'
                });
            }
        })
        .catch((error) => {
            console.error('Error al enviar el formulario:', error);
            Swal.fire({
                title: 'Error del servidor',
                text: 'No pudimos enviar el formulario debido a un error de red o del servidor.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        });

    // Guardo los datos en el sessionStorage
    const contactos = JSON.parse(sessionStorage.getItem('contactos')) || [];
    contactos.push(data); // Añade el nuevo contacto
    sessionStorage.setItem('contactos', JSON.stringify(contactos));
});
