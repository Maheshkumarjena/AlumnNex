import User from "@/models/User";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return NextResponse.json(
                { message: 'User not found' },
                { status: 404 }
            );
        }

        const isPasswordValid = bcryptjs.compareSync(password, existingUser.password);
        if (!isPasswordValid) {
            return NextResponse.json(
                { message: 'Invalid credentials' },
                { status: 401 }
            );
        }

        const token = jwt.sign(
            { id: existingUser._id, email: existingUser.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        const response = NextResponse.json({
            message: 'Sign In successful',
            user: {
                id: existingUser._id,
                email: existingUser.email,
                username: existingUser.username,
                userType: existingUser.accountType,
                dob: existingUser.dob,
                almaMater: existingUser.almaMater
            }
        }, { status: 200 });

        response.cookies.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 3600000, // 1 hour
        });

        return response;

    } catch (error) {
        console.error("Signin error:", error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}