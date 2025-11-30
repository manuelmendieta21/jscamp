//Controlar la paginacion mediante currenPage y totalPages valor de las paginas
export function Pagination({ currenPage = 2, totalPages = 10 }) {
    //Generar un array de paginas a mostrar 
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    //Logica para mostrar o no los botones de paginacion
    const isFirstPage = currenPage === 1;
    const isLastPage = currenPage === totalPages;

    const stylePrevButton = isFirstPage ? { pointerEvents: 'none', opacity: 0.6 } : {};
    const styleNextButton = isLastPage ? { pointerEvents: 'none', opacity: 0.6 } : {};

    return (
        <div>
            <nav className="pagination">
                {
                    //Renderizado con condicionales
                    !isFirstPage && (
                        <a href="#" style={stylePrevButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M15 6l-6 6l6 6" />
                            </svg>
                        </a>
                    )
                }


                {pages.map(page => (
                    <a href="#"
                        className={currenPage === page ? 'is-active' : ''}>
                        {page}
                    </a>
                ))}

                {
                    !isLastPage && (
                        <a href="#" style={styleNextButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 6l6 6l-6 6" />
                            </svg>
                        </a>
                    )
                }

            </nav>
        </div>
    )

}