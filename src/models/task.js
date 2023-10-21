import mongoose, { Schema } from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    addedDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    status: {
        type: String,
        enum: ["pending", "completed", "just_added"],
        default: "pending"
    },
    userId: {
        type: mongoose.ObjectId,    //  kisi dusre object se value ya id lane ke liye ham mongoose.ObjectId ka use karte hai
        required: true
    }
});

export const Task = mongoose.models.tasks || mongoose.model("tasks", TaskSchema);