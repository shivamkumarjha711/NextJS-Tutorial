import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connectDb();

// get request function
export async function GET(request) {
    let users = []
    try {
        users = await User.find().select("-password")
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "failed to get users",
            success: false
        })
    }

    return NextResponse.json(users)
}

// post request function 
// craete user
export async function POST(request) {
    // fetch user details from request
    const {name, email, password, about, profileURL} = await request.json();
    // console.log("signup data", {name, email, password, about, profileURL});

    // create user object with user model
    const user = new User({
        name,
        email,
        password,
        about,
        profileURL
    })

    try {
        // save the object to database
        user.password = bcrypt.hashSync(user.password, parseInt(process.env.BCRYPT_SALT));

        await user.save();

        const response = NextResponse.json(user, {
            status: 201,
            message: "User created successfully"
        })
    
        return response

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to create user !!",
            status: false
        }, {
            status: 500
        })
    }


    // const body = request.body;
    // console.log(body);
    // console.log(request.method);
    // console.log(request.cookies);
    // console.log(request.headers);
    // console.log(request.nextUrl.pathname);

    // const jsonData = await request.json();
    // console.log(jsonData);

    // const textData = await request.text();
    // console.log(textData);

    // return NextResponse.json({
    //     message: "posting user data"
    // })
}
