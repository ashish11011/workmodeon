import AuthCard from "./authcard"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function VerifyOtpForm() {
    const handleVerify = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: verify OTP API
    }

    return (
        <AuthCard>
            <h2 className="text-2xl font-semibold mb-4">
                Verify your email
            </h2>

            <p className="text-sm text-muted-foreground">
                Enter the 6-digit OTP sent to your email address.
            </p>

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
                    />
                </div>

                <Button
                    size="lg"
                    className="w-full h-12 mt-2 rounded-full bg-black hover:bg-neutral-800"
                >
                    Verify & Continue
                </Button>
            </form>
        </AuthCard>
    )
}
