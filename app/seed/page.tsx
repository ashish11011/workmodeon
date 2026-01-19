import { db } from "@/db/drizzle";
import { companies, jobs } from "@/db/schema";
import { randomUUID } from "crypto";

export default async function Page() {
    // const companyId1 = randomUUID();
    // const companyId2 = randomUUID();

    // await db.insert(companies).values([
    //     {
    //         id: companyId1,
    //         name: "AV Technosys",
    //         description: "Service-based software company",
    //         addressLine1: "IT Park Road",
    //         city: "Indore",
    //         state: "Madhya Pradesh",
    //         country: "India",
    //         pincode: "452010",
    //         linkedInURL: "https://linkedin.com/company/av-technosys",
    //         email: "hr@avtechnosys.com",
    //         number: "+91-9876543210",
    //         website: "https://avtechnosys.com",
    //         isAdminApproved: true,
    //     },
    //     {
    //         id: companyId2,
    //         name: "WMO Labs",
    //         description: "AI-powered hiring platform startup",
    //         city: "Bengaluru",
    //         state: "Karnataka",
    //         country: "India",
    //         pincode: "560001",
    //         linkedInURL: "https://linkedin.com/company/wmo",
    //         email: "founders@wmo.ai",
    //         number: "+91-9123456789",
    //         website: "https://wmo.ai",
    //         isAdminApproved: true,
    //     },
    // ]);

    // await db.insert(jobs).values([
    //     {
    //         companyId: companyId1,
    //         title: "Full Stack Developer Intern",
    //         description: "Work on Next.js, Node.js, and PostgreSQL projects.",
    //         jobType: "INTERNSHIP",
    //         skillsRequired: "Next.js, Node.js, PostgreSQL",
    //         isActive: true,
    //     },
    //     {
    //         companyId: companyId1,
    //         title: "Backend Developer",
    //         description: "Build scalable APIs using Node.js and Drizzle ORM.",
    //         jobType: "JOB",
    //         skillsRequired: "Node.js, PostgreSQL, REST APIs",
    //         isActive: true,
    //     },
    //     {
    //         companyId: companyId2,
    //         title: "AI Chatbot Engineer",
    //         description: "Develop AI-powered job matching chatbot.",
    //         jobType: "JOB",
    //         skillsRequired: "LLMs, Python, Node.js",
    //         isActive: true,
    //     },
    //     {
    //         companyId: companyId2,
    //         title: "Freelance UI Developer",
    //         description: "Short-term contract for landing page redesign.",
    //         jobType: "FREELANCE",
    //         skillsRequired: "React, Tailwind CSS",
    //         isActive: true,
    //     },
    // ]);

    // console.log("✅ Companies and Jobs seeded successfully");

    return (
        <div>Seeded successfully</div>
    )
}