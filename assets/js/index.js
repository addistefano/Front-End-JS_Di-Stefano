const resenias = document.querySelector('#resenias-container');
const productos = document.querySelector('#productos-container');

const peticionResenias = () => {
    fetch('/resenias.json')
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            const data = datos;
            data.forEach((item) => {
                const card = document.createElement('div');
                card.className = 'resenia';
                card.innerHTML = `
                            <img src=${item.imagen} alt=${item.nombre}>
                                <h3>${item.nombre}</h3>
                                <i class="fas fa-heart favorite-icon"></i>
                                <p>${item.mensaje}</p>
                                
                        `
                resenias.append(card);
            });
        })
        .catch((error) => {
            console.error("Error al realizar la peticion", error)
        })
}


const peticionML = async () => {
    const respuesta = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=Samsung');
    const datos = await respuesta.json();
    const data = await datos.results
    for (item of data) {
        const card = document.createElement('div');
        card.className = 'producto-card';
        card.innerHTML = `
                            <figure>
                                <img src="${item.thumbnail}" alt="${item.title}">
                                <figcaption><h3>${item.title}</h3></figcaption>
                            </figure>                            
                            <p class="card-text">Precio: $${item.price}.-</p>
                            <button class="btn btn-primary">Comprar</button>                
                        `
        productos.appendChild(card);
    }
}



const inicializarApp = () => {
    peticionResenias();
    peticionML();
};

document.addEventListener('DOMContentLoaded', inicializarApp);