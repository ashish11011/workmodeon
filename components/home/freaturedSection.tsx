import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
    Briefcase,
    Users,
    Bot,
} from "lucide-react"

export default function WMOFeaturesSection() {
    return (
        <section className="w-full py-20 bg-background">
            <div className="container mx-auto px-4 text-center max-w-6xl">

                {/* Badge */}
                <Badge variant="secondary" className="mb-6">
                    Platform Overview
                </Badge>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    Work Mode On (WMO)
                </h2>

                {/* Subtitle */}
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg mb-16">
                    A smart platform for jobs, internships, and real-time freelance work.
                    WMO bridges the gap between students, professionals, colleges, and
                    companies using AI-powered matchmaking and direct hiring.
                </p>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Card 1 */}
                    <Card className="border-muted">
                        <CardContent className="pt-8 text-center">
                            <div className="flex justify-center mb-5">
                                <Users className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="font-semibold text-xl mb-3">
                                Centralized Hiring Ecosystem
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Connect students, job seekers, startups, colleges, and hiring
                                agencies on a single platform with structured candidate pools
                                and direct communication.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 2 */}
                    <Card className="border-muted">
                        <CardContent className="pt-8 text-center">
                            <div className="flex justify-center mb-5">
                                <Bot className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="font-semibold text-xl mb-3">
                                AI-Powered Job Matching
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Intelligent chatbot-based search, skill recommendations,
                                automated job matching, and smart shortlisting to reduce
                                hiring time.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 3 */}
                    <Card className="border-muted">
                        <CardContent className="pt-8 text-center">
                            <div className="flex justify-center mb-5">
                                <Briefcase className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="font-semibold text-xl mb-3">
                                Jobs, Internships & Freelance
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Full-time jobs, internships, and instant freelance work with
                                swipe-based discovery, real-time notifications, and portfolio
                                driven applications.
                            </p>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </section>
    )
}
