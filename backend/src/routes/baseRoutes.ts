import { Router } from 'express';
import {BaseController} from '../controllers/baseController';
import {IBaseService} from "@/types/base";
import { Document } from 'mongoose';
import * as core from "express-serve-static-core";


export abstract class BaseRoutes<
    T extends Document,
    C extends BaseController<T,S>,
    S extends IBaseService<T>
> {
    private readonly router:core.Router;
    protected constructor(protected readonly controller: C) {
        this.router = Router();
        this.router.post('/', this.controller.create);
        this.router.get('/', this.controller.getAll);
        this.router.get('/:id', this.controller.getById);
        this.router.put('/:id', this.controller.update);
        this.router.delete('/:id', this.controller.delete);
    }
    public getRouter():core.Router{
        return this.router;
    }
}