import { Card, CardContent } from "@/components/ui/card"
import { Building2, User } from "lucide-react"

const companySteps = [
    "Create company profile",
    "Post jobs, internships or freelance tasks",
    "Discover candidates via smart filters",
    "Hire instantly or notify for quick work",
]

const candidateSteps = [
    "Create your skill-based profile",
    "Search or swipe through opportunities",
    "Chatbot helps discover relevant work",
    "Apply or upload portfolio instantly",
]

export default function HowWMOWorks() {
    return (
        <section className="relative py-24 bg-background">
            <div className="container max-w-6xl mx-auto px-4">

                {/* Section Heading */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        How WMO Works
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A simple, fast, and intelligent workflow designed for both
                        companies and candidates.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* For Companies */}
                    <Card className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Building2 className="h-6 w-6 text-primary" />
                                <h3 className="text-xl font-semibold">
                                    For Companies
                                </h3>
                            </div>

                            <ul className="space-y-4">
                                {companySteps.map((step, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-4 text-sm text-muted-foreground"
                                    >
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium">
                                            {index + 1}
                                        </span>
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* For Candidates */}
                    <Card className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <User className="h-6 w-6 text-primary" />
                                <h3 className="text-xl font-semibold">
                                    For Candidates
                                </h3>
                            </div>

                            <ul className="space-y-4">
                                {candidateSteps.map((step, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-4 text-sm text-muted-foreground"
                                    >
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium">
                                            {index + 1}
                                        </span>
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </section>
    )
}
