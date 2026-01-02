//mostrar los jobs empleos que tenemos reemplazando el fect para recorrer.
import { useState } from "react";

export default function JobCard({ job }) {
    const [isApplied, setIsApplied] = useState(false)
    const handApplyClick = () => {
        setIsApplied(true)
    }

    const buttonClasses = isApplied
        ? 'flex items-center justify-start bg-[#4caf50] pointer-events-none text-white px-4 py-2 rounded transition-all duration-200 active:scale-95'
        : 'flex items-center justify-end bg-[#09f] text-white px-4 py-2 rounded transition-all duration-200 active:scale-95 hover:bg-primary-hover hover:outline hover:outline-2 hover:outline-white hover:outline-offset-2';

    //Definimos la condicion para que se cumpla validando si isApplied es true o false, al inicio sea false ya que lo inicializamos el estado en (false)
    const buttonText = isApplied ? 'Aplicado' : 'Aplicar'

    return (
        <article
            className="flex flex-col gap-4 bg-card-bg p-6 mb-6 rounded-3xl border border-white/5 shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-primary/10 hover:-translate-y-1 relative overflow-hidden group max-md:p-4"
            data-modalidad={job.modalidad}
            data-nivel={job.data.nivel}
            data-technology={job.data.technology}
        >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-light/10 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
            <div className="pb-4 text-lg mb-2 max-md:text-base max-sm:text-sm">
                <h3 className="pb-4 font-bold">{job.titulo}</h3>
                <small className="text-text-muted text-sm">{job.empresa} | {job.ubicacion}</small>
                <p className="text-text-muted text-[90%] mx-8 my-0 max-sm:mx-4">{job.descripcion}</p>
            </div>
            <div className="flex justify-end">
                {/*Enviamos las variables que definimos en la parte superior con la validacion al dar click enviamos el cambio de estado al botton y cambiamos el texto buttonText*/}
                <button className={buttonClasses} onClick={handApplyClick}>{buttonText}</button>
            </div>

        </article>
    )
}