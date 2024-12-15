const crearNavegacion = () => {

    const cabecera = document.getElementById('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    // Establezco el rol semántico de navegación
    nav.setAttribute('role', 'navigation');

    cabecera.appendChild(nav);
    nav.appendChild(ul);

    const navigation = [
        {
            link: '/Front-End-JS_Di-Stefano/',
            hash: 'home',
            text: 'Inicio',
        },
        {
            link: '/Front-End-JS_Di-Stefano/',
            hash: 'productos',
            text: 'Productos',
        },
        {
            link: '/Front-End-JS_Di-Stefano/',
            hash: 'resenias',
            text: 'Reseñas',
        },
        {
            link: '/Front-End-JS_Di-Stefano/contacto.html',
            hash: '',
            text: 'Contacto',
        },
    ];

    // Itero sobre el array y creo cada elemento <li> y <a>
    for (const item of navigation) {
        const li = document.createElement('li');
        const a = document.createElement('a');

        // Configuro el atributo href para incluir el hash si existe
        a.href = item.hash ? `${item.link}#${item.hash}` : item.link;

        // Agrego el texto del enlace
        a.textContent = item.text;

        // Añado el enlace al <li> y luego el <li> al <ul>
        li.appendChild(a);
        ul.appendChild(li);
    }
    if (!window.location.pathname.includes('carrito.html')) {
        // Creo y añado el nuevo <li> para el carrito al final
        const liCarrito = document.createElement('li');
        // liCarrito.className = 'item-carrito';
        liCarrito.innerHTML = `
                            <a href="carrito.html" class="">                                
                                    <div class="cart-li">
                                        <i class="fa fa-cart-shopping" style="color: #c29336;"></i>
                                        <p>0</p>
                                        <p>$<span> 0</span></p>
                                    </div>                                
                            </a>
                        `;
        ul.appendChild(liCarrito); // Lo añado al final del <ul>
    }
};


const crearFooter = () => {

    const footer = document.getElementById('footer');

    // Contenido del párrafo del copyright
    const currentYear = new Date().getFullYear();
    const p = document.createElement('p');
    p.innerHTML = `&copy; ${currentYear} Mi eCommerce | Alejandro Di Stefano`;


    // Contenedor de los iconos sociales
    const socialIcons = document.createElement('div');
    socialIcons.className = 'social-icons';

    // Datos para las redes sociales
    const socialLinks = [
        {
            href: 'https://facebook.com',
            label: 'Facebook',
            iconClass: 'fab fa-facebook-f'
        },
        {
            href: 'https://instagram.com',
            label: 'Instagram',
            iconClass: 'fab fa-instagram'
        },
        {
            href: 'https://linkedin.com',
            label: 'LinkedIn',
            iconClass: 'fab fa-linkedin-in'
        },
    ];

    // Genero los enlaces de redes sociales
    socialLinks.forEach((social) => {
        const a = document.createElement('a');
        a.href = social.href;
        a.target = '_blank';
        a.setAttribute('aria-label', social.label);

        const icon = document.createElement('i');
        icon.className = social.iconClass;

        a.appendChild(icon);
        socialIcons.appendChild(a);
    });

    // Agrego el párrafo y las redes sociales al footer
    footer.appendChild(p);
    footer.appendChild(socialIcons);

    // Agrego el footer al documento (al final del body)
    document.body.appendChild(footer);

}

const obtenerCarrito = () => {
    const carrito = localStorage.getItem('carrito');
    return carrito ? JSON.parse(carrito) : [];
};

const guardarCarrito = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
};

const actualizarCarritoUI = () => {
    const carrito = obtenerCarrito();

    const cantidadProductosEl = document.querySelector('.cart-li p:nth-of-type(1)');
    const precioTotalEl = document.querySelector('.cart-li p:nth-of-type(2) span');

    const totalProductos = carrito.length;
    const precioTotal = carrito.reduce((total, producto) => total + producto.price, 0);

    cantidadProductosEl.textContent = totalProductos;
    precioTotalEl.textContent = precioTotal.toFixed(2);
};

const inicializarNavegacion = () => {
    crearNavegacion();
    crearFooter();
    actualizarCarritoUI();
};

document.addEventListener('DOMContentLoaded', () => {
    inicializarNavegacion();
});