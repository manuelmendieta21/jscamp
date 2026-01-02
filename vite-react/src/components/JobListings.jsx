import JobCard from "./JobCard"


export default function JobListings({ jobs }) {
    return (
        <div>
            <section>
                <h2>Resultados de búsqueda</h2>
                <div className="jobs-listings">
                    {/* no usamos foreach por que no devuelve nada por eso usamos .map para devolver un nuevo arreglo con la paginacion */}
                    {jobs.map(job => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            </section>
        </div>

    )
}