import express from 'express';
import cors from 'cors';
import {getConfig} from '@/config';

export const setupMiddleware = (app: express.Application) => {
    app.use(cors(getConfig().cors));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
};
