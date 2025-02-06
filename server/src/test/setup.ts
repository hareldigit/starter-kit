import { beforeAll, afterAll, afterEach } from 'vitest'
import mongoose from 'mongoose'

if (import.meta.env.MODE !== 'test') {
    console.warn(`Warning: Tests are running in ${import.meta.env.MODE} mode instead of test mode`)
}

beforeAll(async () => {
    if (import.meta.env.MONGODB_URI) {
        await mongoose.connect(import.meta.env.MONGODB_URI)
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