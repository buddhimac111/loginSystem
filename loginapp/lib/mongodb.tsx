import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
    throw new Error("Please define the MONGO_URI environment variable inside .env.local");
}

export const connectToMongoDB = async () => {
    try {
        const { connection } = await mongoose.connect(MONGODB_URI)

        if (connection.readyState === 1) {
            return Promise.resolve(true)
        }

    } catch (error) {
        return Promise.reject(error)
    }
}