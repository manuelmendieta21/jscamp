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

## Comandos

- npm run dev
- npm run build
- npm run preview

##Logica de negocio

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

