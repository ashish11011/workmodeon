import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Briefcase, Building2, MapPin } from "lucide-react";

interface JobProps {
    id: string;
    title: string;
    description: string;
    jobType: string;
    skillsRequired: string | null;
    createdAt: Date | null;
    company: {
        name: string;
        city: string | null;
        country: string | null;
    };
}

export function JobCard({ job }: { job: JobProps }) {
    return (
        <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-4">
                    <div>
                        <h3 className="font-semibold text-lg line-clamp-1">{job.title}</h3>
                        <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                            <Building2 className="h-3 w-3" />
                            <span>{job.company.name}</span>
                        </div>
                    </div>
                    <Badge variant="secondary" className="capitalize shrink-0">
                        {job.jobType.toLowerCase().replace("_", " ")}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="flex-1 pb-3">
                <div className="flex items-center gap-1 text-muted-foreground text-xs mb-3">
                    <MapPin className="h-3 w-3" />
                    <span>
                        {job.company.city ? `${job.company.city}, ` : ""}
                        {job.company.country || "Remote"}
                    </span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                    {job.description}
                </p>
                {job.skillsRequired && (
                    <div className="flex flex-wrap gap-1">
                        {job.skillsRequired.split(',').slice(0, 3).map((skill, i) => (
                            <span key={i} className="text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground">
                                {skill.trim()}
                            </span>
                        ))}
                    </div>
                )}
            </CardContent>
            <CardFooter>
                <Button className="w-full">Apply Now</Button>
            </CardFooter>
        </Card>
    );
}
