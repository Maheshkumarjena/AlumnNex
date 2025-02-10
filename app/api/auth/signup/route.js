import User from "@/models/User";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const sourceRoute = request.headers.get('x-source-is-type');
        const body = await request.json();
        
        let { username, email, password, dob, almaMater, lastYearOfEducation } = body;
        const hashedpassword = bcryptjs.hashSync(password, 10);
        
        let newUser;
        
        if (sourceRoute === 'Student') {
            newUser = new User({ 
                username, 
                email, 
                password: hashedpassword, 
                dob, 
                accountType: sourceRoute 
            });
        } else if (sourceRoute === 'Alumni') {
            newUser = new User({ 
                username, 
                email, 
                password: hashedpassword, 
                dob, 
                almaMater, 
                lastYearOfEducation, 
                accountType: sourceRoute 
            });
        } else {
            return NextResponse.json(
                { error: 'Invalid source route provided.' },
                { status: 400 }
            );
        }

        await newUser.save();
        return NextResponse.json(
            { message: 'User successfully registered!' },
            { status: 201 }
        );

    } catch (error) {
        console.error("Signup error:", error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}