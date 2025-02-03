import dotenv from 'dotenv'
import { ConnectOptions } from 'mongoose'

dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
})

interface Config {
    env: string;
    port: number;
    mongodb: {
        uri: string;
        options: ConnectOptions;
    };
    jwt: {
        secret: string;
        expiresIn: string;
    };
    cors: {
        origin: string[];
        credentials: boolean;
    };
}

const config: Config = {
    env: process.env.NODE_ENV || 'development',
    port: parseInt(process.env.PORT || '5000', 10),
    mongodb: {
        uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/todo-app',
        options: {
        },
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'your-secret-key',
        expiresIn: '1d',
    },
    cors: {
        origin: (process.env.CORS_ORIGIN || 'http://localhost:3000').split(','),
        credentials: true,
    },
}

const validateConfig = (config: Config) => {
    const requiredFields = ['mongodb.uri', 'jwt.secret']

    for (const field of requiredFields) {
        const value = field.split('.').reduce((obj, key) => obj?.[key], config as any)
        if (!value) {
            throw new Error(`Missing required config field: ${field}`)
        }
    }
}

try {
    validateConfig(config)
} catch (error) {
    console.error('Config validation failed:', error)
    process.exit(1)
}

export default config