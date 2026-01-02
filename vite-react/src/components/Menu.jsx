import backgroundFoto from "./images/background.webp"

export default function Menu() {
    return (
        <div className="bg-background">
            <section className="min-h-[600px] flex flex-col justify-center items-center text-center gap-8 relative overflow-hidden px-4 py-20">
                <div className="absolute inset-0 -z-10">
                    <img src={backgroundFoto} className="w-full h-full object-cover opacity-30 mask-image-b-fade" alt="Background office" />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
                </div>

                <div className="flex flex-col justify-center items-center max-w-4xl ">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-8">
                        Encuentra el trabajo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">tus sueños</span>
                    </h1>
                </div>
                <div className="flex items-center justify-center mb-auto">
                    <div className="lg:max-h-[150px] lg:max-w-[650px] max-h-[100px] max-w-[350px] mx-auto px-4">
                        <p className="text-text-secondary md:text-lg text-center leading-relaxed">
                            Únete a la comunidad más grande de desarrolladores y encuentra tu próxima gran oportunidad profesional hoy mismo.
                        </p>
                    </div>
                </div>


                <form role="search" className="rounded-lg border border-white/5 shadow-lg bg-background/50 backdrop-blur-xl bg-opacity-95 lg:w-[500px] sm:w-[250px] z-10 transition-all duration-200 hover:border-primary/5 hover:outline hover:outline-2 hover:outline-offset-2 active:scale-95">
                    <div className="flex items-center bg-input-bg rounded-lg shadow-lg h-12 border border-white/5 focus-within:border-primary/5 transition-all duration-200 gap-2 max-md:flex-col max-md:h-20 max-md:gap-1">
                        <div className="flex items-center justify-center w-12">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-search pl-3 text-text-muted flex shrink-0 w-8 h-8">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                <path d="M21 21l-6 -6" />
                            </svg>
                        </div>
                        <input
                            required
                            type="text"
                            placeholder="Buscar empleos"
                            className="flex-1 bg-input-bg border-none outline-none text-white py-3 px-2 text-base font-inherit 
                           placeholder:text-[#64748b] 
                           md:placeholder:text-base md:placeholder:opacity-100
                           max-sm:placeholder:opacity-0 max-sm:placeholder:text-transparent
                           max-md:text-sm"
                        />
                        <div className="flex sm:p-2 lg:w-20">
                            <button type="submit" className="">Buscar</button>
                        </div>
                    </div>
                </form>
            </section >

            <section className="py-16 px-6 md:px-12 bg-background/50 backdrop-blur-xl bg-opacity-95">
                <header className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">¿Por qué DevJobs?</h2>
                    <p className="text-text-secondary text-lg">
                        Somos la plataforma líder diseñada por y para desarrolladores.
                        Conectamos el mejor talento tech con las empresas más innovadoras del mundo.
                    </p>
                </header>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 max-w-7xl mx-auto">
                    <article className="group bg-card-bg p-8 rounded-2xl border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 flex flex-col items-center text-center">
                        <div className="bg-primary/10 p-5 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-10 h-10 text-primary-light">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Encuentra tu ideal</h3>
                        <p className="text-text-muted leading-relaxed">
                            Accede a miles de ofertas verificadas de las mejores empresas tecnológicas a nivel global.
                        </p>
                    </article>

                    <article className="group bg-card-bg p-8 rounded-2xl border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 flex flex-col items-center text-center">
                        <div className="bg-primary/10 p-5 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-10 h-10 text-primary-light">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Conecta directamente</h3>
                        <p className="text-text-muted leading-relaxed">
                            Sin intermediarios. Habla directamente con los equipos técnicos y de reclutamiento.
                        </p>
                    </article>

                    <article className="group bg-card-bg p-8 rounded-2xl border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 flex flex-col items-center text-center">
                        <div className="bg-primary/10 p-5 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-10 h-10 text-primary-light">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Salarios Transparentes</h3>
                        <p className="text-text-muted leading-relaxed">
                            Conoce el rango salarial antes de aplicar y negocia con confianza usando nuestra base de datos.
                        </p>
                    </article>
                </div>
            </section>

        </div >
    )
}