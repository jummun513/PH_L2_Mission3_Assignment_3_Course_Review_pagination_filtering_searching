/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorSource, TGenericErrorResponse } from '../interface/error';
import { StatusCodes } from 'http-status-codes';

export const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const errorSources: TErrorSource = [
    {
      field: Object.keys(err.keyValue)[0],
      message: `${Object.values(err.keyValue)[0]} is a duplicate value.`,
    },
  ];
  return {
    statusCode: StatusCodes.CONFLICT,
    message: 'Duplicate Error',
    errorSources,
  };
};
