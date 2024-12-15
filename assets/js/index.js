class Producto {
    constructor(id, title, thumbnail, price) {
        this.id = id;
        this.title = title;
        this.thumbnail = thumbnail;
        this.price = price;
    }
}

const resenias = document.querySelector('#resenias-container');
const productos = document.querySelector('#productos-container');


// Función para añadir un producto al carrito
const agregarAlCarrito = (producto) => {
    const carrito = obtenerCarrito();

    // Evitar duplicados: Verificar si el producto ya está en el carrito
    const existe = carrito.find((item) => item.id === producto.id);
    if (!existe) {
        carrito.push(producto);
        guardarCarrito(carrito);
        Swal.fire({
            position: "top-end",
            html: `
                <div style="display: flex; align-items: center; gap: 10px;">
                    <img src="${producto.thumbnail}" alt="${producto.title}" 
                        style="max-width: 120px; border-radius: 8px;">
                    <span>${producto.title} fue agregado al carrito.</span>
                </div>
            `,
            showConfirmButton: false,
            timer: 1500
        });
        actualizarCarritoUI();
    } else {
        Swal.fire({            
                html: `${producto.title} ya está en el carrito.`,
                icon: "question"
            });
    }
};

// Función para obtener las reseñas desde resenias.json
const peticionResenias = () => {
    fetch('/resenias.json')
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            datos.forEach((item) => {
                const card = document.createElement('div');
                card.className = 'resenia';
                card.innerHTML = `
                    <img src=${item.imagen} alt=${item.nombre}>
                    <h3>${item.nombre}</h3>
                    <i class="fas fa-heart favorite-icon"></i>
                    <p>${item.mensaje}</p>
                `;
                resenias.append(card);
            });
        })
        .catch((error) => {
            console.error("Error al realizar la petición", error);
        });
};

// Función para obtener los productos de MercadoLibre
const peticionML = async () => {
    const respuesta = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=Samsung');
    const datos = await respuesta.json();
    const data = datos.results;

    for (const item of data) {
        const card = document.createElement('div');
        card.className = 'producto-card';
        card.innerHTML = `
                            <figure>
                                <img src="${item.thumbnail}" alt="${item.title}">
                                <figcaption><h3>${item.title}</h3></figcaption>
                            </figure>
                            <section class="footer-card">
                                <p class="card-text">Precio: $${item.price}.-</p>
                                <button class="btn btn-primary" type="button">Comprar</button>
                            </section>
                        `;

        // Agrego funcionalidad al botón "Comprar"
        const botonComprar = card.querySelector('button');
        botonComprar.addEventListener('click', () => {
            const producto = new Producto(item.id, item.title, item.thumbnail, item.price);
            agregarAlCarrito(producto);
        });

        productos.appendChild(card);
    }
};

const inicializarApp = () => {
    peticionResenias();
    peticionML();
};

document.addEventListener('DOMContentLoaded', inicializarApp);