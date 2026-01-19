import { useState } from "react"
import { useRouter } from "next/navigation"
import AuthCard from "./authcard"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function VerifyOtpForm({ email }: { email?: string }) {
    const router = useRouter()
    const [code, setCode] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (!email) {
            setError("Email is missing. Please try signing up again.")
            return
        }

        setLoading(true)
        try {
            const res = await fetch("/api/auth/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, code }),
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || "Verification failed")
            }

            // Redirect to dashboard or login
            router.push("/dashboard")
        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <AuthCard>
            <h2 className="text-2xl font-semibold mb-4">
                Verify your email
            </h2>

            <p className="text-sm text-muted-foreground">
                Enter the 6-digit OTP sent to your email address {email ? `(${email})` : ""}.
            </p>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <form onSubmit={handleVerify} className="mt-8 space-y-4">
                <div>
                    <label className="text-sm font-medium">
                        Verification code
                    </label>
                    <Input
                        type="text"
                        maxLength={6}
                        className="h-12 mt-1 text-center tracking-widest text-lg"
                        placeholder="123456"
                        required
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </div>

                <Button
                    size="lg"
                    className="w-full h-12 mt-2 rounded-full bg-black hover:bg-neutral-800"
                    disabled={loading}
                >
                    {loading ? "Verifying..." : "Verify & Continue"}
                </Button>
            </form>
        </AuthCard>
    )
}
