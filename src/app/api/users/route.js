import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server"

connectDb();

// get request function
export function GET(request) {

    const users = [
        {
            name: "Shivam",
            phone: "54214",
            course: "wd"
        },
        {
            name: "karan",
            phone: "54214",
            course: "wd"
        },
        {
            name: "hitesh",
            phone: "54214",
            course: "wd"
        },
    ]

    return NextResponse.json(users)
}

// post request function
export async function POST(request) {
    const body = request.body;
    // console.log(body);
    // console.log(request.method);
    // console.log(request.cookies);
    // console.log(request.headers);
    // console.log(request.nextUrl.pathname);

    // const jsonData = await request.json();
    // console.log(jsonData);

    const textData = await request.text();
    console.log(textData);

    return NextResponse.json({
        message: "posting user data"
    })
}

// delete request function
export function DELETE() {
    console.log("Delete API Called");
    return NextResponse.json(
        {
        message: "Deleted !!",
        status: true
        }, 
        { status: 201, statusText:"chamged satetus text" }
    );
}

export function PUT() {}