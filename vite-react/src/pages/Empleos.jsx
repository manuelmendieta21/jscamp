import { useState } from "react";
import Header from "../components/Header.jsx";
import Jobs from "../components/Jobs.jsx";
import Footer from "../components/Footer.jsx";
import { Pagination } from "../components/Pagination.jsx";
import JobListings from "../components/JobListings.jsx";


import jobsData from "../components/jobsData.json";

//Definimos la constante que definira la cantidad cards a cargar por pagina
const RESUL_PER_PAGE = 3;

export default function Empleos() {
    //Paginacion currentPage controla la pagina actual
    const [currentPage, setCurrentPage] = useState(1);
    //console.log({currentPage});
    //Controlamos la paginacion calculando los objetos devueltos jobsData con length y lo dividimos por la cantidad elementos que queremos mostrar.
    //aproximamos con Math . Ceil 
    const totalPages = Math.ceil(jobsData.length/RESUL_PER_PAGE);
    
    //console.log({totalPages});
    //Ahora debemos controlar en base a lo calculado como mostrar las pagination 
    const  pagesResults = jobsData.slice((currentPage - 1 ) * RESUL_PER_PAGE, currentPage * RESUL_PER_PAGE)
    //console.log(pagesResults);

    
    
    const handlePageChange = (page) => {
        console.log(page);
        //valor de la pagina actual
        setCurrentPage(page);
    }



    return (
        <div>
            <Header />
            <Jobs />
            <JobListings  jobs={pagesResults} />
            <Pagination onPageChange={handlePageChange} currenPage={currentPage} totalPages={totalPages} />
            <Footer />
        </div>
    )
}