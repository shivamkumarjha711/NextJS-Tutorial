
// http://localhost:3000/api/users/[userId]/tasks

import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDb();
 
export async function GET(request, {params}) {
    const {userId} = params;
    console.log(userId);

    try {
        // get user using userId
        // const user = await User.findById(userId).select("-password")
        const user = await User.findOne({
            _id: userId
        }).select("-password")

        const tasks = await Task.find({
            userId: userId
        })

        // return NextResponse.json({tasks, user});
        return NextResponse.json(tasks);
    } catch (error) {
        return getResponseMessage("Failed to get task", 404, false)
    }
}