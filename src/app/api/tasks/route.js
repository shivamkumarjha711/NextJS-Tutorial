
// /api/task

import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// get all the tasks
export async function GET(request) {
    try {
        const tasks = await Task.find()

        return NextResponse.json(tasks);
        
    } catch (error) {
        console.log(error);
        return getResponseMessage("Error in getting data!!", 404, false)
    }
}

// create task
export async function POST(request) {
    const {title, content, userId} = await request.json();  // 1. Ftech user data

    try {
        const task = new Task({         // 2. Process on the data
            title,
            content,
            userId
        })
        const createdTask = await task.save();

        return NextResponse.json(createdTask, {      // 3. return the result
            status: 201
        });

    } catch (error) {
        console.log(error);
        return getResponseMessage("Failed to create Task", 500, false)
    }
}
