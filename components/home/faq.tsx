import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
    return (
        <section className="relative py-32 bg-white">
            <div className="container mx-auto py-4 px-6 max-w-4xl">

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Frequently asked questions
                </h2>

                {/* FAQ */}
                <Accordion
                    type="single"
                    collapsible
                    className="space-y-4  py-4"
                >
                    <FaqItem
                        value="item-1"
                        question="What is Work Mode On (WMO)?"
                        answer="Work Mode On is a platform that connects students, colleges, and startups by providing internships, freelance work, and job opportunities based on real skills and industry demand."
                    />

                    <FaqItem
                        value="item-2"
                        question="Who can use WMO?"
                        answer="Students, fresh graduates, startups, companies, colleges, incubators, and hiring partners can all use WMO to discover opportunities and talent."
                    />

                    <FaqItem
                        value="item-3"
                        question="Is WMO free for students?"
                        answer="Yes, students from partner colleges can access the platform at minimal or no cost. Premium features like profile promotion and advanced swipes may be paid."
                    />

                    <FaqItem
                        value="item-4"
                        question="How do startups benefit from WMO?"
                        answer="Startups get faster access to skill-ready candidates, interns, and freelancers without long recruitment cycles or dependency on personal networks."
                    />

                    <FaqItem
                        value="item-5"
                        question="Does WMO offer freelance or one-time project work?"
                        answer="Yes. Companies can post instant freelance or one-time tasks, and relevant candidates receive real-time notifications."
                    />

                    <FaqItem
                        value="item-6"
                        question="How do colleges collaborate with WMO?"
                        answer="Colleges partner with WMO to share student talent pools, receive market trend insights, and provide students with real-world exposure."
                    />
                    <div className="h-2"></div>
                </Accordion>
            </div>
        </section>
    );
}

/* ---------------- FAQ ITEM ---------------- */

function FaqItem({ value, question, answer }: { value: string, question: string, answer: string }) {
    return (
        <AccordionItem
            value={value}
            className="border border-gray-200 rounded-lg px-6"
        >
            <AccordionTrigger className="text-left text-lg font-medium py-5 hover:no-underline">
                {question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-6">
                {answer}
            </AccordionContent>
        </AccordionItem>
    );
}
