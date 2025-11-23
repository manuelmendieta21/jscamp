
export function Cabecera() {
    return (
        <div className="cabecera">
            <header>
                <h1 className="logo">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    DevJobs
                </h1>

                <nav className="navigation">
                    <a href="#">Inicio</a>
                    <a href="#">Empleos</a>
                </nav>

                <div className="btn_Header">
                    <a href="#" className="btn-secondary">Publicar un empleo</a>
                    <a href="#" className="btn-primary">Iniciar sesión</a>
                </div>
            </header>
        </div>
    )
}