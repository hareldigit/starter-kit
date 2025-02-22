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

let config: Config | null = null;

const loadConfig = (): Config => {
    dotenv.config({  path: `.env${process.env.NODE_ENV === 'test' ? '.test' : ''}`});

    const envConfig = {
        env: process.env.NODE_ENV || 'development',
        port: parseInt(process.env.PORT || '5000', 10),
        mongodb: {
            uri: process.env.MONGODB_URI || '',
            options: {},
        },
        jwt: {
            secret: process.env.JWT_SECRET || '',
            expiresIn: '1d',
        },
        cors: {
            origin: (process.env.CORS_ORIGIN || 'http://localhost:3000').split(','),
            credentials: true,
        },
    }
    validateConfig(envConfig);
    return envConfig;
}

const validateConfig = (config: Config) => {
    const requiredFields = ['mongodb.uri', 'jwt.secret'] as const;

    const missingConfigs = requiredFields.filter(field => {
        const value = get(config, field);
        return !value || value.trim() === '';
    });
    if (missingConfigs.length > 0) {
        throw new Error(`Missing required configs: ${missingConfigs.join(', ')}`);
    }
}

export const getConfig = (): Config => {
    if (config === null) {
        try {
            config = loadConfig();
        } catch (error) {
            console.error('Config validation:', error)
            process.exit(1)
        }
    }

    return config;
};