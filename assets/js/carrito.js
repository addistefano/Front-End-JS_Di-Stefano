const renderizarCarrito = () => {
    const carrito = obtenerCarrito(); // Obtiene el carrito del localStorage
    const carritoTable = document.getElementById('carrito-table'); // Selecciona el tbody
    const carritoSection = document.getElementById('carrito'); // Selecciona la sección del carrito
    const totalAmountEl = document.getElementById('total-amount'); // Selecciona el total (si existe)

    // Limpia el contenido previo de la tabla y la sección extra
    carritoTable.innerHTML = '';
    const existingBotonera = document.querySelector('.botonera-carrito-pago');
    if (existingBotonera) {
        existingBotonera.remove(); // Elimina cualquier bloque previo de la botonera
    }

    // Verifica si el carrito está vacío
    if (carrito.length === 0) {
        // Muestra un mensaje si no hay productos
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="4" style="text-align: center;">No hay productos en su carrito</td>
        `;
        carritoTable.appendChild(row);

        // Resetea el total a 0 si no hay productos
        if (totalAmountEl) {
            totalAmountEl.textContent = '0.00';
        }
        return;
    }

    // Inicializa la variable para calcular el total
    let total = 0;

    // Itera sobre los productos del carrito
    carrito.forEach((producto, index) => {
        // Calcula el total
        total += producto.price;

        // Crea una fila para cada producto
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${producto.thumbnail}" alt="${producto.title}" style="max-width: 60px;">
            </td>
            <td>${producto.title}</td>
            <td>$${producto.price.toFixed(2)}</td>
            <td class="trash-row">
                <button class="btn btn-danger btn-sm eliminar-carrito" data-index="${index}">
                    <i class="fa fa-trash"></i>
                </button>
            </td>
        `;
        carritoTable.appendChild(row);
    });

    // Crea y agrega el bloque con el total y el botón de compra
    const botoneraCarrito = document.createElement('div');
    botoneraCarrito.className = 'd-flex botonera-carrito-pago';
    botoneraCarrito.innerHTML = `
        <p>
            Total: $<span id="total-amount">${total.toFixed(2)}</span>
        </p>
        <a href="#" class="btn btn-primary" id="btn-comprar-carrito">Comprar</a>
    `;
    carritoSection.appendChild(botoneraCarrito); // Agrega la botonera fuera de la tabla
};


// Función para eliminar un producto del carrito
const eliminarProductoCarrito = (index) => {
    const carrito = obtenerCarrito(); // Obtiene el carrito actual
    carrito.splice(index, 1); // Elimina el producto por su índice
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Guarda el carrito actualizado
    renderizarCarrito(); // Renderiza nuevamente el carrito
};

// Evento para manejar la eliminación de productos

document.addEventListener('click', (event) => {
    if (event.target.closest('.eliminar-carrito')) {
        const index = event.target.closest('.eliminar-carrito').getAttribute('data-index');
        Swal.fire({
            html: `Esta seguro de eliminar este producto`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Eliminar"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Producto Eliminado del Carrito",
                    icon: "success"
                });
                eliminarProductoCarrito(index);
            }
        });

    }
});


document.addEventListener('click', (event) => {
    if (event.target.closest('#btn-comprar-carrito')) {
        Swal.fire({
            title: "¡Compra finalizada con éxito!",
            text: "Gracias por comprar en Samsung eCommerce",
            icon: "success"
        }).then(() => {
            // Vacía el carrito en localStorage
            localStorage.setItem('carrito', JSON.stringify([]));
            // Volver a la página principal
            window.location.href = '/Front-End-JS_Di-Stefano/';
        });
    }
});

// Inicializar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderizarCarrito();
});
