import ApiError from './ApiError';
import { NextFunction, Request, Response } from 'express';

export const errorHandler = async (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err) {
    const status: number = err.status || 500;
    let body: any = {
      message: err.message || 'An error occurred during the request.',
      name: err.name,
      status,
      stack: '',
    };
    await res.send(body);
  }
  next();
};
