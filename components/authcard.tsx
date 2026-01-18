import { ReactNode } from "react"

export default function AuthCard({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="relative w-full max-w-xl rounded-3xl bg-gradient-to-b from-teal-500 to-emerald-200 p-8 shadow-lg">
                <div className="rounded-2xl w-full h-full bg-white p-8 shadow-md">
                    {children}
                </div>
            </div>
        </div>
    )
}
