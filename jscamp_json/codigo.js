import {jobsListingSection} from './buttons.js'
const container = document.querySelector("jobs-listings")
const ITEMS_PER_PAGE = 3; // Número de elementos por página
let currentPage = 1; // Página actual

fetch("./data.json")
    .then((response) => response.json())
    .then(trabajos => {
        // Función para mostrar los trabajos de la página actual
        const mostrarTrabajosPorPagina = (page) => {
            jobsListingSection.innerHTML = ''; // Limpiar contenido actual
            const startIndex = (page - 1) * ITEMS_PER_PAGE;
            const endIndex = startIndex + ITEMS_PER_PAGE;
            const trabajosPagina = trabajos.slice(startIndex, endIndex);

            trabajosPagina.forEach((trabajo) => {
                let trabajoUbica = trabajo.ubicacion.toLowerCase();
                const article = document.createElement('article');
                article.setAttribute('data-modalidad', trabajo.data.modalidad);
                article.classList.add('jobs-listings-card');
                article.innerHTML = `
                    <div>
                        <h3>${trabajo.titulo}</h3>
                        <small>${trabajo.empresa} | ${trabajo.ubicacion}</small>
                        <p>${trabajo.descripcion}</p>
                    </div>
                    <div>
                        <button class="button-apply-job">Aplicar</button>
                    </div>
                `;
                jobsListingSection.appendChild(article);
            });

            // Agregar controles de paginación
            crearControlesPaginacion(trabajos.length);
        };

        // Función para crear los botones de paginación
        const crearControlesPaginacion = (totalItems) => {
            const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
            const paginationContainer = document.createElement('div');
            paginationContainer.classList.add('pagination');
            paginationContainer.innerHTML = `
                <button onclick="cambiarPagina(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>Anterior</button>
                <span>Página ${currentPage} de ${totalPages}</span>
                <button onclick="cambiarPagina(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>Siguiente</button>
            `;
            jobsListingSection.after(paginationContainer);
        };

        // Función para cambiar de página
        window.cambiarPagina = (newPage) => {
            const totalPages = Math.ceil(trabajos.length / ITEMS_PER_PAGE);
            if (newPage >= 1 && newPage <= totalPages) {
                currentPage = newPage;
                mostrarTrabajosPorPagina(currentPage);
            }
        };

        // Mostrar la primera página inicialmente
        mostrarTrabajosPorPagina(currentPage);
    });
        