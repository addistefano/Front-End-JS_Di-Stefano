const resenias = document.querySelector('#resenias-container');

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



const inicializarApp = () => {
    peticionResenias();
};

document.addEventListener('DOMContentLoaded', inicializarApp);