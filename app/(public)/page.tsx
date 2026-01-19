import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent as CardContentComponent } from "@/components/ui/card";
import { ArrowRight, Briefcase, GraduationCap, Sparkles, User, Users } from "lucide-react";
import WMOFeaturesSection from "@/components/home/freaturedSection";
import FaqSection from "@/components/home/faq";
import HowWMOWorks from "@/components/home/whoWork";


export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden bg-white">

        {/* DOTTED BACKGROUND */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* HERO CONTENT */}
        <section className="relative z-10 container mx-auto px-6 py-28 text-center">

          <Badge className="mb-6 px-4 py-1 text-sm">
            🚀 Work Mode On — WMO
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            Your First Real Entry into the{" "}
            <span className="text-primary">Business World</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Bridging students, colleges, and startups through internships,
            freelance work, and skill-based hiring - faster than traditional platforms.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg">
              Join as Candidate <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Hire Talent
            </Button>
          </div>
        </section>

        {/* FLOATING CARDS */}
        <div className="relative h-[420px] max-w-7xl mx-auto">

          {/* LEFT CARD */}
          <FloatingCard className="left-10 top-20 rotate-[-6deg]">
            <CardContent
              icon={<Briefcase />}
              title="Frontend Intern"
              subtitle="Startup • Remote"
              meta="React • Tailwind • 3 Months"
            />
          </FloatingCard>

          {/* RIGHT CARD */}
          <FloatingCard className="right-10 top-32 rotate-[6deg]">
            <CardContent
              icon={<User />}
              title="Rahul Sharma"
              subtitle="B.Tech • 3rd Year"
              meta="UI/UX • React • Freelance Ready"
            />
          </FloatingCard>

          {/* BOTTOM CARD */}
          <FloatingCard className="left-1/2 bottom-10 -translate-x-1/2 rotate-[2deg]">
            <CardContent
              icon={<Briefcase />}
              title="One-Time Freelance Task"
              subtitle="Landing Page Design"
              meta="₹5,000 • 3 Days"
            />
          </FloatingCard>
        </div>
      </div>
      <BelowHero />
      <WMOFeaturesSection />
      <FaqSection />
    </>
  );
}

/* ---------------- COMPONENTS ---------------- */

function FloatingCard({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <div
      className={`absolute ${className} transition-transform duration-500 hover:scale-105`}
    >
      <Card className="w-72 bg-white/80 backdrop-blur-xl shadow-xl border border-gray-200">
        {children}
      </Card>
    </div>
  );
}

function CardContent({ icon, title, subtitle, meta }: { icon: React.ReactNode; title: string; subtitle: string; meta: string }) {
  return (
    <div className="p-5 space-y-2">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-md bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">{subtitle}</p>
      <p className="text-xs text-gray-500">{meta}</p>
    </div>
  );
}



/* ---------------- BELOW HERO ---------------- */

export function BelowHero() {
  return (
    <div className="relative  overflow-hidden">

      {/* TRUSTED BY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-500 mb-6">
            Trusted by students, startups & institutions
          </p>

          <div className="flex flex-wrap justify-center gap-10 opacity-70">
            {["Startups", "Colleges", "Incubators", "EdTech", "Agencies"].map(
              (item) => (
                <span
                  key={item}
                  className="text-lg font-semibold tracking-wide"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* WHY WMO */}
      <section className="relative py-28 bg-gray-50">
        <DotBg />

        <div className="relative max-w-7xl mx-auto container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Why Work Mode On?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <InfoCard
              icon={<Users />}
              title="Disconnected Hiring"
              text="Students, colleges, and startups operate in silos with no unified platform."
            />
            <InfoCard
              icon={<GraduationCap />}
              title="Unprepared Talent"
              text="Degrees exist, but industry exposure and skills are missing."
            />
            <InfoCard
              icon={<Briefcase />}
              title="Slow Recruitment"
              text="Hiring takes weeks when startups need talent immediately."
            />
          </div>
        </div>
      </section>

      <HowWMOWorks />

      {/* WHO IT'S FOR */}
      <section className="relative py-28 bg-gray-50">
        <DotBg />

        <div className=" max-w-7xl relative container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Built for the Future Workforce
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Persona
              icon={<GraduationCap />}
              title="Students"
              desc="Internships, freelance work & real industry exposure."
            />
            <Persona
              icon={<Briefcase />}
              title="Startups"
              desc="Fast access to skilled, ready-to-work talent."
            />
            <Persona
              icon={<Users />}
              title="Colleges"
              desc="Placement support and market trend insights."
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      {/* <section className="py-28 bg-black text-white text-center">
        <div className="container mx-auto px-6">
          <Sparkles className="mx-auto mb-6 h-10 w-10 text-primary" />
          <h2 className="text-4xl font-bold mb-6">
            Turn Your Work Mode <span className="text-primary">On</span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-10">
            Join the ecosystem where skills meet opportunity — faster,
            smarter, and more human.
          </p>
          <Button size="lg">
            Get Started
          </Button>
        </div>
      </section> */}
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function DotBg() {
  return (
    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:18px_18px]" />
  );
}

function InfoCard({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) {
  return (
    <Card className="bg-white/80 backdrop-blur-xl border border-gray-200 shadow-md">
      <CardHeader>
        <div className="p-2 w-fit rounded-md bg-primary/10 text-primary mb-3">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContentComponent className="text-gray-600">
        {text}
      </CardContentComponent>
    </Card>
  );
}

function StepCard({ title, steps }: { title: string, steps: string[] }) {
  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContentComponent className="space-y-4 text-gray-600">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4">
            <div className="h-6 w-6 flex items-center justify-center rounded-full bg-primary text-white text-sm">
              {index + 1}
            </div>
            <p>{step}</p>
          </div>
        ))}
      </CardContentComponent>
    </Card>
  );
}

function Persona({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <Card className="text-center bg-white/80 backdrop-blur-xl border shadow-md">
      <CardContentComponent className="p-8 space-y-4">
        <div className="mx-auto w-fit p-3 rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="text-gray-600">{desc}</p>
      </CardContentComponent>
    </Card>
  );
}
