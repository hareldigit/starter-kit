import mongoose from 'mongoose'
import config from './index'

export const connectDB = async () => {
    try {
        await mongoose.connect(config.mongodb.uri)
        console.log(`MongoDB Connected to ${config.env} database`)
    } catch (error) {
        console.error('Error connecting to MongoDB:', error)
        process.exit(1)
    }
}

export const disconnectDB = async () => {
    await mongoose.connection.close()
}