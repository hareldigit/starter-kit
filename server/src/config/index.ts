import { ConnectOptions } from 'mongoose'
import { get } from 'lodash-es'

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
    env: import.meta.env.MODE,
    port: parseInt(import.meta.env.PORT || '5000', 10),
    mongodb: {
        uri: import.meta.env.MONGODB_URI || 'mongodb://localhost:27017/starter-kit',
        options: {},
    },
    jwt: {
        secret: import.meta.env.JWT_SECRET || 'your-secret-key',
        expiresIn: '1d',
    },
    cors: {
        origin: (import.meta.env.VITE_CORS_ORIGIN || 'http://localhost:3000').split(','),
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