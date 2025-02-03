import { NextResponse } from 'next/server';

export function middleware(request) {
    console.log("Middleware running...");

    // Get the user authentication token from cookies
    const userToken = request.cookies.get('token')?.value || null;  

    console.log("User Token:", userToken);

    const pathname = request.nextUrl.pathname;

    if (!userToken && pathname === '/Profile') {
        return NextResponse.redirect(new URL('/Signin', request.url));
    }

    if (userToken && pathname === '/Signin') {
        return NextResponse.redirect(new URL('/Profile', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/Profile', '/Signin'], // Apply middleware only to these routes
};
