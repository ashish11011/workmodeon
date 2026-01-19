import { getJobs } from "@/actions/jobs";
import { JobCard } from "@/components/job-card";

export default async function Page() {
    const { success, data: jobs, error } = await getJobs();

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-8">Available Opportunities</h1>

            {!success && (
                <div className="bg-red-50 text-red-500 p-4 rounded-md">
                    {error}
                </div>
            )}

            {success && jobs && jobs.length === 0 && (
                <div className="text-center py-20 text-muted-foreground">
                    No jobs found. Check back later!
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {jobs?.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    )
}