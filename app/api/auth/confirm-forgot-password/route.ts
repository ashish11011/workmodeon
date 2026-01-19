import { cognitoConfirmForgotPassword } from "@/helper/cognito";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    const { email, code, newPassword } = body;

    if (!email || !code || !newPassword) {
        return NextResponse.json({ error: 'email, code, and new password are required.' });
    }
    try {
        await cognitoConfirmForgotPassword({ email, code, newPassword });

        return NextResponse.json({ message: 'Password reset successful.' });
    } catch (err: any) {
        console.error('ConfirmForgotPassword error:', err);
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}