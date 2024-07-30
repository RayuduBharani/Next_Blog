import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req : NextRequest) {
    const getcookies : ReadonlyRequestCookies = cookies();
    
    const path :string = req.nextUrl.pathname;
    const publicPath :boolean =  path === "/sign-in" || path === "/sign-up" || path === "/";
    const token :string = getcookies.get("token")?.value || "";
    
    if(publicPath && token !== ''){
        return NextResponse.redirect(new URL("/", req.nextUrl));
    }

    if(!publicPath && token === ''){
        return NextResponse.redirect(new URL("/sign-in", req.nextUrl));
    }
}

export const config = {
    matcher: ['/sign-in', '/sign-up' , '/Dashboard' , '/Blogs' , '/NewPost'  ],
};
