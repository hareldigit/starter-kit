import express from 'express';
import { errorHandler } from '@/middlewares/errorHandler';
import { setupRoutes } from './routes/setupRoutes';
import { setupMiddleware } from '@/middlewares/setup';

const app = express();

setupMiddleware(app);

setupRoutes(app);

app.use(errorHandler);

export { app };
