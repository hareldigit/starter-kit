import express from 'express'
import { errorHandler } from './middleware/errorHandler';
import {setupRoutes} from './routes/setupRoutes';
import {setupMiddleware} from "@/middleware/setup";

const app = express()

setupMiddleware(app);

setupRoutes(app);

app.use(errorHandler);

export {app};