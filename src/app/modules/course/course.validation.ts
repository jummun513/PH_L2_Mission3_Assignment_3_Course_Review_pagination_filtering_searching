import { z } from 'zod';

const tagCreateValidationSchema = z.object({
  name: z.string({
    required_error: 'Tag name field is required!',
    invalid_type_error: 'Tag name field allowed only string!',
  }),
  isDeleted: z.boolean().default(false),
});

const detailCreateValidationSchema = z.object({
  level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  description: z.string({
    required_error: 'Description field is required!',
    invalid_type_error: 'Description field allowed only string!',
  }),
});

const courseCreateValidationSchema = z.object({
  title: z.string({
    required_error: 'Title field is required!',
    invalid_type_error: 'Title field allowed only string!',
  }),
  instructor: z.string({
    required_error: 'Instructor field is required!',
    invalid_type_error: 'Instructor field allowed only string!',
  }),
  price: z.number().gte(1, { message: 'Price field is required!' }),
  tags: z.array(tagCreateValidationSchema),
  startDate: z.string({
    required_error: 'Start Date field is required!',
    invalid_type_error: 'Start Date field allowed only string!',
  }),
  endDate: z.string({
    required_error: 'End Date field is required!',
    invalid_type_error: 'End Date field allowed only string!',
  }),
  language: z.string({
    required_error: 'Language field is required!',
    invalid_type_error: 'Language field allowed only string!',
  }),
  provider: z.string({
    required_error: 'Provider field is required!',
    invalid_type_error: 'Provider field allowed only string!',
  }),
  details: detailCreateValidationSchema,
});

export const courseValidations = {
  courseCreateValidationSchema,
};
