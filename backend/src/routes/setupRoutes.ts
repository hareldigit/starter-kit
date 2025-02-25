import express from 'express';
import { healthCheck } from '@/controllers/healthController';
import { HTTP_STATUS } from '@/constants/http';

export const setupRoutes = (app: express.Application) => {
  app.get('/api/health', healthCheck);

  app.use((req, res) => {
    res.status(HTTP_STATUS.NOT_FOUND).json({ error: 'Not found' });
  });
};
