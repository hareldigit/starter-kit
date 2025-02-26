import express from 'express';
import { healthCheck } from '@/controllers/healthController';

export const setupRoutes = (app: express.Application) => {
  app.get('/api/health', healthCheck);

  app.use(express.static('./public'));
};
