import mongoose from "mongoose";
import { User } from "@/models/user";

export const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "task_manager",
        })
        console.log("db connected...");
        // console.log(connection);

        // testing and creating new user
        // const uuser = new User({
        //     name: "test",
        //     email: "test@gmail.com",
        //     password: "test@!234",
        //     about: "this is test"
        // })

        // await uuser.save();
        // console.log("user is created");

        console.log("Connected with hoast", connection.host);
    } catch (error) {
        console.log("failed to connect with database");
        console.log(error);
    }
}