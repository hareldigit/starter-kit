import express from 'express';
import { healthCheck } from '@/controllers/healthController';
import { router as todoRouter } from './todoRoutes';

export const setupRoutes = (app: express.Application) => {
  app.get('/api/health', healthCheck);

  app.use('/api/todo', todoRouter);
  app.use(express.static('./public'));
};
