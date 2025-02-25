import express from 'express';
import { healthCheck } from '@/controllers/healthController';

export const setupRoutes = (app: express.Application) => {
  app.get('/api/health', healthCheck);

  app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
  });
};
