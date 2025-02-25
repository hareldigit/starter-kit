import { Request, Response } from 'express';
import {HTTP_STATUS, STATUS_MESSAGES} from "@/constants/http";

export const healthCheck = (req: Request, res: Response) => {
    res.status(HTTP_STATUS.OK).json({
        status: STATUS_MESSAGES.SUCCESS,
        timestamp: new Date().toISOString()
    });
};