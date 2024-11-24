import { Request, Response } from 'express';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const errorHandler = (err: any, req: Request, res: Response) => {
  const statusCode =
    err?.message === 'No product found!'
      ? 404
      : res.statusCode === 200
        ? 400
        : res.statusCode;

  const errorResponse = {
    message: err.message || 'Something went wrong',
    success: false,
    error: {
      name: err.name || 'Error',
      errors: err.errors || null,
    },
    stack: err.stack,
  };

  res.status(statusCode).json(errorResponse);
};

export default errorHandler;
