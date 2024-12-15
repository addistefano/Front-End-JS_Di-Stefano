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
            link: '/',
            hash: 'home',
            text: 'Inicio',
        },
        {
            link: '/',
            hash: 'productos',
            text: 'Productos',
        },
        {
            link: '/',
            hash: 'resenias',
            text: 'Reseñas',
        },
        {
            link: 'contacto.html',
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

}

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


/**
 * Funcion para crear toda la nevegacion comun de la App
 */
const inicializarNavegation = () => {
    crearNavegacion();
    crearFooter();
};

document.addEventListener('DOMContentLoaded', inicializarNavegation);

/**
 * Autor: Alejandro Daniel Di Stefano
 * Año: 2024
 */