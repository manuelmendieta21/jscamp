import JobCard from "./JobCard"
import jobsData from "./jobsData.json"

export default function JobListings() {
    return (
        <div>
            <section>
                <h2>Resultados de búsqueda</h2>
                <div className="jobs-listings">
                    {jobsData.map(job => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            </section>
        </div>

    )
}