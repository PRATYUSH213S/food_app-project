import mongoose from "mongoose"

const connectDb=async () => {
    const mongoUrl=process.env.MONGODB_URL
    if(!mongoUrl){
        throw new Error("MONGODB_URL env var is missing")
    }
    try {
        await mongoose.connect(mongoUrl)
        console.log("db connected")
    } catch (error) {
        console.error("db error:", error?.message || error)
        throw error
    }
}

export default connectDb