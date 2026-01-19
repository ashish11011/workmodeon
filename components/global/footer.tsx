import { Separator } from "@/components/ui/separator";
import { Linkedin, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-white py-24">
            <div className="container mx-auto px-6">

                {/* FOOTER CARD */}
                <div className="relative rounded-3xl border border-gray-200 overflow-hidden bg-white">

                    {/* DOTTED BACKGROUND */}
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

                    {/* CONTENT */}
                    <div className="relative grid md:grid-cols-2 gap-16 p-12">

                        {/* LEFT */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="h-8 w-8 rounded-md bg-primary text-white flex items-center justify-center font-bold">
                                    W
                                </div>
                                <span className="text-xl font-semibold">Work Mode On</span>
                            </div>

                            <h3 className="text-3xl font-bold max-w-md leading-tight">
                                Bridging students and startups for real-world work experience.
                            </h3>
                        </div>

                        {/* RIGHT */}
                        <div className="grid grid-cols-2 gap-10 text-sm">

                            <div>
                                <h4 className="font-semibold mb-4">Pages</h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="hover:text-black cursor-pointer">Home</li>
                                    <li className="hover:text-black cursor-pointer">Jobs</li>
                                    <li className="hover:text-black cursor-pointer">Internships</li>
                                    <li className="hover:text-black cursor-pointer">Pricing</li>
                                    <li className="hover:text-black cursor-pointer">Blog</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-4">Legal</h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="hover:text-black cursor-pointer">Privacy Policy</li>
                                    <li className="hover:text-black cursor-pointer">Terms of Service</li>
                                    <li className="hover:text-black cursor-pointer">Cookie Policy</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <Separator />

                    {/* BOTTOM BAR */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between px-12 py-6 text-sm text-gray-500">
                        <p>© {new Date().getFullYear()} Work Mode On (WMO)</p>

                        <div className="flex gap-4 mt-4 md:mt-0">
                            <SocialIcon icon={<Linkedin />} />
                            <SocialIcon icon={<Twitter />} />
                            <SocialIcon icon={<Instagram />} />
                            <SocialIcon icon={<Github />} />
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}

/* ---------------- COMPONENTS ---------------- */

function SocialIcon({ icon }: { icon: React.ReactNode }) {
    return (
        <div className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 cursor-pointer transition">
            {icon}
        </div>
    );
}
