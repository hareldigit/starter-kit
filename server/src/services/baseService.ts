import { Model } from 'mongoose';
import { IBaseService } from '@/types/base';

export abstract class BaseService<T> implements IBaseService<T> {
    protected constructor(protected model: Model<T>) {}

    async create(data: Partial<T>): Promise<T> {
        return this.model.create(data);
    }

    async findById(id: string): Promise<T | null> {
        return this.model.findById(id);
    }

    async findAll(): Promise<T[]> {
        return this.model.find();
    }

    async update(id: string, data: Partial<T>): Promise<T | null> {
        return this.model.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string): Promise<void> {
        await this.model.findByIdAndDelete(id);
    }
}
