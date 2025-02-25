import express from 'express';
import { router as todoRouter } from './todoRoutes';
import { healthCheck } from '@/controllers/healthController';

export const setupRoutes = (app: express.Application) => {
  app.get('/api/health', healthCheck);

  app.use('/api/todo', todoRouter);

  app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
  });
};
