import express from 'express';
import cors from 'cors';
import config from '../config';

export const setupMiddleware = (app: express.Application) => {
    app.use(cors(config.cors));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
};
