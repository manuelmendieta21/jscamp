import { Link } from "react-router-dom";
import { useState } from "react";


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-white/10 w-full h-20 max-md:h-auto">
            <header className="flex items-center justify-between px-4 md:px-12 h-full relative">
                {/* Logo */}
                <h1 className="flex items-center gap-2 text-2xl font-bold">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    DevJobs
                </h1>

                {/* Menu Toggle (Hamburguesa) */}
                {/* Menu Toggle (Hamburguesa) */}
                <button
                    className="hidden max-md:flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer z-[100]"
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <div className={`w-8 h-1 bg-white rounded transition-all duration-300 transform origin-[1px] ${menuOpen ? 'rotate-45' : ''}`} />
                    <div className={`w-8 h-1 bg-white rounded transition-all duration-300 ${menuOpen ? 'opacity-0 translate-x-5' : ''}`} />
                    <div className={`w-8 h-1 bg-white rounded transition-all duration-300 transform origin-[1px] ${menuOpen ? '-rotate-45' : ''}`} />
                </button>
                {/* Navigation */}
                <nav
                    className={`flex items-center gap-8 max-md:fixed max-md:inset-0 max-md:bg-background/95 max-md:backdrop-blur-xl max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-8 max-md:overflow-y-auto max-md:z-[99] transition-all duration-300 ease-in-out ${menuOpen ? "max-md:translate-x-0" : "max-md:translate-x-full"
                        } md:flex`}
                >
                    <Link
                        to="/"
                        className="text-text-secondary max-md:text-white max-md:text-2xl font-medium hover:text-primary-light text-lg transition-colors px-2 py-1 relative group"
                        onClick={toggleMenu}
                    >
                        Inicio
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-light transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                        to="/empleos"
                        className="text-text-secondary max-md:text-white max-md:text-2xl font-medium hover:text-primary-light text-lg transition-colors px-2 py-1 relative group"
                        onClick={toggleMenu}
                    >
                        Empleos
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-light transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    {/* Mobile Action Buttons */}
                    <div className="flex flex-col items-center gap-4 md:hidden w-full mt-4">
                        <button className="relative w-40 h-10 bg-gradient-to-r from-[#48cf79] to-[#1136ee] text-white text-sm rounded-lg overflow-hidden group border-none cursor-pointer transition-transform active:scale-95">
                            <span className="relative z-10">Publicar Empleo</span>
                            <div className="absolute top-0 left-[-20%] w-[120%] h-full bg-[#2663b37c] -skew-x-[30deg] transition-transform duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full"></div>
                        </button>
                        <button className="relative w-40 h-10 bg-gradient-to-r from-[#48cf79] to-[#1136ee] text-white text-sm rounded-lg overflow-hidden group border-none cursor-pointer transition-transform active:scale-95">
                            <span className="relative z-10">Inicio Sesión</span>
                            <div className="absolute top-0 left-[-20%] w-[120%] h-full bg-[#2663b37c] -skew-x-[30deg] transition-transform duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full"></div>
                        </button>
                    </div>
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <button className="relative w-32 h-8 md:w-40 bg-gradient-to-r from-[#48cf79] to-[#1136ee] text-white text-sm rounded-lg overflow-hidden group border-none cursor-pointer transition-transform active:scale-95">
                        <span className="relative z-10">Publicar Empleo</span>
                        <div className="absolute top-0 left-[-20%] w-[120%] h-full bg-[#2663b37c] -skew-x-[30deg] transition-transform duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full"></div>
                    </button>
                    <button className="relative w-32 h-8 md:w-40 bg-gradient-to-r from-[#48cf79] to-[#1136ee] text-white text-sm rounded-lg overflow-hidden group border-none cursor-pointer transition-transform active:scale-95">
                        <span className="relative z-10">Inicio Sesión</span>
                        <div className="absolute top-0 left-[-20%] w-[120%] h-full bg-[#2663b37c] -skew-x-[30deg] transition-transform duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full"></div>
                    </button>
                </div>
            </header>
        </div >
    );
}