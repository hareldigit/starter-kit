import { beforeAll, afterAll, afterEach } from 'vitest'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.test' })

beforeAll(async () => {
    if (process.env.MONGODB_URI) {
        await mongoose.connect(process.env.MONGODB_URI)
    }
})

afterEach(async () => {
    const collections = mongoose.connection.collections
    for (const key in collections) {
        await collections[key].deleteMany({})
    }
})

afterAll(async () => {
    await mongoose.connection.close()
})