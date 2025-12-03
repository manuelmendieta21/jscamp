export default function JobCard({ job }) {
    return (
        <article
            className="jobs-listings-card"
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
                <button className="button-apply-job">Aplicar</button>
            </div>

        </article>
    )
}