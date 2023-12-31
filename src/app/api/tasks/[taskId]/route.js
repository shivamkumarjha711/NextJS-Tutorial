

// api/tasks/{taskId}

import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const {taskId} = params;

    try {
        const task = await Task.findById(taskId);
        return NextResponse.json(task);
    } catch (error) {
        return getResponseMessage("Error in getting task!!", 404, false)
    }
}

export async function PUT(request, {params}) {
    try {
        const {taskId} = params;

        const {title, content, status} = await request.json();

        let task = await Task.findById(taskId)

        task.title = title,
        task.content = content,
        task.status = status

        const updatedTask = await task.save();

        return NextResponse.json(updatedTask)

    } catch (error) {
        return getResponseMessage("Error in updating task", 500, false)
    }
}

export async function DELETE(request, {params}) {
    try {
        const {taskId} = params;

        await Task.deleteOne({
            _id: taskId,
        })

        // await Task.findByIdAndDelete({
        //     _id: taskId
        // })

        // await Task.findByIdAndDelete(taskId)

        return getResponseMessage("task deleted successfully", 201, true)        

    } catch (error) {
        return getResponseMessage("Error in deletig", 500, false)
    }

}

