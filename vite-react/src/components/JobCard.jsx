//mostrar los jobs empleos que tenemos reemplazando el fect para recorrer.
import { useState } from "react";
import style from "./JobCard.module.css"


export default function JobCard({ job }) {
    const [isApplied,setIsApplied]= useState(false)
    const handApplyClick = () => {
        setIsApplied(true)
    }

    const buttonClasses= isApplied ? 'button-apply-job is-applied' : 'button-apply-job'
    //Definimos la condicion para que se cumpla validando si isApplied es true o false, al inicio sea false ya que lo inicializamos el estado en (false)
    const buttonText = isApplied ? 'Aplicado' : 'Aplicar'

    return (
        <article
            className={style.jobsListingsCard} 
            data-modalidad={job.modalidad}
            data-nivel={job.data.nivel}
            data-technology={job.data.technology}
        >
            <div>
                <h3>{job.titulo}</h3>
                <small>{job.empresa} | {job.ubicacion}</small>
                <p>{job.descripcion}</p>
            </div>
            <div>
                {/*Enviamos las variables que definimos en la parte superior con la validacion al dar click enviamos el cambio de estado al botton y cambiamos el texto buttonText*/}
                <button className={buttonClasses} onClick={handApplyClick}>{buttonText}</button>
            </div>

        </article>
    )
}