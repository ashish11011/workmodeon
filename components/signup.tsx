import { useState } from "react"
import Link from "next/link"
import AuthCard from "./authcard"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import VerifyOtpForm from "./verifyOTP"

export default function SignupForm() {
    const [step, setStep] = useState<"signup" | "otp">("signup")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (password !== confirmPassword) {
            setError("Passwords do not match")
            return
        }

        setLoading(true)
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || "Signup failed")
            }

            setStep("otp")
        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    if (step === "otp") {
        return <VerifyOtpForm email={email} />
    }

    return (
        <AuthCard>
            <h2 className="text-2xl font-semibold mb-4">
                Sign up for an account
            </h2>

            <p className="text-sm text-muted-foreground">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit, voluptate.
            </p>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <form onSubmit={handleSignup} className="mt-8 space-y-4">
                <div>
                    <label className="text-sm font-medium">
                        Email address
                    </label>
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
                    <label className="text-sm font-medium">
                        Password
                    </label>
                    <Input
                        type="password"
                        className="h-12 mt-1"
                        placeholder="••••••••"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label className="text-sm font-medium">
                        Confirm Password
                    </label>
                    <Input
                        type="password"
                        className="h-12 mt-1"
                        placeholder="••••••••"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <Button
                    size="lg"
                    className="w-full h-12 mt-2 rounded-full bg-black hover:bg-neutral-800"
                    disabled={loading}
                >
                    {loading ? "Creating account..." : "Create account"}
                </Button>
            </form>

            <p className="mt-4 text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/auth/login" className="font-medium">
                    Sign in
                </Link>
            </p>
        </AuthCard>
    )
}
