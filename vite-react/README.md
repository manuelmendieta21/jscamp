# React + Vite 

Creado con Vite para iniciar un proyecto de React con Vite.
Trabajaremos en los componentes y paginas de manera incremental.

## Componentes 

- Header
- Menu
- Footer
- Jobs
- Pagination
- Search

## Paginas

- Inicio
- Empleos

## Comandos para arrancar el proyecto

- npm run dev
- npm run build
- npm run preview

## Logica de Paginacion

- Pagination 
```
Controlar la paginacion mediante currenPage y totalPages valor de las paginas
export function Pagination({ currenPage = 2, totalPages = 10 }) {
    //Generar un array de paginas a mostrar 
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    //Logica para mostrar o no los botones de paginacion
    const isFirstPage = currenPage === 1;
    const isLastPage = currenPage === totalPages;

    const stylePrevButton = isFirstPage ? { pointerEvents: 'none', opacity: 0.6 } : {};
    const styleNextButton = isLastPage ? { pointerEvents: 'none', opacity: 0.6 } : {};
```
   Creamos una Funcion handlePrevClick que para manejar el evento de click en el boton previo escuchando el evento de click preventDefault() sirve para detener ese comportamiento y así poder manejarlo al igual que validamos si la pagina actual es la primera, si, no es la primera se ejecuta la funcion onPageChange 

   🧠 Frase fácil para recordarlo 
   preventDefault() = “Detén lo que el navegador haría por defecto”.

```
    const handlePrevClick = (event) => {
        event.preventDefault()
        if (isFirstPage === false) {
            onPageChange(currenPage - 1)
        }
    }
```
    //Funcion para manejar el evento de click en el boton siguiente
    const handleNextClick = (event) => {
        event.preventDefault()
        if (isLastPage === false) {
            onPageChange(currenPage + 1)
        }
    }

    //handlePageChange

    const handlePageChange = (event, page) => {
        event.preventDefault()
        if (page !== currenPage) {
            onPageChange(page)
        }
    }

##