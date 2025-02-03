// middleware.js (or middleware.ts)

import { NextResponse } from 'next/server';
import { getCurrentUser } from './authUtils';


export function middleware(request) {
    // Check if the user is authenticated (e.g., by checking a cookie)
    const user = getCurrentUser();
    
    // If the user is not authenticated and tries to access the profile page, redirect to login
    if (!user) {
        return NextResponse.redirect(new URL('/signin', request.url));
    }

    // If the user is authenticated and tries to access the login page, redirect to profile
    if (user) {
        return NextResponse.redirect(new URL('/profile', request.url));
    }

    // Allow the request to continue
    return NextResponse.next();
}

// middleware.js (or middleware.ts)

export const config = {
    matcher: ['/profile'], // Only run middleware on these routes
};