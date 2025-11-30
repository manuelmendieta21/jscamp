import Header from "../components/Header.jsx";
import Jobs from "../components/Jobs.jsx";
import Footer from "../components/Footer.jsx";
import { Pagination } from "../components/Pagination.jsx";

export default function Empleos() {
    return (
        <div>
            <Header />
            <Jobs />
            <Pagination />

            <Footer />
        </div>
    )
}