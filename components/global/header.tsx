import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Header() {
    return (
        <header className="w-full border-b bg-white">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-teal-500 text-white font-bold">
                        ⚡
                    </div>
                    <span className="text-lg font-semibold">Work Mode On</span>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <Link
                        href="/"
                        className="text-teal-600 hover:text-teal-700 transition-colors"
                    >
                        Home
                    </Link>
                    <Link href="#" className="hover:text-foreground transition-colors">
                        Pricing
                    </Link>
                    <Link href="#" className="hover:text-foreground transition-colors">
                        Blog
                    </Link>
                </nav>

                {/* CTA */}
                <Link href={"/auth/login"}>
                    <Button
                        className={cn(
                            "rounded-full px-6",
                            "bg-gradient-to-r from-teal-500 to-emerald-500",
                            "hover:from-teal-600 hover:to-emerald-600"
                        )}
                    >
                        Get started <ArrowRight />
                    </Button></Link>
            </div>
        </header>
    )
}
