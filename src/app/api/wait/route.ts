import { NextResponse } from "next/server";

/**
 * Sample route for testing the API
 */
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const wait = Number(searchParams.get("wait"));

    console.log("will wait");
    await new Promise(resolve => setTimeout(resolve, wait));
    console.log(`waited`);

    return NextResponse.json(
        // `waited ${wait}ms.`,
        `waited ${wait}ms. the time is ${new Date().toISOString()}`,
    );
}
