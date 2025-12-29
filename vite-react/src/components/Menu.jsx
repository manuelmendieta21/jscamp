import backgroundFoto from "./images/background.webp"

export default function Menu() {
    return (
        <div className="bg-background">
            <section className="h-[500px] text-center flex flex-col justify-center items-center gap-6 relative max-md:h-[400px] max-md:gap-4 max-sm:h-[300px] max-sm:gap-3">
                <img src={backgroundFoto} className="absolute w-full h-full object-cover -z-10 left-0 right-0 [mask-image:linear-gradient(to_bottom,rgba(16,25,34,1)_5%,rgba(16,25,34,0)_80%)]" />

                <h1 className="pt-9 max-md:text-4xl max-md:pt-5 max-sm:text-2xl max-sm:pt-2.5">Encuentra el trabajo de tus sueños</h1>
                <p>Únete a la comunidad más grande de desarrolladores y encuentra tu próxima oportunidad.</p>


                <form role="search" className="max-w-2xl w-full mx-auto px-4 max-md:px-2 max-sm:px-1">
                    <div className="flex items-center bg-input-bg rounded-lg shadow-lg p-2 gap-2 max-md:flex-col max-md:gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-search pl-3 text-text-muted flex shrink-0">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                            <path d="M21 21l-6 -6" />
                        </svg>

                        <input required type="text" placeholder="Buscar empleos por título, habilidad o empresa"
                            className="flex-1 bg-transparent border-none outline-none text-white py-3 px-2 text-base font-inherit placeholder:text-[#64748b] max-md:text-sm max-sm:text-xs"
                        />

                        <button type="submit" className="py-3 px-6 rounded-lg bg-primary text-white font-normal border-none cursor-pointer transition-all duration-200 text-base whitespace-nowrap hover:bg-primary-hover hover:outline hover:outline-2 hover:outline-white hover:outline-offset-2 active:scale-90 disabled:opacity-50 disabled:pointer-events-none max-md:text-sm max-md:py-2 max-md:px-4 max-sm:text-xs max-sm:py-1.5 max-sm:px-3">Buscar</button>
                    </div>
                </form>

            </section>

            <section className="px-8 bg-background pt-6">
                <header className="flex flex-col mb-4">
                    <h2 className="max-w-[600px] flex justify-center p-1.5 mx-auto mb-0">¿Por qué DevJobs?</h2>
                    <p className="opacity-75">DevJobs es la principal plataforma de búsqueda de empleo para desarrolladores. Conectamos a los mejores
                        talentos con las empresas más innovadoras.</p>
                </header>

            </section>

            <footer className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 max-md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-md:gap-3 max-sm:grid-cols-1 max-sm:gap-2 px-8 pb-8">
                <article className="flex flex-col gap-4 bg-card-bg p-4 mb-4 rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.5)]">
                    <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true" className="mx-auto self-center text-primary-light bg-[rgba(0,153,255,0.3)] w-16 h-16 rounded-full p-4">
                        <path
                            d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z">
                        </path>
                    </svg>
                    <h3 className="pb-4">Encuentra el trabajo de tus sueños</h3>
                    <p className="text-text-muted text-[90%] justify-items-center mx-8">Busca miles de empleos de las mejores empresas de todo el mundo.</p>
                </article>

                <article className="flex flex-col gap-4 bg-card-bg p-4 mb-4 rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.5)]">
                    <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true" className="mx-auto self-center text-primary-light bg-[rgba(0,153,255,0.3)] w-16 h-16 rounded-full p-4">
                        <path
                            d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z">
                        </path>
                    </svg>
                    <h3 className="pb-4">Conecta con las mejores empresas</h3>
                    <p className="text-text-muted text-[90%] justify-items-center mx-8">Conecta con empresas que están contratando por tus habilidades.</p>
                </article>

                <article className="flex flex-col gap-4 bg-card-bg p-4 mb-4 rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.5)]">
                    <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true" className="mx-auto self-center text-primary-light bg-[rgba(0,153,255,0.3)] w-16 h-16 rounded-full p-4">
                        <path
                            d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z">
                        </path>
                    </svg>
                    <h3 className="pb-4">Obtén el salario que mereces</h3>
                    <p className="text-text-muted text-[90%] justify-items-center mx-8">Obtén el salario que mereces con nuestra calculadora de salarios.</p>
                </article>
            </footer>

        </div>
    )
}