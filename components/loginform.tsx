import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import AuthCard from "./authcard"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function LoginForm() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setLoading(true)

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            })

            const data = await res.json()
            console.log("data: ", data)
            if (!res.ok) {
                throw new Error(data.message || "Login failed")
            }

            // Redirect to dashboard
            router.push("/dashboard")
        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <AuthCard>
            <h2 className="text-2xl font-semibold mb-4">Sign in to your account</h2>
            <p className="text-sm text-muted-foreground">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, voluptate.</p>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <form onSubmit={handleLogin} className=" mt-8 space-y-4">
                <div>
                    <label className="text-sm font-medium">Email address</label>
                    <Input
                        type="email"
                        className="h-12 mt-1"
                        placeholder="hello@example.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label className="text-sm font-medium">Password</label>
                    <Input
                        type="password"
                        className="h-12 mt-1"
                        placeholder="••••••••"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <Button
                    size="lg"
                    className="w-full h-12 mt-2 rounded-full bg-black hover:bg-neutral-800"
                    disabled={loading}
                >
                    {loading ? "Signing in..." : "Sign in"}
                </Button>
            </form>

            <p className="mt-4 text-center text-sm text-muted-foreground">
                Don’t have an account? <Link href="/auth/signup" className="font-medium">Sign up</Link>
            </p>
        </AuthCard>
    )
}
