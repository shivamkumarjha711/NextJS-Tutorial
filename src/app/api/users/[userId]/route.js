import { NextResponse } from "next/server";

export function DELETE(request, { params }) {
    console.log(params);
    // const userId = params.userId;
    const { userId } = params;
    console.log("User Id", userId);

    return NextResponse.json({
        message: "testing delete route"
    })
}