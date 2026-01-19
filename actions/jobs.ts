"use server";

import { db } from "@/db/drizzle";
import { companies, jobs } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getJobs() {
    try {
        const jobsData = await db
            .select({
                id: jobs.id,
                title: jobs.title,
                description: jobs.description,
                jobType: jobs.jobType,
                skillsRequired: jobs.skillsRequired,
                createdAt: jobs.createdAt,
                company: {
                    name: companies.name,
                    city: companies.city,
                    country: companies.country,
                    profileImage: companies.id // Placeholder or add image column if exists
                },
            })
            .from(jobs)
            .innerJoin(companies, eq(jobs.companyId, companies.id))
            .where(eq(jobs.isActive, true));

        return { success: true, data: jobsData };
    } catch (error) {
        console.error("Error fetching jobs:", error);
        return { success: false, error: "Failed to fetch jobs" };
    }
}
