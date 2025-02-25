import { Request, Response } from 'express';
import { BaseResponse, IBaseService, ListResponse } from '@/types/base';
import { HTTP_STATUS } from '@/constants/http';
import { Document } from 'mongoose';

export abstract class BaseController<T extends Document, Service extends IBaseService<T>> {
  protected constructor(protected readonly service: Service) {}

  async create(
    req: Request<object, object, Partial<T>>,
    res: Response<BaseResponse<T>>
  ): Promise<void> {
    try {
      const data = await this.service.create(req.body);
      res.status(HTTP_STATUS.CREATED).json({ data });
    } catch (error) {
      this.handleError(error, 'Failed to create resource', res);
    }
  }

  async getById(req: Request<{ id: string }>, res: Response<BaseResponse<T>>): Promise<void> {
    try {
      const { id } = req.params;
      const data = await this.service.findById(id);

      if (data) {
        res.status(HTTP_STATUS.OK).json({ data });
      } else {
        res.status(HTTP_STATUS.NOT_FOUND).json({
          message: `Resource with id ${id} not found`,
        });
      }
    } catch (error) {
      this.handleError(error, 'Failed to retrieve resource', res);
    }
  }

  async getAll(req: Request, res: Response<ListResponse<T>>): Promise<void> {
    try {
      const data = await this.service.findAll();
      res.status(HTTP_STATUS.OK).json({
        data,
        count: data.length,
      });
    } catch (error) {
      this.handleError(error, 'Failed to retrieve resources', res);
    }
  }

  async update(
    req: Request<{ id: string }, object, Partial<T>>,
    res: Response<BaseResponse<T>>
  ): Promise<void> {
    try {
      const { id } = req.params;
      const data = await this.service.update(id, req.body);

      if (data) {
        res.status(HTTP_STATUS.OK).json({ data });
      } else {
        res.status(HTTP_STATUS.NOT_FOUND).json({
          message: `Resource with id ${id} not found`,
        });
      }
    } catch (error) {
      this.handleError(error, 'Failed to update resource', res);
    }
  }

  async delete(req: Request<{ id: string }>, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await this.service.delete(id);
      res.status(HTTP_STATUS.NO_CONTENT).end();
    } catch (error) {
      this.handleError(error, 'Failed to delete resource', res);
    }
  }

  protected handleError(error: unknown, defaultMessage: string, res: Response): void {
    console.error(error);
    const message = error instanceof Error ? error.message : defaultMessage;
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message });
  }
}
