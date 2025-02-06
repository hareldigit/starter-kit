import { app } from './app';
import { connectDB } from './db';
import config from './config';

const startServer = async () => {
    try {
        await connectDB();
        app.listen(config.port, () => {
            console.info(`Server running in ${config.env} mode on port ${config.port}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
};

if (process.env.NODE_ENV !== 'test') {
    startServer();
}