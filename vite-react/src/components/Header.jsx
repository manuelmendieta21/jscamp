import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="bg-background border-b border-border w-full h-[10vh] max-md:h-[20vh] max-md:flex max-md:flex-col max-md:justify-center">
            <header className="flex items-center justify-between px-4 md:px-12 h-full relative max-md:flex-col max-md:items-start max-md:justify-center">
                {/* Logo */}
                <h1 className="flex items-center gap-1 shrink-0 text-primary-light max-md:absolute max-md:top-[-10px] max-md:left-2">
                    <svg
                        className="w-16 h-16 max-md:w-12 max-md:h-12 p-3 max-md:p-1"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    <Link to="/" className="text-4xl max-md:text-2xl font-normal text-[#e7eee6f1] no-underline">
                        DevJobs
                    </Link>
                </h1>

                {/* Menu Toggle (Hamburguesa) */}
                <button
                    className="hidden max-md:flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer z-[100] max-md:ml-0 max-md:mb-8"
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <div className={`w-8 h-1 bg-aliceblue rounded transition-all duration-300 transform origin-[1px] ${menuOpen ? 'rotate-45' : ''} bg-white`} />
                    <div className={`w-8 h-1 bg-aliceblue rounded transition-all duration-300 ${menuOpen ? 'opacity-0 translate-x-5' : ''} bg-white`} />
                    <div className={`w-8 h-1 bg-aliceblue rounded transition-all duration-300 transform origin-[1px] ${menuOpen ? '-rotate-45' : ''} bg-white`} />
                </button>

                {/* Navigation */}
                <nav
                    className={`flex items-center gap-12 max-md:fixed max-md:top-0 max-md:left-0 max-md:w-screen max-md:h-screen max-md:bg-black/90 max-md:flex-col max-md:justify-start max-md:pt-24 max-md:z-[99] transition-transform ${menuOpen ? "max-md:flex" : "max-md:hidden"
                        } md:flex`}
                >
                    <Link
                        to="/"
                        className="text-white hover:text-[#5689e9] text-xl max-md:text-xl max-md:w-full max-md:text-left max-md:px-8 max-md:py-6 max-md:border-b max-md:border-white/10"
                        onClick={toggleMenu}
                    >
                        Inicio
                    </Link>
                    <Link
                        to="/empleos"
                        className="text-white hover:text-[#5689e9] text-xl max-md:text-xl max-md:w-full max-md:text-left max-md:px-8 max-md:py-6 max-md:border-b max-md:border-white/10"
                        onClick={toggleMenu}
                    >
                        Empleos
                    </Link>
                </nav>

                {/* Buttons */}
                <div className="flex items-center gap-4 max-md:mt-2">
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
        </div>
    );
}