import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name Required"]
    },
    email: {
        type: String,
        required: [true, "email Required"]
    },
    password: {
        type: String,
        required: [true, "password Required"]
    },
    about: String,
    profileURL: String,
    // address: {
    //     // street: String,
    //     // city: String,
    //     // country: String,
    //     // pinCode: Number
    // }
})

export const User = mongoose.models.users || mongoose.model("users", UserSchema)