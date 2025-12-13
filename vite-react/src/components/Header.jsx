import styles from "./Header.module.css"
import { Link } from "react-router-dom"

export default function Cabecera() {
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

                <nav className={styles.navigation}>
                    <Link to="/">Inicio</Link>
                    <Link to="/empleos">Empleos</Link>
                </nav>

                <div className={styles.btnHeader}>
                    <button className={styles.cssbuttons}>
                        <span>
                            Publicar Empleo
                        </span>
                    </button>
                    <button className={styles.cssbuttons}>
                        <span>
                            Inicio Session
                        </span>
                    </button>
                </div>
                
                


            </header>
        </div>
    )
}