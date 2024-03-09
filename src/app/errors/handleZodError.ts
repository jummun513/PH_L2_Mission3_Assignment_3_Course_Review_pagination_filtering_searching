import { ZodError, ZodIssue } from 'zod';

export const handleZodError = (err: ZodError) => {
  const errorSources = err.issues.map((issue: ZodIssue) => {
    return {
      field: issue?.path[issue?.path.length - 1],
      message: issue.message,
    };
  });
  return {
    message: 'Validation Error',
    errorSources,
  };
};
