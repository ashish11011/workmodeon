import { authSingIn } from "@/helper/cognito";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    const { email, password } = body;
    try {
        const data = await authSingIn({ email, password });

        return NextResponse.json(data);
    } catch (err: any) {
        console.error(err);
        return NextResponse.json({ error: err.message });
    }
}