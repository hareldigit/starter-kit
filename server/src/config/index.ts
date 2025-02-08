import { ConnectOptions } from 'mongoose'
import { get } from 'lodash-es'
import dotenv from 'dotenv'

dotenv.config()

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
        uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/starter-kit',
        options: {},
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

    const missingConfigs = requiredFields.filter(field => !get(config, field));
    if (missingConfigs.length > 0) {
        throw new Error(`Missing required configs: ${missingConfigs.join(', ')}`);
    }
}

try {
    validateConfig(config)
} catch (error) {
    console.error('Config validation:', error)
    process.exit(1)
}

export default config