import mongoose from 'mongoose';
import { TErrorSource, TGenericErrorResponse } from '../interface/error';
import { StatusCodes } from 'http-status-codes';

export const handleCaseError = (
  err: mongoose.Error.CastError,
): TGenericErrorResponse => {
  const errorSources: TErrorSource = [
    {
      field: err.path,
      message: err.message,
    },
  ];
  return {
    statusCode: StatusCodes.NOT_FOUND,
    message: 'Cast Error',
    errorSources,
  };
};
