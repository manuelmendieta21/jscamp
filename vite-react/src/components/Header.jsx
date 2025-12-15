import styles from "./Header.module.css"
import { Link } from "react-router-dom"
import { useState } from "react" // 👈 Importamos useState

export default function Cabecera() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={styles.Cabecera}>
            <header className={styles.Header}>

                <h1 className={styles.logotipo}>
                    <svg className={styles.icon} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    <a className={styles.tittleLogo}>DevJobs</a>
                </h1>
                
                {/* 1. Botón Hamburguesa: Siempre visible en el flujo del Header (pero oculto vía CSS en desktop) */}
                <div className={styles.menuToggle} onClick={toggleMenu}>
                    <div className={`${styles.bar} ${menuOpen ? styles.open : ''}`}></div>
                    <div className={`${styles.bar} ${menuOpen ? styles.open : ''}`}></div>
                    <div className={`${styles.bar} ${menuOpen ? styles.open : ''}`}></div>
                </div>

                {/* 2. Navegación: Recibe la clase condicional. */}
                <nav className={`${styles.navigation} ${menuOpen ? styles.open : ''}`}>
                    <Link to="/"  className={styles.navigationA} onClick={toggleMenu}>Inicio</Link>
                    <Link to="/empleos" className={styles.navigationA} onClick={toggleMenu}>Empleos</Link>
                </nav>
                
                {/* 3. Botones: NO reciben la clase condicional, su visibilidad solo es controlada por Media Query. */}
                <div className={styles.btnHeader}>
                    <button className={styles.cssbuttons}>
                        <span>Publicar Empleo</span>
                    </button>
                    <button className={styles.cssbuttons}>
                        <span>Inicio Session</span>
                    </button>
                </div>
            </header>
        </div>
    )
}