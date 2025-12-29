export default function Jobs() {
    return (
        <div>
            <main>
                <section className="m-0 p-8 h-auto">
                    <h1 className="text-5xl mb-5">Encuentra tu próximo trabajo</h1>
                    <p>Explora miles de oportunidades en el sector tecnológico.</p>

                    <form id="empleos-search-form" role="search" className="w-full max-w-7xl">
                        <div className="bg-input-bg py-1 px-6 flex items-center gap-2 rounded-lg shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                <path d="M21 21l-6 -6" />
                            </svg>
                            <input name="search" id="empleos-search-input" required type="text"
                                placeholder="Buscar trabajos, empresas o habilidades"
                                className="flex-1 bg-transparent border-none outline-none text-white py-3 px-2 text-base font-inherit placeholder:text-[#64748b]"
                            />
                        </div>

                        <div className="flex flex-wrap mt-2 gap-2">
                            <select name="technology" id="filter-technology" className="p-2.5 bg-[#242d3a] border-0 rounded-lg text-sm text-[#ddd] cursor-pointer appearance-none bg-[url(&quot;data:image/svg+xml,%3Csvg_xmlns='http://www.w3.org/2000/svg'_width='16'_height='16'_viewBox='0_0_24_24'_fill='none'_stroke='white'_stroke-width='2'_stroke-linecap='round'_stroke-linejoin='round'%3E%3Cpolyline_points='6_9_12_15_18_9'/%3E%3C/svg%3E&quot;)] bg-no-repeat bg-[right_0.5rem_center] pr-10 hover:bg-primary-hover hover:text-white focus:outline-2 focus:outline-[#1173d4] focus:outline-offset-2">
                                <option value="">Tecnología</option>
                                <optgroup label="Tecnologías populares">
                                    <option value="javascript">JavaScript</option>
                                    <option value="python">Python</option>
                                    <option value="react">React</option>
                                    <option value="nodejs">Node.js</option>
                                </optgroup>
                                <option value="java">Java</option>
                                <hr />
                                <option value="csharp">C#</option>
                                <option value="c">C</option>
                                <option value="c++">C++</option>
                                <hr />
                                <option value="ruby">Ruby</option>
                                <option value="php">PHP</option>
                            </select>

                            <select name="location" id="filter-location" className="p-2.5 bg-[#242d3a] border-0 rounded-lg text-sm text-[#ddd] cursor-pointer appearance-none bg-[url(&quot;data:image/svg+xml,%3Csvg_xmlns='http://www.w3.org/2000/svg'_width='16'_height='16'_viewBox='0_0_24_24'_fill='none'_stroke='white'_stroke-width='2'_stroke-linecap='round'_stroke-linejoin='round'%3E%3Cpolyline_points='6_9_12_15_18_9'/%3E%3C/svg%3E&quot;)] bg-no-repeat bg-[right_0.5rem_center] pr-10 hover:bg-primary-hover hover:text-white focus:outline-2 focus:outline-[#1173d4] focus:outline-offset-2">
                                <option value="">Ubicación</option>
                                <option value="remoto">Remoto</option>
                                <option value="cdmx">Ciudad de México</option>
                                <option value="guadalajara">Guadalajara</option>
                                <option value="bogota">Bogota</option>
                                <option value="barcelona">Barcelona</option>
                            </select>

                            <select name="experience-level" id="filter-experience-level" className="p-2.5 bg-[#242d3a] border-0 rounded-lg text-sm text-[#ddd] cursor-pointer appearance-none bg-[url(&quot;data:image/svg+xml,%3Csvg_xmlns='http://www.w3.org/2000/svg'_width='16'_height='16'_viewBox='0_0_24_24'_fill='none'_stroke='white'_stroke-width='2'_stroke-linecap='round'_stroke-linejoin='round'%3E%3Cpolyline_points='6_9_12_15_18_9'/%3E%3C/svg%3E&quot;)] bg-no-repeat bg-[right_0.5rem_center] pr-10 hover:bg-primary-hover hover:text-white focus:outline-2 focus:outline-[#1173d4] focus:outline-offset-2">
                                <option value="">Nivel de experiencia</option>
                                <option value="junior">Junior</option>
                                <option value="mid">Mid-level</option>
                                <option value="senior">Senior</option>
                                <option value="lead">Lead</option>
                            </select>
                        </div>
                    </form>

                    <span id="filter-selected-value"></span>
                </section>

            </main>
        </div>
    )
}