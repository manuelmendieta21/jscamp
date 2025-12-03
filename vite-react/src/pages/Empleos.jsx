import { useState } from "react";
import Header from "../components/Header.jsx";
import Jobs from "../components/Jobs.jsx";
import Footer from "../components/Footer.jsx";
import { Pagination } from "../components/Pagination.jsx";
import JobListings from "../components/JobListings.jsx";

export default function Empleos() {
    //Paginacion currentPage controla la pagina actual
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = 10;
    const handlePageChange = (page) => {
        console.log(page);
        //valor de la pagina actual
        setCurrentPage(page);
    }
    return (
        <div>
            <Header />
            <Jobs />
            <JobListings />
            <Pagination onPageChange={handlePageChange} currenPage={currentPage} totalPages={totalPages} />
            <Footer />
        </div>
    )
}