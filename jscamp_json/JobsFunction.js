import {jobsListingSection} from './buttons.js'
const container = document.querySelector("jobs-listings")

fetch("./data.json")
    .then((response) => response.json())
    .then(trabajos => 
    {
        const cantidadTrabajos = trabajos.length
        const cantidadPorPagina = 5
        const totalPaginas = Math.ceil(cantidadTrabajos / cantidadPorPagina)
        let paginaActual = 1

        function mostrarTrabajos(pagina) {
            jobsListingSection.innerHTML = ''; // Limpiar contenido anterior
            const inicio = (pagina - 1) * cantidadPorPagina;
            const fin = inicio + cantidadPorPagina;
            
            trabajos.slice(inicio, fin).forEach((trabajo) => {
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
            const paginationControls = document.createElement('div');
            paginationControls.classList.add('pagination');
            paginationControls.innerHTML = `
                <nav class="pagination">
                    <a href="#" class="${pagina === 1 ? 'disabled' : ''}" onclick="changePage(${pagina - 1})">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M15 6l-6 6l6 6" />
                        </svg>
                    </a>
                    <span>${pagina} de ${totalPaginas}</span>
                    <a href="#" class="${pagina === totalPaginas ? 'disabled' : ''}" onclick="changePage(${pagina + 1})">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 6l6 6l-6 6" />
                        </svg>
                    </a>
                </nav>
            `;
            jobsListingSection.appendChild(paginationControls);
        }

        // Función para cambiar de página
        window.changePage = (newPage) => {
            if (newPage >= 1 && newPage <= totalPaginas) {
                paginaActual = newPage;
                mostrarTrabajos(paginaActual);
            }
        };

        // Mostrar la primera página inicialmente
        mostrarTrabajos(paginaActual);
    });
