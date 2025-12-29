//Controlar la paginacion mediante currenPage y totalPages valor de las paginas 
//onPageChange es una funcion que se ejecuta cuando se hace click en un boton de paginacion

export function Pagination({ currenPage, totalPages, onPageChange }) {
    //Generar un array de paginas a mostrar 
    //visualizar el renderizado por consola console.log('render Pagination')
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    //Logica para mostrar o no los botones de paginacion
    const isFirstPage = currenPage === 1;
    const isLastPage = currenPage === totalPages;

    const stylePrevButton = isFirstPage ? { pointerEvents: 'none', opacity: 0.6 } : {};
    const styleNextButton = isLastPage ? { pointerEvents: 'none', opacity: 0.6 } : {};

    //Funcion para manejar el evento de click en el boton previo
    const handlePrevClick = (event) => {
        event.preventDefault()
        if (isFirstPage === false) {
            onPageChange(currenPage - 1)
        }
    }

    //Funcion para manejar el evento de click en el boton siguiente
    const handleNextClick = (event) => {
        event.preventDefault()
        if (isLastPage === false) {
            onPageChange(currenPage + 1)
        }
    }

    //handlePageChange cambio de paginas muestra la pagina actual cuando itera en pages.map

    const handlePageChange = (event, page) => {
        event.preventDefault()
        if (page !== currenPage) {
            onPageChange(page)
        }
    }

    const baseLinkClass = "flex items-center justify-center w-10 h-10 no-underline text-text-muted rounded-md transition-all duration-300 hover:bg-white focus:bg-white md:w-8 md:h-8 md:text-sm max-sm:w-12 max-sm:h-8 max-sm:text-base";
    const activeLinkClass = "bg-primary-light text-[#141414] active:scale-105";

    return (
        <div>
            {/*ClassName=paginaton*/}
            <nav className="flex justify-center gap-2 my-8 md:gap-1 md:my-4 max-sm:gap-0.5 max-sm:my-3 max-sm:flex-wrap">
                {
                    //Renderizado con condicionales
                    !isFirstPage && (
                        <a href="#" style={stylePrevButton} onClick={handlePrevClick} className={baseLinkClass}>
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

                        key={page}
                        className={`${baseLinkClass} ${currenPage === page ? activeLinkClass : ''}`}
                        //
                        onClick={(event) => handlePageChange(event, page)}>
                        {page}
                    </a>
                ))}

                {
                    isLastPage === false && (
                        <a href="#" style={styleNextButton} onClick={handleNextClick} className={baseLinkClass}>
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