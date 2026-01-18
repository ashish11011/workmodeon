import Link from "next/link"
import AuthCard from "./authcard"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function LoginForm() {
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: call login API
    }

    return (
        <AuthCard>
            <h2 className="text-2xl font-semibold mb-4">Sign in to your account</h2>
            <p className="text-sm text-muted-foreground">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, voluptate.</p>
            <form onSubmit={handleLogin} className=" mt-8 space-y-4">
                <div>
                    <label className="text-sm font-medium">Email address</label>
                    <Input type="email" className="h-12 mt-1" placeholder="hello@example.com" required />
                </div>

                <div>
                    <label className="text-sm font-medium">Password</label>
                    <Input type="password" className="h-12 mt-1" placeholder="••••••••" required />
                </div>

                <Button size="lg" className="w-full h-12 mt-2 rounded-full bg-black hover:bg-neutral-800">
                    Sign in
                </Button>
            </form>

            <p className="mt-4 text-center text-sm text-muted-foreground">
                Don’t have an account? <Link href="/auth/signup" className="font-medium">Sign up</Link>
            </p>
        </AuthCard>
    )
}
