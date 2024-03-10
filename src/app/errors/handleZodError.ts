import { ZodError, ZodIssue } from 'zod';
import { TGenericErrorResponse } from '../interface/error';
import { StatusCodes } from 'http-status-codes';

export const handleZodError = (err: ZodError): TGenericErrorResponse => {
  const errorSources = err.issues.map((issue: ZodIssue) => {
    return {
      field: issue?.path[issue?.path.length - 1],
      message: issue.message,
    };
  });
  return {
    statusCode: StatusCodes.BAD_REQUEST,
    message: 'Validation Error',
    errorSources,
  };
};
