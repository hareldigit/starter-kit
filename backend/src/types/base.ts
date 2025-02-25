import { Document } from 'mongoose';

export interface IBaseService<T extends Document> {
    create(data: Partial<T>): Promise<T>;
    findById(id: string): Promise<T | null>;
    findAll(): Promise<T[]>;
    update(id: string, data: Partial<T>): Promise<T | null>;
    delete(id: string): Promise<void>;
}

export interface IBaseController<T extends Document> {
    create(data: Partial<T>): Promise<T>;
    findById(id: string): Promise<T | null>;
    findAll(): Promise<T[]>;
    update(id: string, data: Partial<T>): Promise<T | null>;
    delete(id: string): Promise<void>;
}

export interface BaseResponse<T> {
    data?: T;
    message?: string;
}

export interface ListResponse<T> extends BaseResponse<T[]> {
    count: number;
}