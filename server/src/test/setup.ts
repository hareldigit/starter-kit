import { beforeAll, afterAll, afterEach } from 'vitest'
import mongoose from 'mongoose'
import {getConfig} from "@/config";

beforeAll(async () => {
    const config = getConfig();
    await mongoose.connect(config.mongodb.uri)
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