import mongoose from 'mongoose';
import { TErrorSource, TGenericErrorResponse } from '../interface/error';
import { StatusCodes } from 'http-status-codes';

export const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TGenericErrorResponse => {
  const errorSources: TErrorSource = Object.values(err.errors).map(
    (value: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        field: value?.path,
        message: value?.message,
      };
    },
  );
  return {
    statusCode: StatusCodes.BAD_REQUEST,
    message: 'Validation Error',
    errorSources,
  };
};
