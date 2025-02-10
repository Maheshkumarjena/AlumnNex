import User from "@/models/User";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        const user = await User.findOne({ email: body.email });

        if (user) {
            const token = jwt.sign(
                { id: user._id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );

            const { password: hashedPassword, ...rest } = user.toObject();
            const expiresIn = Date.now() + 3600000;

            const response = NextResponse.json({
                message: 'Sign In successful',
                user: rest,
                expiresIn
            }, { status: 200 });

            response.cookies.set('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 3600000,
            });

            return response;

        } else {
            const generatedPassword = Math.random().toString(36).slice(-8) + 
                                    Math.random().toString(36).slice(-8);
            const hashedpassword = bcryptjs.hashSync(generatedPassword, 10);
            const generatedUsername = body.username.split(" ").join("").toLowerCase() + 
                                    Math.floor(Math.random() * 10000);

            const newUser = new User({
                username: generatedUsername,
                email: body.email,
                password: hashedpassword,
                accountType: body.accountType,
                profilePicture: body.photoURL,
            });

            await newUser.save();
            
            const token = jwt.sign(
                { id: newUser._id, email: newUser.email },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );

            const expiresIn = Date.now() + 3600000;

            const response = NextResponse.json({
                message: 'Sign In successful',
                user: {
                    username: newUser.username,
                    email: newUser.email,
                    accountType: newUser.accountType,
                    profilePicture: newUser.profilePicture
                },
                expiresIn
            }, { status: 200 });

            response.cookies.set('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 3600000,
            });

            return response;
        }

    } catch (error) {
        console.error("Google auth error:", error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}